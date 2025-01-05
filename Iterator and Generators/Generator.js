function* generator(){
    for(let i=0;i<=10;i++){
        yield i;
    }
}
const num=generator()
console.log(num.next())
console.log(num.next())
console.log(num.next())
console.log(num.next())
console.log(num)