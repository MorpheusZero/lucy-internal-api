import Fastify from "fastify";
import { RouterManager } from "./routes";
import middie from "middie";
import helmet from "helmet";
import morgan from "morgan";

/**
 * The entry-point of the application.
 */
export class AppServer {
  /**
   * Initialize the HTTP server and then start listening for requests.
   */
  public static async run() {
    // Create the server instance.
    const fastify = Fastify({
      logger: false,
    });

    // Setup Middleware Engine
    await fastify.register(middie);

    // Setup Helmet for Security
    fastify.use(helmet());

    // Setup Morgan Logging
    fastify.use(morgan("dev"));

    // Setup the routes that the application will use.
    RouterManager.initializeRoutes(fastify);

    // Start listening...
    return fastify.listen(9099);
  }
}
