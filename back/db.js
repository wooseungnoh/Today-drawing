import mongoose from "mongoose";

mongoose.connect("mongodb+srv://todaydrawadmin:study@cluster0-welpw.mongodb.net/<dbname>?retryWrites=true&w=majority", {
  useUnifiedTopology: true,
  useNewUrlParser: true
});

const db = mongoose.connection;

const handleOpen = () => console.log("Connected to DB");
const handleError = error => console.log(`error on DB connetction:${error}`);

db.once("open", handleOpen);
db.on("error", handleError);
