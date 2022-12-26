import { dirname, resolve } from "path";

import dotenv from "dotenv";
import { fileURLToPath } from "url";
import { requireEnv } from "require-env-variable";

dotenv.config({
  path: resolve(dirname(fileURLToPath(import.meta.url)), "../.env"),
});

const { PORT: port } = requireEnv("PORT");
export const PORT = parseInt(port, 10);

export const { HOST } = requireEnv("HOST");

export const API_URL = `http://${HOST}:${PORT}`;

export const HEALTH_URL = `${API_URL}/health`;

console.log({
  API_URL,
  HEALTH_URL,
});
