import { resolve, dirname } from 'path';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { requireEnv } from 'require-env-variable';

dotenv.config({
  path: resolve(dirname(fileURLToPath(import.meta.url)), "../.env")
});
const { PORT: port } = requireEnv("PORT");
const PORT = parseInt(port, 10);
const { HOST } = requireEnv("HOST");
const API_URL = `http://${HOST}:${PORT}`;
const HEALTH_URL = `${API_URL}/health`;
console.log({
  API_URL,
  HEALTH_URL
});

export { API_URL, HEALTH_URL, HOST, PORT };
//# sourceMappingURL=env.js.map
