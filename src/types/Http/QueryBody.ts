import { MethodTypes } from "./MethodTypes";

export type QueryBody = {
  method?: MethodTypes;
  body?: Record<string, string | number>;
};
