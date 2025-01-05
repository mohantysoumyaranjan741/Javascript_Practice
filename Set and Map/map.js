const map1=new Map([["som",1],["sonu",2]])
console.log(map1)

console.log([...map1])


console.log('--------------------')
const map=new Map()
map.set("apple",1)
map.set("banana",2)
map.set("grape",3)
map.delete("banana")
map.forEach((value,key)=>{
    console.log(key,value)
})
console.log(map.size)
console.log(map.has("apple"))
console.log(map.get("apple"))

for(const [key,value] of map){
    console.log([key,value])
}