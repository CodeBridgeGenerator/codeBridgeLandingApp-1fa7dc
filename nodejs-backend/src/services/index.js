const cms = require("./cms/cms.service.js");
// ~cb-add-require-service-name~

// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(cms);
    // ~cb-add-configure-service-name~
};
