import {countries} from "./countries.js"

// console.log("Hello world!");
// console.log(countries);

const busca =  process.argv[2]

if(!busca){
    console.log("Faltou o argumento de busca");
} else{
    const resultado = countries.filter((country) =>{
        return country.name.toLowerCase().includes(busca.toLowerCase())
    })
    if(resultado.length === 0){
        console.log("País não localizado");
    } else{
        console.log(resultado);
    }
}

