let solve_c = Module.cwrap('solve', 'string', ['string', 'number']);
function solve() {
    const n = document.getElementById('n').value;
    const t = document.getElementById('t').value;
    let result_elm = document.getElementById('result');
    result_elm.value = solve_c(n, t);
}