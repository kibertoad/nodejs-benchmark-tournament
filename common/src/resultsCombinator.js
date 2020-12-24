const fs = require("fs");
const path = require("path");
const getopts = require("getopts");
const { loadResults } = require("photofinish");

const options = getopts(process.argv.slice(1), {
  alias: {
    resultsDir: "r",
    precision: "p",
  },
  default: {},
});

const { generateTable } = require("photofinish");

async function saveTable() {
  const baseResultsDir = options.resultsDir;
  const benchmarkResults = await loadResults(baseResultsDir);

  const table = generateTable(benchmarkResults, {
    precision: options.precision,
  });
  console.log(table);

  const targetFilePath = path.resolve(baseResultsDir, "results.md");
  fs.writeFileSync(targetFilePath, table)
}

saveTable();
