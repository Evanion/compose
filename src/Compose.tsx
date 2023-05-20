import * as React from "react";
import { Component } from "./Compose.types";

interface Props {
  components: Component[];
  children: React.ReactNode;
}

export const ComposeProvider: React.FC<Props> = ({ components, children }) => (
  <>
    {components.reverse().reduce((acc, curr) => {
      const [Provider, props] = Array.isArray(curr)
        ? [curr[0], curr[1]]
        : [curr, {}];

      return <Provider {...props}>{acc}</Provider>;
    }, children)}
  </>
);
