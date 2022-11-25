

export type LogoEnum = "background" | "analog" | "bifrost" | "crust" | "dot" | "bitcoin" | "ethereum" | "solana" | "polkadot" |
  "tether" | "default";

const LogosMap: Record<LogoEnum | string, string> = {
  analog: require('./logo/analog.svg'),
  background: require('./images/bg.png'),
  bifrost: require('./logo/bifrost.svg'),
  crust: require('./logo/crust.svg'),
  dot: require('./logo/dot.svg'),
  bitcoin: require('./logo/bitcoin.svg'),
  ethereum: require('./logo/ethereum.svg'),
  tether: require('./logo/tether.svg'),
  solana: require('./logo/solana.svg'),
  polkadot: require('./logo/polkadot.svg'),
  default: require('./default.svg')
};


export default LogosMap;


