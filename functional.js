let states = ["Kansas", "Nebraska", "North Dakota", "South Dakota"]

// Returns a URL-friendly version of a string.
//   Example
function urlfy(string) {
  return string.toLowerCase().split(/\s+/).join("-");
}

// urls: Imperative version
function imperativeUrls(elements) {
  let urls = [];
  elements.forEach(function(element){
    urls.push(urlfy(element));
  });
  return urls;
}
console.log(imperativeUrls(states));

// urls: Functional version
function functionalUrls(elements) {
  return elements.map(element => urlfy(element));
}
console.log(functionalUrls(states));

// singles: Imperative version
function imperativeSingles(elements) {
  let singles = [];
  elements.forEach(function(element) {
    if (element.split(/\s+/).length === 1) {
      singles.push(element);
    }
  });
  return singles
}
console.log(imperativeSingles(states));

// singles: Functional version
function functionalSingles(elements) {
  return elements.filter(element => element.split(/\s+/).length === 1);
}
console.log(functionalSingles(states));

// dakotas: Functional version 1
function functionalDakotas1(elements) {
  return elements.filter(element => element.split(/\s+/).length === 2);
}
console.log(functionalDakotas1(states));

// dakotas: Functional version 2
function functionalDakotas2(elements) {
  return elements.filter(element => element.match(/(dakota)/i));
}
console.log(functionalDakotas2(states));

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// sum: Imperative solution
function imperativeSum(elements) {
  let total = 0;
  elements.forEach(function(n) {
    total += n;
  });
  return total;
}
console.log(imperativeSum(numbers));

// sum: Functional solution
function functionalSum(elements) {
  return elements.reduce((total, n) => {return total += n; });
}
console.log(functionalSum(numbers));

// lenghts: Imperative solution
function imperativeLengths(elements) {
  let lengths = {};
  elements.forEach(function(element) {
    lengths[element] = element.length;
  });
  return lengths;
}
console.log(imperativeLengths(states));

// lenghts: Functional solution
function functionalLengths(elements) {
  return elements.reduce((lengths, element) => { lengths[element] = element.length; return lengths; }, {} );
}
console.log(functionalLengths(states));

// product: Functional solution
function functionalProduct(elements) {
  return elements.reduce((total, n) => {return total *= n; });
}
console.log(functionalProduct(numbers));
