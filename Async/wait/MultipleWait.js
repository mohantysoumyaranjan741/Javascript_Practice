function fetchuser(){
    return new Promise(resolve=>{setTimeout(()=>resolve("user data"),1000)}
)}
function fetchpost(){
    return new Promise(resolve=>{setTimeout(()=>resolve("pos data"),1000)}
)}
async function som() {
    try{const val=await fetchuser()
        console.log(val)
    console.log("done1")
    const val1=await fetchpost()
    console.log(val1)
    console.log("done2")}
    catch(error){
        console.error("error",error)
    }
}
som()