const app = require("../js/app");

describe("Teste funções App", () =>{
    test("Função gerar número aleatorio", () => {
        let inf = 0;
        let sup = 10;
        let qtdFor = (sup - inf+1)*10;

        let erro = false;
        for (let i = 0; i < qtdFor; i++) {
            let resultado = app.gerarNumeroAleatorio(inf, sup);
            if(resultado < inf || resultado > sup){
                erro = true;
            }
            
        }
        expect(erro).toBeFalsy();
    })
})