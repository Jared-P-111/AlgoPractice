// 'use-strict';

// let statues = [6, 3, 8, 4, 11, 33, 27, 20];
// let numsNeed = [];
// let counter = 0;

// function makeArrayConsecutive2(statues) {
//   //   let minElement = statues[0];
//   let maxElement = Math.max(...statues);
//   let minElement = Math.min(...statues);

//   for (let i = minElement; i <= maxElement; i++) {
//     numsNeed.push(i);
//   }

//   for (let i = 0; i < numsNeed.length; i++) {
//     if (statues.includes(numsNeed[i]) === false) {
//       console.log(numsNeed[i]);
//       counter++;
//     }
//   }
//   return counter;
// }

// console.log(`Total needed: ${makeArrayConsecutive2(statues)}`);

var people = [];

function Person(name, age) {
  // Function constructor
  this.name = name; // do not forget 'this.'
  this.age = age;
}

function addPerson(name, age) {
  var p = new Person(name, age); // here we create instance
  people.push(p);
}

addPerson('Petia', 80);
addPerson('Vasia', 20);

function totalAge() {
  var total = 0; // do not name local variables same as function
  var i; // use var for i variable, otherwise it would be global variable
  for (i = 0; i < people.length; i++) {
    total += people[i].age;
  }
  return total;
}

var total = totalAge();
console.log(total);
console.log(people);
