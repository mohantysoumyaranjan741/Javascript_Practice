const arr=[12,21,23,33,44,45,54,76]
const arr1=arr[Symbol.iterator]()
console.log(arr1.next())
console.log(arr1.next())

console.log(arr1.next())

console.log(arr1.next())
