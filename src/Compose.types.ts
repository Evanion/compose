import { ComponentType, PropsWithChildren } from "react";

export type Component =
  | ComponentType
  | [ComponentType, Record<string, unknown>]
  | ComponentType<PropsWithChildren>
  | [ComponentType, PropsWithChildren<Record<string, unknown>>];
