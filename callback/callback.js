function greet(name,callback){
    console.log(`hello,${name}`)
    callback()
}

function hello(){
    console.log("bye")
}

greet("som",hello)