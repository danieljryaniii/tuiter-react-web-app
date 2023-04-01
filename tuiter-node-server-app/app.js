import express from 'express';
import HelloController from "./controllers/hello-controller.js";
import UsersController from "./controllers/users/users-controller.js";

const app = express();
app.use(express.json());

console.log("Server Started.............");
console.log("Listening on Port 4000.....");

HelloController(app);
UsersController(app);
app.listen(4000);

