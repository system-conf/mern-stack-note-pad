import express from "express";
import dotenv from "dotenv";
import notRouter from "./routes/notlar.js";
import mongoose from "mongoose";
import kullaniciRoute from "./routes/kullanici.js";

dotenv.config();

const app = express();

app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

app.use("/api/notlar", notRouter);
app.use("/api/kullanici", kullaniciRoute);


//ver tabanı bağlantısı

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("veritabanına Bağlandı");
    app.listen(process.env.PORT, () => {
      console.log(`${process.env.PORT}.port dinleniyor`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
