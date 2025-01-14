module.exports = {
    devServer: {
      port: 8081, // Change the development server port
      proxy: {
        '/api': {
          target: 'http://127.0.0.1:5000', // Flask backend
          changeOrigin: true,
          pathRewrite: { '^/api': '' }, // Remove `/api` prefix when proxying
        },
      },
    },
  };
  
  