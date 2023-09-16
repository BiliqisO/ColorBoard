import { configureChains, sepolia } from "@wagmi/core";
import { publicProvider } from "@wagmi/core/providers/public";
import { alchemyProvider } from "@wagmi/core/providers/alchemy";

const { chains, publicClient, webSocketPublicClient } = configureChains(
  [sepolia],
  [alchemyProvider({ apiKey: "" }), publicProvider()]
);

const config = createConfig({
  autoConnect: true,
  publicClient,
  webSocketPublicClient,
});
