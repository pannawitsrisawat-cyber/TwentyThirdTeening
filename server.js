const express = require('express');
const session = require('express-session');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// อ่านข้อมูลจาก POST request (Form data & JSON)
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// ตั้งค่า Session เพื่อตรวจสอบสถานะผู้ใช้
app.use(session({
    secret: 'roblox-2013-secret-key',
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false } // หากใช้ HTTPS ผ่าน Render ให้ตั้งเป็น true เมื่อเปิด trust proxy
}));

// ให้บริการ Static Files (CSS, JS, Images)
app.use(express.static(path.join(__dirname, 'public')));
app.use('/NewLogin', express.static(path.join(__dirname, 'public/NewLogin')));

// Middleware ตรวจสอบการเข้าสู่ระบบ
function checkAuth(req, res, next) {
    if (req.session && req.session.user) {
        next();
    } else {
        res.redirect('/NewLogin/');
    }
}

// 1. หน้าแรก ( Root & Default.aspx )
app.get('/', (req, res) => {
    if (req.session && req.session.user) {
        res.redirect('/Default.aspx');
    } else {
        res.redirect('/NewLogin/');
    }
});

app.get('/Default.aspx', checkAuth, (req, res) => {
    // ส่งไฟล์หน้า Homepage เมื่อเข้าสู่ระบบแล้ว
    res.sendFile(path.join(__dirname, 'public/Default.aspx'));
});

// 2. หน้า NewLogin
app.get('/NewLogin', (req, res) => {
    if (req.session && req.session.user) {
        return res.redirect('/Default.aspx');
    }
    res.sendFile(path.join(__dirname, 'public/NewLogin/index.html'));
});

app.get('/NewLogin/', (req, res) => {
    if (req.session && req.session.user) {
        return res.redirect('/Default.aspx');
    }
    res.sendFile(path.join(__dirname, 'public/NewLogin/index.html'));
});

// 3. จัดการการ POST ข้อมูล Sign In จากหน้า /newlogin
app.post('/newlogin', (req, res) => {
    const { Username, Password } = req.body;

    // ตรวจสอบข้อมูลล็อกอิน (ตัวอย่างล็อกอินง่ายๆ)
    if (Username && Password) {
        // บันทึก Session ผู้ใช้
        req.session.user = {
            username: Username
        };

        // Redirect ไปยังหน้า Default.aspx ตามที่ต้องการ
        return res.redirect('https://twentythirdteening.onrender.com/Default.aspx');
    } else {
        // ล็อกอินไม่สำเร็จ ให้กลับไปที่หน้า NewLogin
        return res.redirect('/NewLogin/');
    }
});

// 4. ระบบ Logout (สำหรับทดสอบ)
app.get('/logout', (req, res) => {
    req.session.destroy(() => {
        res.redirect('/NewLogin/');
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});