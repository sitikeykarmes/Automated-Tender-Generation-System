const category = [
    {
        name: 'C1',
        info: 'lorem epsum',
    },
    {
        name: 'C2',
        info: 'lorem epsum',
    },
    {
        name: 'C3',
        info: 'lorem epsum',
    },
    {
        name: 'C4',
        info: 'lorem epsum',
    },
    {
        name: 'C5',
        info: 'lorem epsum',
    },
    {
        name: 'C6',
        info: 'lorem epsum',
    },
    {
        name: 'C7',
        info: 'lorem epsum',
    },
    {
        name: 'C8',
        info: 'lorem epsum',
    },
    {
        name: 'C9',
        info: 'lorem epsum',
    },
    {
        name: 'C10',
        info: 'lorem epsum',
    },
    

]

let ul = document.querySelector('ul');

for(let i=0; i<category.length ; i++){

    let string = document.createElement('li');
    let txt = document.createElement('p');

    txt.textContent = category[i].name;


    let addbtn = document.createElement('button');
    addbtn.classList.add('plus');
    addbtn.textContent = "+";


    string.appendChild(txt);
    ul.appendChild(string);

    string.append(addbtn);

}