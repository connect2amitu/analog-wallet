import { LogoEnum } from "../assets";

export const MEMONIC = 'script planet solve cluster tumble pretty mouse already famous tide kiwi welcome';


export const SCREEN_SIZE = {
  xs: "0px",
  sm: "600px",
  md: "900px",
  lg: "1200px",
  xl: "1536px",
}

export interface Assets {
  amount: number;
  checked: boolean;
  title: string;
  icon: LogoEnum;
  unit: string;
}

export const ASSET_LIST: Assets[] = [
  {
    icon: "bitcoin",
    title: "Bitcoin",
    amount: 0,
    unit: "BTC",
    checked: false
  },
  {
    icon: "ethereum",
    title: "Ethereum",
    amount: 0.5,
    unit: "ETH",
    checked: false
  },
  {
    icon: "polkadot",
    title: "Polkadot",
    amount: 1,
    unit: "DOT",
    checked: false
  }
]
