import { Actor, HttpAgent } from "@dfinity/agent";
import { environment } from "../../../HelloWorld-MA-frontend/enviroments/enviroment";

import { idlFactory } from "../../HelloWorld-MA-backend/HelloWorld-MA-backend.did";
export { idlFactory } from "../../HelloWorld-MA-backend/HelloWorld-MA-backend.did";


export const canisterId = environment.MOTOKO_CANISTER_BACKEND_ID;

export const createActor = (canisterId, options = {}) => {
  const agent = options.agent || new HttpAgent({ ...options.agentOptions });

  if (options.agent && options.agentOptions) {
    console.warn(
      "Detected both agent and agentOptions passed to createActor. Ignoring agentOptions and proceeding with the provided agent."
    );
  }

  // Fetch root key for certificate validation during development
  if (environment.MOTOKO_CANISTER_HOST !== "ic") {
    agent.fetchRootKey().catch((err) => {
      console.warn(
        "Unable to fetch root key. Check to ensure that your local replica is running"
      );
      console.error(err);
    });
  }

  // Creates an actor with using the candid interface and the HttpAgent
  return Actor.createActor(idlFactory, {
    agent,
    canisterId,
    ...options.actorOptions,
  });
};

export const HelloWorld_MA_backend = createActor(canisterId)