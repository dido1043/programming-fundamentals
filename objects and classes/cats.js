function task(input) {
    class Cat {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
        meow() {
            console.log(`${this.name}, age ${this.age} says Meow`);
        }
    }
    let cats = [];

    for (let el of input) {
        let token = el.split(' ');

        cats.push(new Cat(token[0], Number(token[1])))
    }
    for (let el of cats) {
        el.meow();
    }
}

task(['Mellow 2', 'Tom 5']);
console.log('----');
task(['Candy 1', 'Poppy 3', 'Nyx 2']);