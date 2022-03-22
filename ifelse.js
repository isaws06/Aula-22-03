x = Math.floor(Math.random() * 10)
console.log("Nota do Aluno:", x)

if (x >= 7){
    console.log("Aluno aprovado")  
} else if(x >= 3){  
    console.log("Aluno Recuperação")
} else {
    console.log("Aluno Reprovado")
}