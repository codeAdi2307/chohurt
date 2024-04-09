let count = 0;
function inc(){
        count += 1;
        console.log(count);
        setTimeout(inc,1000)
}
inc();                                  