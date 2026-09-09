"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
router.get("/", (req, res) => {
    res.send("AAADADADDA");
});
router.get("/about", (req, res) => {
    res.send("algo legal");
});
exports.default = router;
//# sourceMappingURL=router.js.map