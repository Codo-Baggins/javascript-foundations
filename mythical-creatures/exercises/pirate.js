class Pirate {
    constructor(name, crewJob) {
        this.name = name;
        this.job = crewJob || "scallywag";
        this.cursed = false;
        this.booty = 0;
    }
    robShip() {
        this.booty += 100;
        return "YAARRR!";
    }
}

module.exports = Pirate;