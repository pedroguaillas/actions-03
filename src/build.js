const fs = requiere('fs');
const app = require('./app');
const request = require('supertest');

(async () => {
    const res = await request(app).get('/');
    fs.mkdirSync('public', { recursive: true });
    fs.writeFileSync('public/index.html', res.text);
    console.log("tatic HTML generated");
})();