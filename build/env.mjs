import { requireEnv } from 'require-env-variable';

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
//# sourceMappingURL=env.mjs.map
