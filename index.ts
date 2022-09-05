/*
Problem:
A milkman has package bottles of various sizes given in a sorted array e.g [1,3,5,7,10].
Objective is to find the minimun numbers of bottles required to supply the given demand
of milk. 

for 21 liters = 3 bottles (10+10+1)
for 17 liters = 2 bottles (10+7)
for 12 liters = 3 bottles (10+1+1)
*/

function GetTotalBottles(litters: number): number {
  const bottles: Array<number> = [1, 3, 5, 7, 10];

  let i: number = bottles.length - 1;
  let total: number = 0;
  while (litters > 0) {
    if (litters >= bottles[i]) {
      total++;
      litters -= bottles[i];
      i = bottles.length - 1;
    } else i--;
  }
  return total;
}

console.log(GetTotalBottles(21));
console.log(GetTotalBottles(17));
console.log(GetTotalBottles(12));
console.log(GetTotalBottles(6));
