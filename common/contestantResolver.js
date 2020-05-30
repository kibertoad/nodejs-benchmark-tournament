const getopts = require("getopts");

const options = getopts(process.argv.slice(1), {
  alias: {
    contestant: "c",
  },
  default: {},
});

function resolveContestant(contestants) {
  const contestandId = options.contestant;
  const contestant = contestants[contestandId];
  if (!contestant) {
    throw new Error(`Unknown contestant ${contestandId}`);
  }
  return contestant;
}

module.exports = {
  resolveContestant,
};
