import { full_set } from './example_beacons';
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
function bootstrap() {
    const oe = Object.entries(full_set);
    oe.forEach(([k, v], i) => byId('list')
        .append(el('a', {
        inner: k,
        href: '#',
        className: i === 0 ? 'sel' : undefined,
        onclick: (e) => {
            byId('example').innerHTML = v;
            if (e) {
                const src = e.target;
                if (src && (src instanceof HTMLAnchorElement)) {
                    qSA('#list a').forEach(el => el.className = '');
                    src.className = 'sel';
                }
            }
        }
    })));
    const fot = document.querySelector('#example');
    if (fot !== null) {
        const oe0 = oe[0];
        if (oe0) {
            const oe01 = oe0[1];
            if (oe01) {
                fot.innerHTML = oe01;
            }
        }
    }
}
export { bootstrap };
