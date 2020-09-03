class Hobbit{
    constructor(name) {
        this.name = name;
        this.age = 0; 
        this.adult;
        this.old = false;
        
        if (this.name === "Frodo") {
            this.hasRing = true;
        } else {
            this.hasRing = false;
        }
    }

    celebrateBirthday() {
        this.age += 1;
        if (this.age <= 32) {
            this.adult = false;
        } else {
            this.adult = true;
        }
        if (this.age >= 101) {
            this.old = true;
        }      
    }
}


module.exports = Hobbit;