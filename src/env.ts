import { requireEnv } from "require-env-variable";

const { PORT: port } = requireEnv("PORT");
export const PORT = parseInt(port, 10);
