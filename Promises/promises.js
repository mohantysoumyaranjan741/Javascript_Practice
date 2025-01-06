const mypromises=()=>{
    return new Promise((resolve,reject)=>{
        let success=true
       setTimeout(()=>{
        if(success)
            {
            resolve("data fetched successfully")
        }
        else{
            reject("data could not fetched")
     } },1000)
    })
}
const Promise1=()=>{
    return new Promise(resolve=>{
        setTimeout(()=>resolve("resolved successfully"),1000)
    })
}

mypromises()
.then(data=>{
    console.log(data)
    return Promise1()
})
.then(data=>{
    console.log(data)
})
.catch(error=>{
    console.error(error)
})
.finally(()=>{
    console.log("done")
})