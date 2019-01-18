var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];
function addElementToBeginningOfArray(array, element) {
  return ['foo',...array]
}
function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift('foo')
  return array
}
function addElementToEndOfArray (array, element) {
  return [...array, "foo"]
}
function destructivelyAddElementToEndOfArray (array, element) {
  array.push('foo')
  return array
}
function accessElementInArray (array, index) {
 array.indexOf(index)
 return array[index]
}
<<<<<<< HEAD
function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift(1)
  return array
}
  function removeElementFromBeginningOfArray (array) {
return array.slice(1) }
function destructivelyRemoveElementFromEndOfArray (array) {
  array.pop()
  return array
}
function removeElementFromEndOfArray (array) {
  return array.slice(0, array.length - 1)
}
=======
function destructivelyRemoveElementFromBeginningOfArray (array) {
return array.slice(1) }
>>>>>>> 4f4c830ac1b8b384149a92aaa89f8e5ba4e4867a
