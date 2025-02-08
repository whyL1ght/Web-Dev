alert( null || 2 || undefined );
// The answer is 2, that’s the first truthy value.

// The answer: first 1, then 2.
alert( alert(1) || 2 || alert(3) );


// The answer: null, because it’s the first falsy value from the list.
 alert(1 && null && 2);

// The answer: 1, and then undefined.
 alert( alert(1) && alert(2) );


if (age >= 14 && age <= 90);



 // Runs.
// The result of -1 || 0 = -1, truthy
if (-1 || 0) alert( 'first' );

// Doesn't run
// -1 && 0 = 0, falsy
if (-1 && 0) alert( 'second' );

// Executes
// Operator && has a higher precedence than ||
// so -1 && 1 executes first, giving us the chain:
// null || -1 && 1  ->  null || 1  ->  1
if (null || -1 && 1) alert( 'third' );
