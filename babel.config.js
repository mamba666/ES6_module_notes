const presets = [
  ["@babel/env", {
    targets: {
      edge: "17",
      firefox: "60",
      safari: "11.1",
      chrome: "67",
    }
  }]
]

module.exports = {
  presets
}