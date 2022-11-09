export function toShortAddress(_address?: string | null | Uint8Array, length = 6): string {
  const address = (_address || '').toString();

  return (address.length > 13)
    ? `${address.slice(0, length)}…${address.slice(-length)}`
    : address;
}
