'use strict';

const fastify = require('fastify');
const env = require('./env.cjs');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

const fastify__default = /*#__PURE__*/_interopDefaultLegacy(fastify);

const server = fastify__default["default"]();
server.get("/ping", async (request, reply) => {
  return "pong\n";
});
server.listen({ port: env.PORT }, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Server listening at ${address}`);
});
//# sourceMappingURL=index.cjs.map
