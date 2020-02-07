import Http from "http";
import Util from "util";
import PEvent from "p-event";
import stoppable from "stoppable";

const createServerAndListen = async (app, port = 3002, host = "0.0.0.0") => {
    const server = stoppable(Http.createServer(app.callback()), 7000);
    server.listen(port, host);

    server.stop = Util.promisify(server.stop);

    await PEvent(server, "listening");

    return server;
};


export default createServerAndListen;
