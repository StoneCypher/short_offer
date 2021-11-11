import * as fc from 'fast-check';
test('Round trip of random strings is always byte-accurate', () => {
    fc.assert(fc.property(fc.string(), (_anyString) => {
        throw 'todo';
    }));
});
