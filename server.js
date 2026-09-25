const express = require('express');
const cookieParser = require('cookie-parser');
const path = require('path');
const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Serve static assets from website/ (CSS, JS, images, subfolders)[cite: 8, 9]
app.use(express.static(path.join(__dirname, 'website')));

// ==========================================
// WEBSITE & AUTH ROUTES
// ==========================================

// Check cookie on root URL
app.get('/', (req, res) => {
    const userCookie = req.cookies['.ROBLOSECURITY'];
    if (userCookie) {
        return res.redirect('/home');
    } else {
        return res.redirect('/login');
    }
});

// Login Page[cite: 8]
app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, 'website', 'login.html'));
});

// Process Login Form[cite: 8]
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

// Home Page[cite: 8]
app.get('/home', (req, res) => {
    const userCookie = req.cookies['.ROBLOSECURITY'];
    if (!userCookie) {
        return res.redirect('/login');
    }
    res.sendFile(path.join(__dirname, 'website', 'home.html'));
});

// Logout[cite: 8]
app.get('/logout', (req, res) => {
    res.clearCookie('.ROBLOSECURITY');
    res.redirect('/login');
});

// ==========================================
// CLIENT & STUDIO ENDPOINTS
// ==========================================

// Client Join Script[cite: 8]
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

// Studio Toolbox Catalog[cite: 8]
app.get('/ide/toolbox/items', (req, res) => {
    res.type('application/json');
    res.json({
        "total": 2,
        "results": [
            {
                "id": 1,
                "name": "Spawn Location",
                "assetTypeId": 10,
                "url": "http://twentythirdteening.onrender.com/asset?id=1"
            },
            {
                "id": 2,
                "name": "Brick",
                "assetTypeId": 10,
                "url": "http://twentythirdteening.onrender.com/asset?id=2"
            }
        ]
    });
});

// Deliver Asset Files (.rbxm)[cite: 8]
app.get('/asset', (req, res) => {
    const assetId = req.query.id;
    const filePath = path.join(__dirname, 'assets', `${assetId}.rbxm`);

    res.sendFile(filePath, (err) => {
        if (err) {
            res.status(404).send('Asset not found');
        }
    });
});

// Studio User Auth Check[cite: 8]
app.get('/game/GetCurrentUser.ashx', (req, res) => {
    res.type('text/plain');
    res.send("1");
});

// ==========================================
// START SERVER (MUST BE AT THE VERY BOTTOM)
// ==========================================
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));