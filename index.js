const lms = require("./app");

lms.listen(3000, () => {
  console.log("Started express server at port 3000");
});
