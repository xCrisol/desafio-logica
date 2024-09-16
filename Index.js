let nome = "Victor"
let xp = 1000
let nivel 
let info1 = "O nível do herói "
let info2 = " é "

for (let i = 0; i <= xp; i++) {
    if (i < 1000) {
        nivel = "Ferro"
    } else if (i > 1000 && i <= 2001) {
        nivel = "Bronze"
    } else if (i >= 2001 && i <= 5000) {
        nivel = "Prata"
    } else if (i >= 5001 && i <= 7000) {
        nivel = "Ouro"
    } else if (i > 7001 && i <= 8000) {
        nivel = "Platina"
    } else if (i > 8001 && i <= 9000) {
        nivel = "Ascendente"
    }  else if (i > 9001 && i <= 1000) {
        nivel = "Imortal"
    } else 
        nivel = "Radiante"
}

console.log(info1 + nome + info2 + nivel + ".")
