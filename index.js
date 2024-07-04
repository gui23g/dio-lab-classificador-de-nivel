// Variáveis
var name, xp, nivel;

// Função que retorna o nível do herói
function classificarNivel(xp) {
    if (xp < 1000) {
        return "Ferro";
    } else if (xp <= 2000) {
        return "Bronze";
    } else if (xp <= 5000) {
        return "Prata";
    } else if (xp <= 7000) {
        return "Ouro";
    } else if (xp <= 8000) {
        return "Platina";
    } else if (xp <= 9000) {
        return "Ascendente";
    } else if (xp <= 10000) {
        return "Imortal";
    } else {
        return "Radiante";
    }
}

// Testes da funcao utilizando o laço de repetição
for (let i = 0; i <= 11000; i += 1000) {
    name = "Herói" + i;
    xp = i;
    nivel = classificarNivel(xp);

    console.log(`O Herói de nome ${name} está no nível de ${nivel}`);
}

// Setando de forma manual os dados
name = "Monster123";
xp = 1234;
nivel = classificarNivel(xp);
console.log(`O Herói de nome ${name} está no nível de ${nivel}`);