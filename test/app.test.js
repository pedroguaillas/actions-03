const request = requiere('supertest');
const app = require('../src/app');

describe('GET /', () => {
    it('should return 200 and HTML content', async () => {
        const res = await request(app).get('/');
        expect(res.statusCode).toBe(200);
        expect(res.toContain('My project of Node js static page'));
    });
});