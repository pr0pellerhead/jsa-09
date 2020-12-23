// const ime = 'pero';
// ime = 'janko';

// prezime = 'Perovski';
// let vozrast = 23;
// var avtomobil = 'Dacia';

// console.log(prezime, vozrast, avtomobil);

// let ime = 'Stanko';

// const vars = () => {
//     let ime = 'Pero';
//     console.log(ime);
// };

// const vars2 = () => {
//     var ime = 'Janko';
// };

// vars();
// vars2();

// console.log(ime);

// function Pozdrav() {
//     console.log('pozdrav');
// }

// const Pozdrav2 = function() {
//     console.log('pozdrav2');
// };

// const Pozdrav3 = () => {
//     console.log('pozdrav3');
// };

let avtomobil = 'Ford';

const varTester = (a) => { // pass by value (number, boolean, string)
    a = 'BMW';
};

varTester(avtomobil);
console.log(avtomobil);

let avtomobil2 = {ime: 'Ford'};

const varTester2 = (a) => { // pass by refference (objects, arrays)
    a.ime = 'BMW';
};

varTester2(avtomobil2);
console.log(avtomobil2);

let avtomobil3 = avtomobil2;
avtomobil3.ime = 'Lada';

console.log(avtomobil2);

const getName = (n) => {
    return new Promise((success, fail) => { // resolve, reject
        if(n.length % 2 == 0) {
            return success(n); // call the "then" function
        }
        return fail(n); // call the "catch" function
    });
};

getName('Pero')
    .then(data => {
        console.log('SUCCESS:', data);
    })
    .catch(err => {
        console.log('ERROR:', err);
    });


const asawFn = async () => {
    try {
        let a = await getName('Bojana');
        console.log('ASAW SUCCESS:', a);
    } catch(err) {
        console.log('ASAW ERROR:', err);
    }
};

asawFn();


// Треба да се направи "промисификација" на следниве операции

// - собирање на два броја / success е ако собирокот е парен број, fail ако е непарен
// - конверзија на температура од целзиусови во фаренхајтови степени / success е ако степените се помалку од 100, fail ако се еднакви или повеќе од 100
// - да се изброи во текст колку пати се појавува буквата "a", ако бројот е поволем од 0 во тој случај враќаме success, ако е === 0 во тој случај fail

// да се употребат трите функции како класични промисе then/catch, и со async/await

