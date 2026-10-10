const express = require('express');
const session = require('express-session');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Parse incoming request bodies (forms & JSON)
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Session management
app.use(session({
    secret: 'roblox-2013-secret-key',
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false }
}));

// Serve static assets from public directory
app.use(express.static(path.join(__dirname, 'public')));
app.use('/NewLogin', express.static(path.join(__dirname, 'public/NewLogin')));

// Authentication check middleware
function checkAuth(req, res, next) {
    if (req.session && req.session.user) {
        return next();
    }
    return res.redirect('/NewLogin/');
}

// 1. Root and Default routes
app.get('/', (req, res) => {
    if (req.session && req.session.user) {
        return res.redirect('/Default.aspx');
    }
    return res.redirect('/NewLogin/');
});

app.get('/Default.aspx', checkAuth, (req, res) => {
    res.sendFile(path.join(__dirname, 'public/Default.aspx'));
});

// 2. Login Page routes
app.get(['/NewLogin', '/NewLogin/'], (req, res) => {
    if (req.session && req.session.user) {
        return res.redirect('/Default.aspx');
    }
    res.sendFile(path.join(__dirname, 'public/NewLogin/index.html'));
});

// 3. POST Route for handling login submissions from #loginForm
app.post('/newlogin', (req, res) => {
    const { Username, Password } = req.body;

    if (Username && Password) {
        req.session.user = { username: Username };
        return res.redirect('/Default.aspx');
    }

    return res.redirect('/NewLogin/');
});

// 4. Local Sign Up route (prevents Wayback Machine / 2020 redirects)
app.get('/Login/NewAge.aspx', (req, res) => {
    const { m, d, y } = req.query;
    console.log(`Sign-up registration requested - Month: ${m}, Day: ${d}, Year: ${y}`);
    
    // Send your custom sign-up file or page if you have one ready, 
    // or point it to a local sign-up html page file
    res.sendFile(path.join(__dirname, 'public/Login/NewAge.html')); 
    // Note: If you haven't created NewAge.html yet, you can change this to render a basic message or redirect to your signup template.
});

// 5. Logout Route
app.get('/logout', (req, res) => {
    req.session.destroy(() => {
        res.redirect('/NewLogin/');
    });
});

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});