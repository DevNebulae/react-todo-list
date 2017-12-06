switch (process.env.NODE_ENV) {
  case "prod":
  case "production":
    module.exports = require("./webpack/production.js")
    break
  case "dev":
  case "development":
    module.exports = require("./webpack/development.js")
    break
  default:
    module.exports = require("./webpack/production.js")
}
