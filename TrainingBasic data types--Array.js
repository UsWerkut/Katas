function getLength(arr){
    //return length of arr
  return arr.length
}
function getFirst(arr){
  //return the first element of arr
  return arr[0]
}
function getLast(arr){
  //return the last element of arr
  return arr[arr.length - 1]
}
function pushElement(arr){
  var el=1;
  return arr.concat(el)
  //push el to arr
}
function popElement(arr){
  //pop an element from arr
  arr.pop()
  return arr
}