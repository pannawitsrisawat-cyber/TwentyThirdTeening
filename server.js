const express = require('express');
const app = express();
const PORT = process.env.PORT || 80;

app.use(express.json());

// Root Check
app.get('/', (req, res) => {
    res.send('<h1>TwentyThirdTeening Server Active</h1>');
});

// User Check Endpoint
app.get('/game/GetCurrentUser.ashx', (req, res) => {
    res.type('text/plain');
    res.send('1');
});

// Join Script Endpoint
app.get('/game/join.ashx', (req, res) => {
    const hostIP = req.query.ip || "127.0.0.1";
    const hostPort = req.query.port || 53640;
    
    const joinScript = `
        game:GetService("RunService"):SetRobloxVersion("0.132.0.0")
        local player = game.Players:CreateLocalPlayer(1)
        player.Name = "Player"
        game:GetService("Visit"):SetUploadUrl("")
        local networkClient = game:GetService("NetworkClient")
        
        local function onConnected(url, port)
            local replica = networkClient:Connect("${hostIP}", ${hostPort}, 0, 20)
        end
        
        networkClient.ConnectionAccepted:connect(onConnected)
    `;
    
    res.type('text/plain');
    res.send(joinScript);
});

app.listen(PORT, () => console.log(`Server live on port ${PORT}`));