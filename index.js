const speedModule = require('./lib/speed.js');
const latestModule = require('./lib/latest.js');
const randomModule = require('./lib/random.js');
const searchModule = require('./lib/search.js');
const cleanModule = require('./lib/clean.js');
const checkModule = require('./lib/check.js');

module.exports = {
  mirror: speedModule.mirror,
  latest: latestModule,
  random: randomModule,
  search: searchModule,
  utils: {
    clean: cleanModule,
    check: {
      hasField: checkModule,
      canDownload: speedModule.canDownload,
    },
  },
};
