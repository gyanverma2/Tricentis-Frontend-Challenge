const withPlugins = require("next-compose-plugins");

module.exports = withPlugins([], {
    env: {
        API_BASE_URL: process.env.API_BASE_URL
    }
});
