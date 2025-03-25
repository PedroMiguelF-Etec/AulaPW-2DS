/* Resultado */
$("#calcular").click(function(){
    var valor1 = parseFloat($("#txtvalor1").val());
    var valor2 = parseFloat($("#txtvalor2").val());

    var resultado = parseFloat((valor1 + valor2) / 100);

    var moeda = resultado.toLocaleString("pt-BR", 
        {
            style: "currency",
            currency: "BRL"
        });
    
    $("#resultado")
        .text("Resultado: " +  moeda)
        .css({'font-weight': 'bold', 'font-size': '18pt'});

    alert(resultado);

    /* MSG */
    if(valor1 > valor2)
    {
        msg = "valor 1 é maior";
    }
    else if(valor1 < valor2)
    {
        msg = "valor 2 é maior";
    }
    else{
        msg = "valores iguais";
    }
    alert(msg);

    /* ternário */
    msg = valor1 > valor2 ? 'valor 1 é maior' : valor1 < valor2 ? 'valor 2 é maior' : 'valores iguais';

    /* Switch */
    switch(parseInt(resultado) % 2){
        case 0:
            msg += ' - resultado é par';
            break;
        default:
            msg += ' - resultado é ímpar';
            break;
    }

    $("#msg")
        .text("Mensagem: " + msg)
        .css({'font-weight': 'bold', 'font-size': '18pt'});
    
    /* Fatorial */
    var fatorial = 1;
    for(var x = 1; x <= valor1; x++){
        fatorial *= x;
    } 

    $("#fatorial")
        .text("Fatorial: " + fatorial)
        .css({'font-weight': 'bold', 'font-size': '20pt'});
    
});