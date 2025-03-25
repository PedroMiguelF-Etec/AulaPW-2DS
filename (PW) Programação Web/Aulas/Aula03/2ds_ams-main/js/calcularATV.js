$("#ordem").hide();
$("#media").hide();
$("#loop").hide();

$("#calcular").click(function(){

    var txt1 = parseFloat($("#txt1").val())
    var txt2 = parseFloat($("#txt2").val())
    var txt3 = parseFloat($("#txt3").val())
    var valor = 0

    const ordem = [txt1, txt2, txt3]

    $("#ordem").text("Ordem Cresente: " + ordem.sort()).show();

    $("#media").text("Media: " + (txt1 + txt2 + txt3) / 3).show();
    
    for(let x in ordem){
        valor += ordem[x]
    }
    $("#loop").text("Loop: " + valor).show();
})