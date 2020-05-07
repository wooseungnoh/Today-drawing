import mongoose from "mongoose";

mongoose.connect("mongodb://localhost:27017/todayDraw", {
  useUnifiedTopology: true,
  useNewUrlParser: true
});

const db = mongoose.connection;

const handleOpen = () => console.log("Connected to DB");
const handleError = error => console.log(`error on DB connetction:${error}`);

db.once("open", handleOpen);
db.on("error", handleError);
