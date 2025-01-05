const arr=["apple","banana","grape","pineapple","strawberry","apple","banana","apple"]
const map=new Map()
for(const value1 of arr){
    if(map.get(value1)===undefined){
        map.set(value1,1)
    }
    else{
        map.set(value1,map.get(value1)+1)
    }
}

map.forEach((value,key)=>{
    console.log(key,value)
})