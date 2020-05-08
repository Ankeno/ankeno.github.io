// tile generator
let tileGen = function () {

    for (let i of cooking) {
        let tile = document.createElement('div');
        tile.setAttribute('class', 'herbTile');

        // name description form flavour usage mix
        let nameP = document.createElement('p');
        nameP.setAttribute('class', 'herbItem');
        let nameT = document.createTextNode('Name: ' + i.name);
        nameP.appendChild(nameT);
        tile.appendChild(nameP);

        
        document.getElementById('herbContainer').appendChild(tile);
    }
};
window.addEventListener("load", tileGen());
