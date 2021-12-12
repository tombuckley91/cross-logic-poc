import { createMachine, spawn, ActorRefFrom } from "xstate";

import cartMachine from "../cart";

export interface SDKContext {
  cart: ActorRefFrom<typeof cartMachine>;
}

const sdkMachine = createMachine<SDKContext>({
  id: "sdk",
  initial: "inactive",
  context: () => ({
    cart: spawn(cartMachine, { name: "cart" }),
  }),
  states: {
    inactive: {
      on: { TOGGLE: "active" },
    },
    active: {
      on: { TOGGLE: "inactive" },
    },
  },
});

export default sdkMachine;
