const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(
        '/rest',
        createProxyMiddleware({
            target: 'http://220.220.220.80:8000',
            changeOrigin: true,
        })
    );
    app.use(
        '/back',
        createProxyMiddleware({
            target: 'http://localhost:8080',
            changeOrigin: true,
        })
    );
};