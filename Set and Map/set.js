const myset=new Set();
myset.add(5);
myset.add(3);
myset.add(99);
myset.add(87);
myset.add(87);
myset.delete(99)
console.log(myset)
console.log(myset.size)
console.log(myset.has(87))
//myset.clear();
//console.log(myset)

myset.forEach((value)=>{
    console.log(value);
})

for(const value of myset){
    console.log(value)
}

console.log([...myset])


const arr=[11,21,23,34,22,21,21,34]
const set1=new Set(arr)
set1.forEach((value)=>{
    console.log(value)
})
console.log("----------")
const a=[11,11,22,22,23,34]
const b=[11,23,45,67,89,22,43]
const c=new Set([...a,...b])
c.forEach((value)=>{
    console.log(value)
})

console.log("----------")
const a1=new Set([11,11,22,22,23,34])
const b1=new Set([11,23,45,67,89,22,43])
const duplicate=new Set([...a1].filter((x)=>b1.has(x)))
console.log(duplicate)
