// tile generator
let tileGen = function () {

    for (let i of cooking) {
        let tile = document.createElement('div');
        tile.setAttribute('class', 'nested');

        // name
        let nameP = document.createElement('div');
        nameP.setAttribute('class', 'hname');
        let nameT = document.createTextNode('Name: ' + i.name);
        nameP.appendChild(nameT);
        tile.appendChild(nameP);

        // description
        let descP = document.createElement('div');
        descP.setAttribute('class', 'hdesc');
        let descT = document.createTextNode('Description: ' + i.description);
        descP.appendChild(descT);
        tile.appendChild(descP);

        // form
        let formP = document.createElement('div');
        formP.setAttribute('class', 'hform');
        let formT = document.createTextNode('Form: ' + i.form.join(', '));
        formP.appendChild(formT);
        tile.appendChild(formP);

        // flavour
        let flavP = document.createElement('div');
        flavP.setAttribute('class', 'hflav');
        let flavT = document.createTextNode('Flavour: ' + i.flavour.join(', '));
        flavP.appendChild(flavT);
        tile.appendChild(flavP);

        // blend
        let b = [];
        for (let m of mix) {
            for (let mi of m.ingredients) {
                if (i.name === mi) {
                    b.push(m.name);
                }
            }
        }
        let blendP = document.createElement('div');
        blendP.setAttribute('class', 'hblend');
        let blendT = document.createTextNode('Blend: ' + b.join(', '));
        blendP.appendChild(blendT);
        tile.appendChild(blendP);

        // usage
        let u = [];
        for (let uo of use) {
            for (let ul of uo.usage) {
                if (i.name === ul) {
                    u.push(uo.name);
                }
            }
        }
        let usageP = document.createElement('div');
        usageP.setAttribute('class', 'husage');
        let usageT = document.createTextNode('Usage: ' + u.join(', '));
        usageP.appendChild(usageT);
        tile.appendChild(usageP);


        document.getElementById('herbContainer').appendChild(tile);
    }
};
window.addEventListener("load", tileGen());
