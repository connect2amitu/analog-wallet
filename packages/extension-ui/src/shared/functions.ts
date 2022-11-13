import LogosMap, { LogoEnum } from "../assets";

export function toShortAddress(_address?: string | null | Uint8Array, length = 6): string {
  const address = (_address || '').toString();

  return (address.length > 13)
    ? `${address.slice(0, length)}…${address.slice(-length)}`
    : address;
}


export function getLogoByNetworkKey(networkKey: LogoEnum, defaultLogo = 'default'): string {
  return LogosMap[networkKey] || LogosMap[defaultLogo] || LogosMap.default;
}