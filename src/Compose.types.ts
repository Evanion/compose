import { ComponentType, PropsWithChildren, forwardRef } from "react";

export type Component<T = Required<PropsWithChildren>> =
  | ComponentType<T>
  | ReturnType<typeof forwardRef>
  | [ComponentType<T>, Omit<T, "children">]
  | [ReturnType<typeof forwardRef>, Omit<T, "children">];

export type Provider = Component;
