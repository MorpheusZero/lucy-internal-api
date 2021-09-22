/**
 * The base properties that all routers should have.
 */
export interface IBaseRouter {
  /**
   * The prefix that this router will place all of its child routes on.
   */
  prefix: string;

  /**
   * Build the routes we need and register them to the main fastify router.
   */
  buildRoutes: () => any;
}
