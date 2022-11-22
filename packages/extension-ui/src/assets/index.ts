

export type LogoEnum = "analog" | "bifrost" | "crust" | "dot" | "bitcoin" | "ethereum" | "polkadot" | "default";

const LogosMap: Record<LogoEnum | string, string> = {
  analog: require('./logo/analog.svg'),
  bifrost: require('./logo/bifrost.svg'),
  crust: require('./logo/crust.svg'),
  dot: require('./logo/dot.svg'),
  bitcoin: require('./logo/bitcoin.svg'),
  ethereum: require('./logo/ethereum.svg'),
  polkadot: require('./logo/polkadot.svg'),
  default: require('./default.svg')
};


export default LogosMap;


