import { AppServer } from "./server";

/**
 * Bootstrap the application.
 */
AppServer.run()
  .then((srv) => {
    console.log(srv);
  })
  .catch((error) => {
    console.error(error.message);
  });
