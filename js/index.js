function createDiv(data) {
    let divas = document.createElement("div");
    divas.innerHTML = `<h1>${data}</h1>`;
    addClass(divas);
    document.getElementById("root").appendChild(divas);
}

const animals = ['Kiškis', 'Lapė', 'Anakonda', 'Sausumų vėplys', 'Bebras'];

animals.forEach(data => createDiv(data));

function addClass(el) {
    // let el = document.createElement('div');
    el.classList.add('grozis');
    // el.innerText = 'GRAZUS DIVAS';
    // document.getElementById(iddi).appendChild(el);
}
// addClass('root');

// const booksTypes = '[{"id":1,"title":"Gro\u017ein\u0117 literat\u016bra"},{"id":2,"title":"Populiarioji psichologija"},{"id":3,"title":"Literat\u016bra vaikams ir jaunimui"},{"id":4,"title":"Pom\u0117giai"},{"id":5,"title":"\u0160eima, sveikata"},{"id":6,"title":"Literat\u016bra u\u017esienio kalbomis"},{"id":7,"title":"Dalykin\u0117 literat\u016bra"},{"id":8,"title":"Vadov\u0117liai, pratybos ir knygos mokslams"}]';
let booksTypes2 = {};
// https://in3.dev/knygos/types/

// ATSPAUSDINTI knygų TITLE'us
// JSON.parse()
// JSON.stringify()

let myObj;

fetch('https://in3.dev/knygos/types/')
.then(response => response.json())
.then(data => {
    booksTypes2 = data;
});

myObj = JSON.parse(booksTypes2);

for (const iterator of myObj) {
    createDiv(iterator.title); 
}


// console.log(myObj);


// document.getElementById('root').appendChild(document.createElement('div').appendChild(document.createTextNode('Labas')));





