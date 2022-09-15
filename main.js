let carro1 = new Carro(new MotorCorolla(), "Corolla");
let carro2 = new Carro(new MotorLamborghini(), "Lambo Huracán");
let carro3 = new Carro(new MotorJeep(), "Jeep Renegade");
let carro4 = new Carro(new MotorYaris(), "Yaris");

document.write(carro1.nome + ": " + carro1.acelerar() + "</br>");
document.write(carro2.nome + ": " + carro2.acelerar() + "</br>");
document.write(carro3.nome + ": " + carro3.acelerar() + "</br>");
document.write(carro4.nome + ": " + carro4.acelerar() + "</br>");

