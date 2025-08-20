module.exports = {
  apps: [{
    name: 'central-dashboard',
    script: 'server.js',
    instances: 1,
    autorestart: true,
    watch: false,
    max_memory_restart: '1G',
    env: {
      NODE_ENV: 'production',
      PORT: 3000
    },
    env_development: {
      NODE_ENV: 'development',
      PORT: 3000
    },
    log_date_format: 'YYYY-MM-DD HH:mm Z',
    out_file: './logs/out.log',
    error_file: './logs/error.log',
    log_file: './logs/combined.log',
    time: true
  }]
};