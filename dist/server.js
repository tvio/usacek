"use strict";
/* app/server.ts */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Import everything from express and assign it to the express variable
const express_1 = __importDefault(require("express"));
// Import WelcomeController from controllers entry point
const controller_1 = require("./controller");
// Create a new express application instance
const app = express_1.default();
// The port the express app will listen on
const port = 3000;
// Mount the WelcomeController at the /welcome route
app.use('/welcome', controller_1.Controller);
// Serve the application at the given port
app.listen(port, () => {
    // Success callback
    console.log(`Listening at http://localhost:${port}/`);
});
//# sourceMappingURL=server.js.map