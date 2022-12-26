'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const path = require('path');
const dotenv = require('dotenv');
const url = require('url');
const requireEnvVariable = require('require-env-variable');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

const dotenv__default = /*#__PURE__*/_interopDefaultLegacy(dotenv);

dotenv__default["default"].config({
  path: path.resolve(path.dirname(url.fileURLToPath((typeof document === 'undefined' ? new (require('u' + 'rl').URL)('file:' + __filename).href : (document.currentScript && document.currentScript.src || new URL('env.cjs', document.baseURI).href)))), "../.env")
});
const { PORT: port } = requireEnvVariable.requireEnv("PORT");
const PORT = parseInt(port, 10);
const { HOST } = requireEnvVariable.requireEnv("HOST");
const API_URL = `http://${HOST}:${PORT}`;
const HEALTH_URL = `${API_URL}/health`;
console.log({
  API_URL,
  HEALTH_URL
});

exports.API_URL = API_URL;
exports.HEALTH_URL = HEALTH_URL;
exports.HOST = HOST;
exports.PORT = PORT;
//# sourceMappingURL=env.cjs.map
