function DNAtoRNA(dna) {
  return dna.replace(/T/g, "U");
  // create a function which returns an RNA sequence from the given DNA sequence
}

// Example
const dnaString = "GCAT";
const rnaString = DNAtoRNA(dnaString);
console.log(rnaString); // Output: "GCAU"
