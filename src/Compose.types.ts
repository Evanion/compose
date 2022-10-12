import { ComponentType, Provider } from "react";

export type Component =
  | ComponentType
  | [ComponentType, Record<string, unknown>]
  | Provider<unknown>
  | [Provider<unknown>, Record<string, unknown>];
