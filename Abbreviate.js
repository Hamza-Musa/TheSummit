/*Instructions/Task:
Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

The output should be two capital letters with a dot separating them.

It should look like this:

Sam Harris => S.H

patrick feeney => P.F


*/

//My Answer
function abbrevName(name) {
  // code away
  let firstName = name.split(" ")[0];
  const firstNameInitial = firstName[0];

  let secondName = name.split(" ")[1];
  const secondNameInitial = secondName[0];
  //     console.log(firstNameInitial)
  //     console.log(secondNameInitial)
  return (fullInitals =
    `${firstNameInitial}.${secondNameInitial}`.toUpperCase());
}
