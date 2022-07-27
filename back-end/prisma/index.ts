const express = require("express");
import { PrismaClient } from "@prisma/client";
import cors from "cors";
import hyperRoute from "../routes/v1/hp";
import mpgsRoute from "../routes/v1/mpgs";
const prisma = new PrismaClient();

async function main() {
  const app = express();
  const port = process.env.PORT || 4000;
  app.use(cors());
  app.use(express.json());

  app.use("/hp", hyperRoute);
  app.use("/mpgs", mpgsRoute);
  app.listen(port, () =>
    console.log(`REST API server ready at: http://localhost:${port}`)
  );
}

main()
  .catch((e) => {
    throw e;
  })

  .finally(async () => {
    await prisma.$disconnect();
  });
