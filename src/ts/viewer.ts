
import { full_set }  from './example_beacons';
import { parse }     from './parsers';
import { pack }      from './pack';
import { compress }  from './compress';
import { unpack }    from './unpack';
import { ParsedSdp } from './types';





type ElOpts = {
  inner?     : string,
  className? : string,
  href?      : string,
  dataId?    : string,
  id?        : string,
  onclick?   : (e?: MouseEvent) => any | null
};





function byId(id: string) {

  const test = document.getElementById(id);

  if (test === null) { throw new Error(`No such element #${id}`); }

  return test;

}





function qSA(selector: string): Element[] {

  const test = document.querySelectorAll(selector);

  if (test === null) { return []; }

  return [ ... test ];

}





function el(tag: string, { inner, className, onclick, dataId, id } : ElOpts) {

  const nTag = document.createElement(tag);

  if (inner)     { nTag.innerHTML           = inner;     }
  if (className) { nTag.className           = className; }
  if (onclick)   { nTag.onclick             = onclick;   }
  if (id)        { nTag.id                  = id;        }
  if (dataId)    { nTag.setAttribute('data-id', dataId); }

  return nTag;

}





function parse_table(parsed: ParsedSdp) {

  let result = '';

  parsed.value.forEach( v => result += `
    <tr${v.kind === 'unknown_line'? ' class="unk"' : ''}>
      <td>${v.kind}</td>
      <td>${v.value}</td>
    </tr>
  ` );

  return result;

}





function to_claim(bytes: number, base_bytes: number): string {
  return `${bytes.toLocaleString()} bytes, ${((bytes/base_bytes)*100).toFixed(1)}%`;
}





let cursor: number = 0;

async function click_an_anchor(e: MouseEvent | undefined, val: string, label: string) {

  if (e === undefined) { throw "Can't handle an event without an event (click_an_anchor)"; }

  const src = e.target;

  if (src && (src instanceof HTMLAnchorElement)) {
    click_an_anchor_impl(src, val, label);
  }

}





async function click_an_anchor_impl(src: HTMLAnchorElement, val: string, label: string) {

  byId('example').innerHTML = val;

  qSA('#list a').forEach(el => el.className = '');
  src.className = 'sel';

  const tit = document.querySelector('#item'),
        ex  = document.querySelector('#example'),
        exp = document.querySelector('#pack'),
        exc = document.querySelector('#compress'),
        exu = document.querySelector('#unpack');

  let ol, pl, cl = 0, ul;

  if ((tit !== null) && (ex !== null) && (exp !== null) && (exu !== null) && (exc !== null)) {

    tit.innerHTML = label;

    ex.innerHTML  = val;

    exp.innerHTML = pack(val)
                      .split('')
                      .map(ch => ch.charCodeAt(0) < 33? `<span class="ch">[${ch.charCodeAt(0)}]</span>` : ch)
                      .join('&#x200b;');

    const comp             = new Uint8ClampedArray(await new Blob([compress(val)]).arrayBuffer()),
          ecomp : string[] = new Array(comp.length);

    cl = ecomp.length;

    for (let i=0; i<comp.length; ++i) {
      ecomp[i] = String.fromCodePoint(Number(comp[i]));
    }

    exc.innerHTML = ecomp.join('&#x200B;');

    exu.innerHTML = unpack(pack(val));

  }

  const parsed = parse(val);

  byId('parse').innerHTML = parse_table(parsed);

  ol = val.length,
  pl = pack(val).length,
  // cl is set in above block
  ul = unpack(pack(val)).length;

  byId('orig_length').innerHTML       = to_claim(ol, ol);   // `${ol.toString()} bytes, 100%`;
  byId('packed_length').innerHTML     = to_claim(pl, ol);   // `${pl.toString()} bytes, 100%`;
  byId('compressed_length').innerHTML = to_claim(cl, ol);   // `${cl.toString()} bytes, 100%`;
  byId('unpacked_length').innerHTML   = to_claim(ul, ol);   // `${ul.toString()} bytes, 100%`;

}





const beacon_keys : string[] = [],
      beacons     : string[] = [];

function bootstrap() {

  const header = document.createElement('tr');
  header.innerHTML = '<th>Old</th><th>New</th><th>Pct</th><th>URL</th><th>CPct</th><th>Rem</th><th>ID</th>';

  byId('listtgt')
    .appendChild(header);

  const oe = Object.entries(full_set);

  oe.forEach( ([k, v], i) => {

    const p  = parse(v.beacon),
          q  = pack(v.beacon),
          cm = compress(v.beacon),
          c  = p.value.filter(val => val.kind === 'unknown_line').length;

    beacon_keys.push(k);
    beacons.push(v.beacon);

    const a = el('a', {
      inner   : `${k}`,
      href    : '#',
      id      : `item_${i.toString()}`,
      dataId  : i.toString(),
      onclick : (e) => click_an_anchor(e, v.beacon, k)
    });

    if (i === 0) {
      setTimeout( () => a.click(), 100 );
    }

    const tr  = el('tr', {}),
          btd = el('td', {}),
          otd = el('td', {}),
          rtd = el('td', {}),
          ctd = el('td', {}),
          ptd = el('td', {}),
          atd = el('td', {}),
          std = el('td', {});

    ctd.className = 'comp';
    ptd.className = 'comp';

    otd.innerHTML = `${v.beacon.length.toLocaleString()}<span class="light">b</span>`;
    tr.appendChild(otd);

    btd.innerHTML = `${q.length.toLocaleString()}<span class="light">b</span>`;
    tr.appendChild(btd);

    std.innerHTML = `${(100-((q.length/v.beacon.length)*100)).toFixed(1)}<span class="light">%</span>`;
    tr.appendChild(std);

    ctd.innerHTML = `${cm.length.toLocaleString()}<span class="light">b</span>`;
    tr.appendChild(ctd);

    ptd.innerHTML = `${(100-((cm.length/v.beacon.length)*100)).toFixed(1)}<span class="light">%</span>`;
    tr.appendChild(ptd);

    rtd.innerHTML = `${c.toLocaleString()}`;
    tr.appendChild(rtd);

    atd.appendChild(a);
    tr.appendChild(atd);

    byId('listtgt')
      .appendChild( tr );

  });

  addEventListener("keyup", (event) => {

    const key: string = (event as KeyboardEvent).key;

    let shouldChange: boolean = false;

    if (key === 'ArrowUp') {
      if (cursor < 1) {
        // do nothing
      } else {
        --cursor;
        shouldChange = true;
      }

    }

    if (key === 'ArrowDown') {
      const maxCursor = beacons.length;
      if (cursor >= (maxCursor - 1)) {
        // do nothing
      } else {
        ++cursor;
        shouldChange = true;
      }

    }

    if (shouldChange) {
      const tgt: HTMLAnchorElement = byId(`item_${cursor}`) as HTMLAnchorElement;
      click_an_anchor_impl(tgt, beacons[cursor]!, beacon_keys[cursor]!);
    }

  });

}





export { bootstrap, pack, unpack };
