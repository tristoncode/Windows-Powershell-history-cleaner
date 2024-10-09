const fs = require("fs");

const windowsUsername = process.env.USERNAME;
// Change the current working directory
process.chdir(`C:\\Users\\${windowsUsername}\\AppData\\Roaming\\Microsoft\\Windows\\PowerShell\\PSReadline\\`);
// Write to file in the current working directory
fs.writeFile("ConsoleHost_history.txt", "", (err) => {
  if (err) {
    console.error("Error reading file:", err);
  }
});

console.log("Powershell history cleared!");
console.log("Press any key to exit...");
process.stdin.setRawMode(true);
process.stdin.resume();
process.stdin.setEncoding("utf8");
process.stdin.on("data", () => {
  console.log("Exiting...");
  process.exit();
});

/// to create .exe file run: (pkg .)
