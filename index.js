import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import Category from "./src/models/category.js";
import product from "./src/models/product.js";
import dynamicCrud from "./src/routes/api.js";
import categoryValidate from "./src/middlewares/category.js";
import productValidate from "./src/middlewares/product.js";

const app = express();
const env = dotenv.config().parsed;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

dotenv.config();

// Database connection
mongoose.connect(env.DB_HOST, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  console.log(`Database ${env.DB_NAME} connected`);
});

// Middleware
app.use(categoryValidate);
app.use(productValidate);

// Routes
app.use("/api/v1/categories", dynamicCrud(Category));
app.use("/api/v1/products", dynamicCrud(product));

// app.get('/', (req, res) => {
//   return res.json({ message: `Welcome Dimas` });
// });

const PORT = env.PORT;

app.listen(PORT, () => {
  console.log(`Server running on port http://localhost:${PORT}`);
});
