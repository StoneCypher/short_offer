import { full_set } from './example_beacons';
import { parse } from './parsers';
import { pack } from './pack';
function byId(id) {
    const test = document.getElementById(id);
    if (test === null) {
        throw new Error(`No such element #${id}`);
    }
    return test;
}
function qSA(selector) {
    const test = document.querySelectorAll(selector);
    if (test === null) {
        return [];
    }
    return [...test];
}
function el(tag, { inner, className, onclick }) {
    const nTag = document.createElement(tag);
    if (inner) {
        nTag.innerHTML = inner;
    }
    if (className) {
        nTag.className = className;
    }
    if (onclick) {
        nTag.onclick = onclick;
    }
    return nTag;
}
function parse_table(parsed) {
    let result = '';
    parsed.value.forEach(v => result += `
    <tr${v.kind === 'unknown_line' ? ' class="unk"' : ''}>
      <td>${v.kind}</td>
      <td>${v.value}</td>
    </tr>
  `);
    return result;
}
function click_an_anchor(e, val) {
    if (e === undefined) {
        throw "Can't handle an event without an event (click_an_anchor)";
    }
    const oe = Object.entries(full_set);
    byId('example').innerHTML = val;
    if (e) {
        const src = e.target;
        if (src && (src instanceof HTMLAnchorElement)) {
            qSA('#list a').forEach(el => el.className = '');
            src.className = 'sel';
        }
    }
    const ex = document.querySelector('#example'), exp = document.querySelector('#pack');
    if ((ex !== null) && (exp !== null)) {
        const oe0 = oe[0];
        if (oe0) {
            const oe01 = oe0[1];
            if (oe01) {
                ex.innerHTML = oe01;
                exp.innerHTML = pack(oe01);
            }
        }
    }
    const parsed = parse(val);
    byId('parse').innerHTML = parse_table(parsed);
}
function bootstrap() {
    const oe = Object.entries(full_set);
    oe.forEach(([k, v], _i) => {
        const p = parse(v), c = p.value.filter(val => val.kind === 'unknown_line').length;
        byId('list')
            .append(el('a', {
            inner: `${k} (${c})`,
            href: '#',
            onclick: (e) => click_an_anchor(e, v)
        }));
    });
}
export { bootstrap };
