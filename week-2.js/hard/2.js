function loop(n) {
    let prom = new Promise((resolve)=>{
        setTimeout(()=>{
            resolve("Program done")

        },n*1000)

    })
    return prom


}
loop(3)
.then(data=>{
    console.log(data);
})