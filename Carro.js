class Carro {
    #nome;

    constructor(Motor, n){
        this.motor = Motor;
        this.#nome = n;
    }

    acelerar(){
        return this.motor.acelerar();
    }

    get nome(){
        console.log("get nome() {success}");
        return this.#nome;

    }

    set nome(nome) {
        return this.nome;

    }
};

