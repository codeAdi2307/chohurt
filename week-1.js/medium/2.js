function claculatetime(n) {
    let data = new Date().getMilliseconds();

    let total = 0;
    let start = data;
    let end = 0
    // console.log(data);
    console.log(start);
    for (let i = 0; i <= n; i++) {
        total += i;
        if (i == n) {
            end = new Date().getMilliseconds();
        }

    }

    console.log(total);
    console.log(end);
}
console.log(claculatetime(1000000000));
