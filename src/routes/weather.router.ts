import { IBaseRouter } from "../common/interfaces/base-router.interface";
import {
  DoneFuncWithErrOrRes,
  FastifyInstance,
  FastifyReply,
  FastifyRequest,
  RouteOptions,
} from "fastify";

/**
 * FFor all weather related endpoints.
 */
export class WeatherRouter implements IBaseRouter {
  /**
   * The prefix we want to use when creating this route.
   */
  public prefix: string;

  /**
   * Default Constructor
   */
  constructor(prefix: string) {
    this.prefix = prefix;
  }

  /**
   * Return a function that will declare our route handlers.
   */
  public buildRoutes() {
    return (
      fastify: FastifyInstance,
      _opts: RouteOptions,
      done: DoneFuncWithErrOrRes
    ) => {
      fastify.get("/current", this.getCurrentConditions.bind(this));
      done();
    };
  }

  private getCurrentConditions(_request: FastifyRequest, reply: FastifyReply) {
    try {
      reply.send({
        status: 200,
        message: "THE WEATHER IS NOW",
      });
    } catch (error) {
      console.error();
    }
  }
}
