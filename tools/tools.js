function pcalc() {
    
    let v = document.getElementById('pcalcv').value;
    let t = document.getElementById('pcalct').value;

    let r = Number(v) / Number(t) * 100;

    document.getElementById('pcalcr').innerHTML = 'Result: ' + r + '%';

};