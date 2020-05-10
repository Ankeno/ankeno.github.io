// tile generator
let tileGen = function () {

    for (let i of food) {
        let tile = document.createElement('div');
        tile.setAttribute('class', 'nested');

        //name
        let n = document.createElement('div');
        n.setAttribute('class', 'fname');
        let nt = document.createTextNode('Food: ' + i);
        n.appendChild(nt);
        tile.appendChild(n);

        //seasoning
        let slist = [];

        for (let h of seasoning) {
            for (let u of h.usage) {
                if (u === i) {
                    slist.push(h.name);
                };
            };
        };
        let s = document.createElement('div');
        s.setAttribute('class', 'fseasoning');
        let st = document.createTextNode('Seasoning: ' + slist.join(', '));
        s.appendChild(st);
        tile.appendChild(s);

        document.getElementById('foodContainer').appendChild(tile);
    };
};
window.addEventListener("load", tileGen());
