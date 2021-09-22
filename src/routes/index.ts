import { FastifyInstance } from "fastify";
import { IBaseRouter } from "../common/interfaces/base-router.interface";
import { HealthRouter } from "./health.router";
import { WeatherRouter } from "./weather.router";

/**
 * Handles setting up all the routes that the application will use.
 */
export class RouterManager {
  /**
   * Handles initializing all of the routes that the application will use.
   * @param fastify A reference to the current instance of fastify.
   */
  public static initializeRoutes(fastify: FastifyInstance) {
    for (const config of RouterManager.getRoutesConfig()) {
      fastify.register(config.buildRoutes(), { prefix: config.prefix });
    }
  }

  /**
   * Build out the collection of routes that the application will use.
   * @private
   */
  private static getRoutesConfig(): IBaseRouter[] {
    return [new HealthRouter("/health"), new WeatherRouter("/weather")];
  }
}
