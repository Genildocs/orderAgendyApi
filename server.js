const dotenv = require("dotenv");
dotenv.config({ path: "./.env" });

const app = require("./app");

const PORT = 3001 || process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
