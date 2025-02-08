// task 1
for (let i = 0; i < 5; ++i) alert( i );

for (let i = 0; i < 5; i++) alert( i );


//task 2: Use the for loop to output even numbers from 2 to 10
for (let i = 2; i <= 10; i++) {
    if (i % 2 == 0) {
      alert( i );
    }
  }

// task 3
let num;

do {
  num = prompt("Enter a number greater than 100?", 0);
} while (num <= 100 && num);
