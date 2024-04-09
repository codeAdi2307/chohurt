let hrs = 0
let mins = 0
let secs = 0

function seconds(){
    secs += 1
    console.log("hrs "+hrs  + " mins "+mins +" secs "+secs );
    if(secs == 5){
        secs = 0
        mins +=1

        seconds()

    }
    if(mins == 2){
        // secs = 0
        // mins = 0
        hrs +=1
      
        seconds()
    }
}
let Sec = setInterval(seconds,1000);
