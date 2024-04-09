function wait1(t1) {
    let first = new Promise((resolve, reject) => {
        if(t1){
            setTimeout(() => {
                resolve("task resolved for first")
            }, t1*1000);
            
        }
        
    })
return first
}

function wait2(t2) {
    let sec = new Promise((resolve, reject) => {
        if(t2){
            setTimeout(() => {
                resolve("task resolved for sec")
            }, t2*1000);
        }
    })
    return sec
}

function wait3(t3) {
    let last = new Promise((resolve, reject) => {
        if(t3){
            setTimeout(() => {
                resolve("task resolved for third")
            }, t3*1000);
        }
    })
    return last
}

function calculateTime(t1, t2, t3) {
 wait1(t1).then(data => console.log(data))
 wait2(t2).then(data => console.log(data))
 wait3(t3).then(data => console.log(data))
}


    setTimeout(() => {
        calculateTime(1,2,3)
    }, (1+2+3)*1000);



