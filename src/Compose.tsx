import * as React from "react";
import { Component, Provider } from "./Compose.types";

type ComponentProps = {
  components: Component[];
  providers?: never;
};

type ProviderProps = {
  providers: Provider[];
  components?: never;
};

export const ComposeProvider: React.FC<
  (ComponentProps | ProviderProps) & Required<React.PropsWithChildren<{}>>
> = ({ children, components, providers }) => {
  components = components || providers;

  return (
    <>
      {components.reverse().reduce((acc, curr) => {
        const [Provider, props] = Array.isArray(curr)
          ? [curr[0], curr[1]]
          : [curr, {}];

        return <Provider {...props}>{acc}</Provider>;
      }, children)}
    </>
  );
};
