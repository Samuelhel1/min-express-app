import express from "express";
import path from "path";
import { fileURLToPath } from "url";

import indexRouter from "./routes/index.js";
import aboutRouter from "./routes/about.js";
import notFound from "./routes/notFound.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/about", aboutRouter);
app.use(notFound);

app.listen(PORT, () => {
  console.log(`Servern körs på http://localhost:${PORT}`);
});