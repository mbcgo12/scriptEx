//Constructor Functions

function Elf(name, weapon) {
    this.name = name;
    this.weapon = weapon;
}

Elf.prototype.attack = function () {
    return `attack with ${this.weapon}`
}

const peter = new Elf('peter', 'knife');
console.log(peter.attack());
