"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Transport = void 0;
const NavalTransport_1 = require("@civ-clone/base-unit-type-naval-transport/NavalTransport");
class Transport extends NavalTransport_1.default {
    capacity() {
        return 8;
    }
}
exports.Transport = Transport;
exports.default = Transport;
//# sourceMappingURL=Transport.js.map