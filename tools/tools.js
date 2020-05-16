function pcalc() {
    
    let v = document.getElementById('pcalcv').value;
    let t = document.getElementById('pcalct').value;

    let r = Number(v) / Number(t) * 100;

    let rn = Math.round(r * 10) / 10;

    document.getElementById('pcalcr').innerHTML = `Result: ${rn}%`
    //document.getElementById('pcalcr').innerHTML = 'Result: ' + rn + '%';

};
