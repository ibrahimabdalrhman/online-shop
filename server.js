const app = require("./app");
const dotenv=require("dotenv")
dotenv.config({ path: './config.env' });
const mongoose = require('mongoose');


const DB = process.env.DATABASE.replace(
  "<PASSWORD>",
  process.env.DATABASE_PASSWORD
);

mongoose.connect(DB).then(() => {
    console.log("DB connected....");
}).catch(() => {
    console.log("Error on DB connection");
})


const port = 3000;
app.listen(port,() => {
    console.log("strart listen...>>"+port);
});