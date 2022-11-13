

export type LogoEnum = "analog" | "bifrost" | "crust" | "dot" | "default";

const LogosMap: Record<LogoEnum | string, string> = {
  analog: require('./logo/analog.svg'),
  bifrost: require('./logo/bifrost.svg'),
  crust: require('./logo/crust.svg'),
  dot: require('./logo/dot.svg'),
  default: require('./default.svg')
};


export default LogosMap;
