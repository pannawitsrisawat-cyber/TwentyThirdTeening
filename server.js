const express = require('express');
const cookieParser = require('cookie-parser');
const path = require('path');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Serve static assets directly from root
app.use(express.static(__dirname));

// Landing page route handler
const serveLandingPage = (req, res) => {
    const userCookie = req.cookies['.ROBLOSECURITY'];

    if (userCookie) {
        return res.redirect('/home');
    } else {
        // Force Express to serve .aspx as HTML instead of triggering a download
        res.type('html');
        return res.sendFile(path.join(__dirname, 'Landing', 'Animated', 'Default.aspx'));
    }
};

// Catch root route and aspx endpoints
app.get('/', serveLandingPage);
app.get('/Default.aspx', serveLandingPage);
app.get('/default.aspx', serveLandingPage);
app.get('/Landing/Animated/Default.aspx', serveLandingPage);
app.get('/landing/animated/default.aspx', serveLandingPage);

// Login / Sign Up POST Handler
app.post('/Login/v1', (req, res) => {
    const { username, password } = req.body;
    if (username && password) {
        res.cookie('.ROBLOSECURITY', 'USER_SESSION_TOKEN_123', {
            httpOnly: true,
            maxAge: 7 * 24 * 60 * 60 * 1000
        });
        return res.redirect('/home');
    } else {
        return res.status(401).send("Invalid credentials");
    }
});

// Home page after login
app.get('/home', (req, res) => {
    const userCookie = req.cookies['.ROBLOSECURITY'];
    if (!userCookie) {
        return res.redirect('/');
    }
    res.send("<h1>Welcome to TwentyThirdTeening!</h1><p>Logged in successfully.</p><a href='/logout'>Logout</a>");
});

// Logout
app.get('/logout', (req, res) => {
    res.clearCookie('.ROBLOSECURITY');
    res.redirect('/');
});

// Studio & Client Endpoints
app.get('/game/join.ashx', (req, res) => {
    res.type('text/plain');
    res.send(`
        local client = game:GetService("NetworkClient")
        local player = game:GetService("Players"):CreateLocalPlayer(1)
        player:SetSuperSafeChat(false)
        player.Name = "Player"
        client:Connect("127.0.0.1", 53640, 0, 20)
    `);
});

app.get('/ide/toolbox/items', (req, res) => {
    res.type('application/json');
    res.json({ "total": 0, "results": [] });
});

app.get('/asset', (req, res) => {
    const assetId = req.query.id;
    res.sendFile(path.join(__dirname, 'assets', `${assetId}.rbxm`));
});

app.get('/game/GetCurrentUser.ashx', (req, res) => {
    res.type('text/plain');
    res.send("1");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));