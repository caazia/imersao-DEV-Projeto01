var Nome = prompt("Olá! Qual o seu nome?");
var distancia;
var valorAnosLuz = prompt("O Ano-luz é uma medida que corresponde à distância percorrida pela luz em um ano. Quantos anos-luz você gostaria de converter?");
var distanciaAnosLuz = 9454254955488000;
distancia = valorAnosLuz * distanciaAnosLuz;

alert(
  "Oi, " +
    Nome +
    ` a distância de ${valorAnosLuz} anos-luz é equivalente a ${distancia} metros.`
);
