$("#calcular").click(function () {
    var valor = parseFloat($("#txtvalor").val())
    var desconto = parseFloat($("#txtdesconto").val())
    var multa = parseFloat($("#txtmulta").val())

    if (isNaN(valor) || isNaN(desconto) || isNaN(multa)){
        alert("por favor, insira numeros validos.")
        return
    }

    var final = parseFloat((valor * (desconto / 100) + multa).toFixed(2))

    var moead = final.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL',
        minimumFractionDigits: 2
    })

    $("#txtresultado").text("Valor Final: " + moead)
    .css({
        'font-weight': 'bold', 
        'font-size': '18pt', 
        'color': '#E63244'})
    .fadeIn(1000)

    if (final > 5){
        alert("Valor final maior que 5")
        $("#txtresultado").css('color', '#6A5F31')
    }else{
        $("#txtresultado").css('color', '#35682D')
        alert("valor final menor ou igual a 5")
    }

    //if de uma linha (desnecessario)
    var mostrar = "da media"
    mostrar = (final >5) ? 'acima ' + mostrar : 'abaixo ' + mostrar;
    alert("O valor final está " + mostrar)

    //switch case
    switch (true){
        case (final > 10):
            alert("valor final maior que 10")
            break
        case (final > 5):
            alert("varlor final maior que 5")
            break
        default:
            alert("valor final menor ou igual a 5")
    }

    var msg = ""
    switch(parseInt(final) % 2){
        case 0:
            alert("valor final é par")
            msg = "par"
        case 1:
            alert("valor final é ímpar")
            msg = "ímpar"
        default:
            alert("valor final não é um numero")
    }
    $("#txtmsg").text("o valor é " + msg)
    .css({ 'font-weight': 'bold', 'font-size': '14pt', 'color': "#1D1E33"})
    
    //fatorial
    var fatorial = 1;
    for (var i = 1; i <= valor; i++){
        fatorial *= i
    }
    $("#txtfatorial").text("fatorial de " + valor + " é " + fatorial)
    .css({'font-weight': 'bold', 'font-size': '14pt', "color": '#6C6874'})
})