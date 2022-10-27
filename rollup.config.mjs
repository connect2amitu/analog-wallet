import path from 'path';

import { createBundle } from '@polkadot/dev/config/rollup';

const pkgs = [];

const external = [
  ...pkgs,
];

const entries = ['extension-services'].reduce((all, p) => ({
  ...all,
  [`@analog/${p}`]: path.resolve(process.cwd(), `packages/${p}/build`)
}), {});


const overrides = {};

export default pkgs.map((pkg) => {
  const override = (overrides[pkg] || {});
  return createBundle({
    external,
    pkg,
    ...override,
    entries: {
      ...entries,
      ...(override.entries || {})
    },
    resolve: {
      fallback: {
        "url": false,
        "zlib": false,
        "https": false,
        "http": false,
      }
    }
  });
});
