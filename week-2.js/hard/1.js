function wait(n) {


 const prom = new Promise((resolve, reject) =>{

if(n){
    setTimeout(()=>{
        resolve("Problem solved")

    },n*1000)
}else{
    reject("not got the timing")
}
     

 })
 return prom;


}
wait()
.then((data)=>{
    console.log(data);
})
.catch((err)=>{
    console.log(err);
})
