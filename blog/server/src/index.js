import PEvent from "p-event";
import * as Database from "./database";
import { app, createServerAndListen } from "./app";


const main = async () => {
    let server = null;
    try {
        await Database.connect();
        server = await createServerAndListen(app, 3002, "0.0.0.0");
        console.log("Server is listening on: 0.0.0.0:3002");

        await Promise.race([
            ...["SIGINT", "SIGHUP", "SIGTERM"].map((s) => PEvent(process, s, {
                rejectionEvents: ["uncaughtException", "unhandledRejection"],
            })),
        ]);
    } catch (err) {
        process.exitCode = 1;
        console.log(err);
    } finally {
        console.log(server);
        if (server) {
            console.log("Close server");
            await server.stop();
            console.log("Server closed");
        }

        console.log("Close database");
        await Database.disconnect();
        console.log("Database closed");

        setTimeout(() => process.exit(), 10000).unref();
    }
};


main();
// App();
