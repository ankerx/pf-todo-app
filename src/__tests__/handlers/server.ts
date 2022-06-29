import { authHandler } from "./authHandler";
import { taskHandler } from "./taskHandler";
export const handlers = [...authHandler, ...taskHandler];
