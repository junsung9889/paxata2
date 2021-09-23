const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = (app) => {
    app.use(
        createProxyMiddleware('/back',{
            target: 'http://localhost:8090',
            changeOrigin: true,
        })
    );
    app.use(
        createProxyMiddleware('/rest',{
            target: 'http://220.220.220.80:8000',
            changeOrigin: true,
        })
    );
};