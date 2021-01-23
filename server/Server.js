import Config from "./Config.js";
import express from "express";
import e from "express";

const app = express();

// TODO: Download and save new image on servr before sending internal url to requesting client
function onImageRequested(request, response) {
    response.send("Hello World");
}

class Server {

    start() {
        let server;
        app.get(Config.API_ROUTE, onImageRequested);
        app.use(Config.APP_ROUTE, express.static(Config.APP_DIR));
        server = app.listen(Config.PORT, "localhost", function() {
            console.log("Cat-Meme-Server listening at http://%s:%s", server.address().address, server.address().port);
        });
    }

}

export default new Server();