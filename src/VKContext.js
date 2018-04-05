import React, { createContext } from "react";

const VKContext = createContext();

export function withVK(Component) {
  return function VKComponent(props) {
    return (
      <VKContext.Consumer>
        {vk => <Component {...props} vk={vk} />}
      </VKContext.Consumer>
    );
  };
}

export default VKContext;
