var senha

function gerar(){
    return Math.floor(Math.random() * 1000000).toString().split("")
}

function destravar(){
    var num = document.getElementById("sequencia").value.split("")
    var pos = 0
    var acc = 0
    var aux = []

    if(num == senha){
        document.getElementById("sucesso").innerHTML = "Código correto!";
    }else{
        for(var i = 0; i < num.length; i++){
            if(num[i] == senha[i]){
                pos++;
            }
            if(senha.indexOf(num[i]) !== -1 && aux.indexOf(num[i]) == -1){
                var str = 1;
                if(aux.indexOf(num[i]).length >= 2) str = senha.indexOf(num[i]).length;
                acc = acc + str;
                aux.push(num[i]);
            }
        }

        if(acc>0){
            var sucesso = [];

            sucesso = `Código inválido, ${acc} números certos ${pos} e na posição correta.`
            document.getElementById("sucesso").innerHTML = sucesso
        }else{
            document.getElementById("sucesso").innerHTML = "Código inválido."
        }
    }
}
