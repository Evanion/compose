import { ComponentType } from "react";

export type Component =
  | ComponentType
  | [ComponentType, Record<string, unknown>];
