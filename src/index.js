"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const getEnv_js_1 = require("./utils/getEnv.js");
const router_js_1 = __importDefault(require("./router/router.js"));
const app = (0, express_1.default)();
const { PORT } = (0, getEnv_js_1.getEnv)();
app.use(router_js_1.default);
app.listen(PORT, () => {
    console.log(`To ouvindo na porta ${PORT}.`);
});
//# sourceMappingURL=index.js.map