    
            function mediaProva(a, b, c) {
                let media = (a + b + c) / 3;
                var situacao;
                if (media >= 7) {
                    situacao = "Aprovado";
                }
                else {
                    situacao = "Reprovado";
                }
                alert("O aluno obteve média: " + media + " e foi " + situacao);
            }
            let nota1 = parseFloat(prompt("Digite o primeira nota:"));
            let nota2 = parseFloat(prompt("Digite o segunda nota:"));
            let nota3 = parseFloat(prompt("Digite o terceira nota:"));
            mediaProva(nota1, nota2, nota3);

    
