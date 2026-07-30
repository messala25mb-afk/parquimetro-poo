class Parquimetro {

    constructor(valor){
        this.valor = valor;
    }

    calcular(){

        if(this.valor < 1){

            return{
                mensagem:"Valor insuficiente.",
                tempo:0,
                troco:0
            };

        }

        if(this.valor <1.75){

            return{
                mensagem:"",
                tempo:30,
                troco:this.valor-1
            };

        }

        if(this.valor <3){

            return{
                mensagem:"",
                tempo:60,
                troco:this.valor-1.75
            };

        }

        return{

            mensagem:"",
            tempo:120,
            troco:this.valor-3

        };

    }

}

document.getElementById("calcular").addEventListener("click", function(){

    const valor = parseFloat(document.getElementById("valor").value);

    const parquimetro = new Parquimetro(valor);

    const resultado = parquimetro.calcular();

    if(resultado.mensagem){

        document.getElementById("resultado").innerHTML =
        resultado.mensagem;

    }else{

        document.getElementById("resultado").innerHTML =

        `Tempo: ${resultado.tempo} minutos <br>
         Troco: R$ ${resultado.troco.toFixed(2)}`;

    }

});