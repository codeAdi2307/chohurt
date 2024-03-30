class Calculator {
    constructor(a, b) {
        if (typeof (a) == 'number' && typeof (a) == 'number' ) {
            this.a = a,
            this.b = b
        this.result = 0
        }else{
            throw new Error("Input is not number")
        }     
    }
    add() {
        return this.a + this.b
    }
    subs() {
        return this.a - this.b
    }
    mult() {
        return this.a * this.b
    }
    divs() {
        if (this.b !== 0) {
            return this.b / this.a;
        } else {
            return "Cannot divide by zero";
        }
    }

    bodmas() {
        this.result = (((this.mult() * (this.add())) - (this.subs())) / this.divs())
        return this.result
    }
}

const data = new Calculator(2, 8)
console.log(data.bodmas());
console.log(data);
