import express from "express";
import runValidation from "../libraries/runValidation.js";
import { checkSchema } from "express-validator";

const app = express();

// store
app.post(
  "/api/v1/categories",
  checkSchema({
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
  "/api/v1/categories/:id",
  checkSchema({
    id: {
      notEmpty: true,
      in: "param",
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
  "/api/v1/categories/:id",
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
  "/api/v1/categories/:id",
  checkSchema({
    id: {
      notEmpty: true,
      in: "param",
    },
  }),
  runValidation
);


export default app;
