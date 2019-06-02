const authcord = require("../index");

const client = {
    id: "123456789012345678",
    secret: "abcDeFGHIJklmOPQRstUVWZYZ1234-A"
}

authcord.url(client, encodeURIComponent('http://localhost:3000/callback'), ["identify", "guild.join"]);


