//factory functions

//object.create()
const elfFunctions = {
    attack() {
        return `attack with ${this.weapon}`
    }
}

function createElf(name, weapon) {
    let newElf = Object.create(elfFunctions)
    newElf.name = name;
    newElf.weapon = weapon;
    return newElf;
}

const peter = createElf('peter', 'stones');
console.log(peter.attack());

// peter.attack = elfFunctions.attack;
// console.log(peter.attack())


// const sam = createElf('sam', 'fire');
// console.log(sam.attack = elfFunctions.attack());
