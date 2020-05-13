function pcalc() {
    
    let v = document.getElementById('pcalcv').value;
    let t = document.getElementById('pcalct').value;

    let r = Number(v) / Number(t) * 100;

    document.getElementById('pcalcr').innerHTML = 'Result: ' + r + '%';

};

var t1 = [
    {
        name: 'Item1',
        items: ['Red', 'Blue', 'Green']
    },
    {
        name: 'Item2',
        items: ['Green', 'Purple', 'Blue']
    }
];

var t2 = [
    {
        name: 'Item1',
        items: ['Red', 'Blue', 'Green']
    },
    {
        name: 'Item2',
        items: ['Green', 'Purple', 'Blue']
    }
];


function stuff() {
    let t = t1[1].items[1];



    document.getElementById('out').innerHTML = t;
};