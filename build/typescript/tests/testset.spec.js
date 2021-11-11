var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import * as fc from 'fast-check';
import { pack, unpack } from '../index';
import { full_set } from '../example_beacons';
test('Round trip of random strings is always byte-accurate', () => {
    fc.assert(fc.property(fc.string(), (anyString) => {
        return unpack(pack(anyString)) === anyString;
    }));
});
describe('Round trip of beacon strings is always byte-accurate', () => {
    Object.entries(full_set).forEach(([key, beacon]) => {
        test(`Round trip of ${key}`, () => __awaiter(void 0, void 0, void 0, function* () { return unpack(pack(beacon)) === beacon; }));
    });
});
