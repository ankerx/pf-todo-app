import { setupWorker } from "msw";
import { handlers } from "./handlers/server";

export const worker = setupWorker(...handlers);
