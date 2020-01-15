import express from "express";
import cors from "cors";
import bp from "body-parser";
import DbContext from "./db/dbconfig";
const server = express();

//Fire up database connection
DbContext.connect();

//Sets the port to Heroku's, and the files to the built project
var port = process.env.PORT || 3000;
server.use(express.static(__dirname + "/../client/dist"));

var whitelist = ["http://localhost:8080"];
var corsOptions = {
  origin: function(origin, callback) {
    var originIsWhitelisted = whitelist.indexOf(origin) !== -1;
    callback(null, originIsWhitelisted);
  },
  credentials: true
};
server.use(cors(corsOptions));

//REGISTER MIDDLEWEAR
server.use(bp.json());
server.use(
  bp.urlencoded({
    extended: true
  })
);

//REGISTER YOUR SESSION, OTHERWISE YOU WILL NEVER GET LOGGED IN
import Session from "./middleware/session";
import UsersController from "./controllers/UsersController";
import HousesController from "./controllers/HousesController";
import ProfilesController from "./controllers/ProfilesController";

server.use(new Session().express);
server.use("/account", new UsersController().router);
server.use("/api/profiles", new ProfilesController().router);
server.use("/api/houses", new HousesController().router);

//YOUR ROUTES HERE!!!!!!
// import NotesController from "./controllers/NotesController";
// import HouseProfileRelsController from "./controllers/HouseProfileRelsController";
// import TasksController from "./controllers/TasksController";
// import HouseNotesController from "./controllers/HouseNotesController";

// server.use("/api/houseprofilerels", new HouseProfileRelsController().router);
// server.use("/api/notes", new NotesController().router);
// server.use("/api/tasks", new TasksController().router);
// server.use("/api/housenotes", new HouseNotesController().router);

//NOTE Default error handler, catches all routes with an error attached
server.use((error, req, res, next) => {
  res.status(error.status || 400).send({ error: { message: error.message } });
});

//Catch all
server.use("*", (req, res, next) => {
  res.status(404).send({
    error: "No matching routes"
  });
});

server.listen(port, () => {
  console.log("server running on port", port);
});
