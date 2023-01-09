import { countries } from "./countries.js";

const busca =  process.argv[2]

if(!busca){
    console.log("Faltou o argumento de busca");
} else{
    const resultado = countries.filter((country) => country.name.toLowerCase()[0] === busca.toLowerCase())
    console.log(resultado);
}