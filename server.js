const express = require('express');
const cookieParser = require('cookie-parser');
const path = require('path');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Serve static assets (CSS, JS, images) directly from the root folder
app.use(express.static(__dirname));

// Function to serve the 2013 Landing Page
const serveLandingPage = (req, res) => {
    const userCookie = req.cookies['.ROBLOSECURITY'];

    if (userCookie) {
        return res.redirect('/home');
    } else {
        // Explicitly send Default.aspx when visiting the root or aspx URL
        return res.sendFile(path.join(__dirname, 'Landing', 'Animated', 'Default.aspx'));
    }
};

// Catch root route / and all case variations of Default.aspx
app.get('/', serveLandingPage);
app.get('/Default.aspx', serveLandingPage);
app.get('/default.aspx', serveLandingPage);
app.get('/Landing/Animated/Default.aspx', serveLandingPage);
app.get('/landing/animated/default.aspx', serveLandingPage);

// Login / Sign Up Form Submission
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

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));