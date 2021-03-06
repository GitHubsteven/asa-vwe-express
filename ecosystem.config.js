let app_dir = "/data/vwe/logs/asa-vwe-express";
module.exports = {
    apps: [{
        name: 'asa-vwe-express',
        script: './dist/server.js',

        // Options reference: https://pm2.keymetrics.io/docs/usage/application-declaration/
        args: 'one two',
        instances: 1,
        autorestart: true,
        watch: true,
        ignore_watch: ["[\/\\]\./", "node_modules"],
        error_file: app_dir + '/err.log',
        out_file: app_dir + '/out.log',
        log_file: app_dir + '/combined.log',
        time: true,
        max_memory_restart: '1G',
        env: {
            NODE_ENV: 'development'
        },
        env_production: {
            NODE_ENV: 'production'
        }
    }],

    deploy: {
        production: {
            user: 'node',
            host: '127.0.0.0',
            ref: 'origin/master',
            repo: 'https://github.com/GitHubsteven/x-asa/issues',
            path: '/var/www/production',
            'post-deploy': 'npm install && pm2 reload ecosystem.config.js --env production'
        }
    }
};
