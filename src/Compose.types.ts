import { ComponentType, PropsWithChildren, forwardRef } from "react";

export type Component =
  | ComponentType<Required<PropsWithChildren>>
  | ReturnType<typeof forwardRef>
  | [ComponentType<Required<PropsWithChildren>>, Record<string, unknown>]
  | [ReturnType<typeof forwardRef>, Record<string, unknown>];

export type Provider = Component;
