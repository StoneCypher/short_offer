
import { full_set } from '../example_beacons';





describe('All beacons are strings', () => {

  const labels = Object.keys(full_set);

  labels.forEach( (l, i) =>

    test(
      `Beacon style ${l} is string`,
      () => expect(typeof full_set[l].beacon).toBe('string')
    )

  );

});
