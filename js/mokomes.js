// let data = ['labas', 'pats', 'tu labas'];
// let data = [ 2, 5, 3];
const data2 = new Set(['labas', 'pats', 'tu labas']);
const data3 = new Map([
    ['viens', 'labas'],
    ['du', 'pats'],
    ['trys', 'tu labas']
]);
const data4 = {
    viens: 'Labas',
    du: 'pats',
    trys: 'tu labas'
};

// data = data.sort((a[2], b[2]) => (b[2] - a[2]);
// for (let i=0; i<data.length-1; i++) {
//     for (let j=1; j<data.length; j++) {
//         if (data[i] < data[j]) {
//             const temp = data[i];
//             data[i] = data[j];
//             data[j] = temp;
//         }
//     }
// }

// const sorting =  data.sort( function(a,b) {
//     return a.charAt(2).toLowerCase().charCodeAt() - b.charAt(2).toLowerCase().charCodeAt()
// });

// for (let i=0; i<data.length; i++) {
//     createDiv(data[i]);
// }

// for (const [key, value] of Object.entries(data4)) {
//     createDiv([`${key}, ${value}`]);
// }

const animals = ['Kiškis', 'Lapė', 'Anakonda', 'Sausumų vėplys', 'Bebras'];

const animals2 = animals.map(x => x);

console.log('----ROUND 1-----');
animals.forEach(e => console.log(e));
animals2.sort( (a, b) => b.length - a.length );
console.log('----ROUND 2-----');
animals2.forEach(e => console.log(e));

console.log(animals);
console.log(animals2);

// 2 isrusiuoti gyvulius pagal pavadinimo ilgi

// Naudojant forEach, atspausdinti visus gyvulius po vieną su console.log
// Išrūšiuoti gyvulis pagal pavadinimo ilgį, kad pirma eitų ilgiausią pavadinimą turintis gyvulys
// Su console.log išvesti masyvą prieš ir po rūšiavimo.

const booksTypes = '[{"id":1,"title":"Gro\u017ein\u0117 literat\u016bra"},{"id":2,"title":"Populiarioji psichologija"},{"id":3,"title":"Literat\u016bra vaikams ir jaunimui"},{"id":4,"title":"Pom\u0117giai"},{"id":5,"title":"\u0160eima, sveikata"},{"id":6,"title":"Literat\u016bra u\u017esienio kalbomis"},{"id":7,"title":"Dalykin\u0117 literat\u016bra"},{"id":8,"title":"Vadov\u0117liai, pratybos ir knygos mokslams"}]';

// https://in3.dev/knygos/types/

// ATSPAUSDINTI knygų TITLE'us
// JSON.parse()
// JSON.stringify()

const myObj = JSON.parse(booksTypes);
console.log(myObj);


