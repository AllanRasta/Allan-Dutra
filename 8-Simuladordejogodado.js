        function jogarDado(){
            return Math.floor(Math.random() * 6) + 1;
        }
        
        let jogada1 = jogarDado()
        let jogada2 = jogarDado()
        let soma = jogada1 + jogada2

        if(soma === 7 || soma === 11){
            alert(soma+" Você ganhou!")
        } else {
            alert(soma+" Você perdeu!")
        }
