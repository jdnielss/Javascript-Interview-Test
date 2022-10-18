function sortArrayOfObjects(array, key) {
  return array.sort(function(a, b) {
      var x = a[key]; var y = b[key];
      return ((x < y) ? -1 : ((x > y) ? 1 : 0));
  });
}

//data
var array = [
  {name: 'Sambi', age: 25},
  {name: 'Sambe', age: 30},
  {name: 'Samba', age: 28}
];

var sortedArray = sortArrayOfObjects(array, 'age');

console.log(sortedArray);

//output
// [
//     {name: 'Sambi', age: 25},
//     {name: 'Samba', age: 28},
//     {name: 'Sambe', age: 30}
// ]
