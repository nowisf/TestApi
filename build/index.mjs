import fastify from 'fastify';
import { PORT } from './env.mjs';

const server = fastify();
server.get("/ping", async (request, reply) => {
  return "pong\n";
});
server.listen({ port: PORT }, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Server listening at ${address}`);
});
//# sourceMappingURL=index.mjs.map
