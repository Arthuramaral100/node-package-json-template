
const nome = process.argv[2]
const idade = +process.argv[3]

if(!nome || !idade){
    console.log("Falta de dados, rode o comando novamente e informe seu nome e idade por favor!");
} else{
    console.log(`Olá ${nome.toUpperCase()}! Você tem ${idade} anos. Em sete anos você terá ${idade + 7} anos`);
}