import { ComponentType, PropsWithChildren, forwardRef } from "react";

export type Component =
  | ComponentType<Required<PropsWithChildren>>
  | ReturnType<typeof forwardRef>;

export type Provider = Component;
