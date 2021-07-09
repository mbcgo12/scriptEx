//factory functions

function createElf(name, weapon) {
    return {
        name,
        weapon,
        attack() {
            return `name:${this.name}!! your attack from ${this.weapon}!!`
        }
    }
}

const peter = createElf('peter', 'stones');
console.log(peter.attack());

const sam = createElf('sam', 'fire');
console.log(sam.attack());