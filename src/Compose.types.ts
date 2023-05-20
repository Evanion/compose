import { ComponentType, PropsWithChildren, forwardRef } from "react";

export type Component =
  | ComponentType
  | [ComponentType, Record<string, unknown>]
  | ComponentType<PropsWithChildren>
  | [ComponentType, PropsWithChildren<Record<string, unknown>>]
  | ReturnType<typeof forwardRef>;

export type Provider = Component;
