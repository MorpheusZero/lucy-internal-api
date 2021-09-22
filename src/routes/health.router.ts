import { IBaseRouter } from "../common/interfaces/base-router.interface";
import {
  DoneFuncWithErrOrRes,
  FastifyInstance,
  FastifyReply,
  FastifyRequest,
  RouteOptions,
} from "fastify";

/**
 * For various health checks
 */
export class HealthRouter implements IBaseRouter {
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
      fastify.get("/", this.healthCheck.bind(this));
      done();
    };
  }

  private healthCheck(_request: FastifyRequest, reply: FastifyReply) {
    try {
      reply.send({
        status: 200,
        message: "ok",
      });
    } catch (error) {
      console.error();
    }
  }
}
