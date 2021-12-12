import { useMachine } from "@xstate/react";
import sdkMachine from "./machines/sdk";
import useCart from "./hooks/useCart";

export const useSDK = () => {
  const [state, send] = useMachine(sdkMachine, { devTools: true });

  return {
    useCart: useCart(state.context.cart),
  };
};
