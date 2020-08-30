class Dragon {
    constructor(name, rider, color) {
        this.name = name,
        this.rider = rider,
        this.color = color,
        this.hungry = true
    };

    var eatCount = 0;
    
    eat() {
        eatCount = eatCount + 1;
        if (eatCount >= 3) {
            this.hungry = false;
        }
    }
}


module.exports = Dragon;

