// Learing for file system
const fs = require("fs");

// create new file and pase data on it
fs.writeFileSync(
  "read.txt",
  "This file is created from file system module of nodejs."
);

// It is updating data on existing file
fs.writeFileSync(
  "read.txt",
  "This file is created from file system module of nodejs and update it."
);

// Read file of path
fs.readFile("./read.txt", (err, data) => {
  if (err) throw err;
  //   console.log(data); -> This is give data on buffer type
  console.log(data.toString());
});

// I can read dir
fs.readdir("../todo-fe", (err, files) => {
  if (err) throw err;
  console.log(files);
});
