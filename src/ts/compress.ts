
import {
  compressToEncodedURIComponent     as lzc,
  decompressFromEncodedURIComponent as lzd
} from 'lz-string';

import { pack }   from './pack';
import { unpack } from './unpack';





function compress( original: string ): string {
  return lzc(pack(original));
}





function decompress( compressed: string ): string {
  return unpack(lzd(compressed));
}





export { compress, decompress };
