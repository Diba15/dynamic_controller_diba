import express from "express";
import runValidation from "../libraries/runValidation.js";
import { checkSchema } from "express-validator";

const app = express();

// store
app.post(
  "/api/v1/products",
  checkSchema({
    categoryId: {
      notEmpty: true,
    },
    name: {
      notEmpty: true,
    },
    status: {
      notEmpty: true,
    },
  }),
  runValidation
);

// Update
app.put(
  "/api/v1/products/:id",
  checkSchema({
    id: {
      notEmpty: true,
      in: "param",
    },
    categoryId: {
      notEmpty: true,
    },
    name: {
      notEmpty: true,
    },
    status: {
      notEmpty: true,
    },
  }),
  runValidation
);

// Show
app.get(
  "/api/v1/products/:id",
  checkSchema({
    id: {
      notEmpty: true,
      in: "param",
    },
  }),
  runValidation
);

// Delete
app.delete(
  "/api/v1/products/:id",
  checkSchema({
    id: {
      notEmpty: true,
      in: "param",
    },
  }),
  runValidation
);

export default app;
