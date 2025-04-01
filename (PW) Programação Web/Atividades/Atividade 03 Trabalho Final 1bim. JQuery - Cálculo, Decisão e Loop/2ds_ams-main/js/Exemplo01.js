$("#esconder").click(function () {
    $("#teste1").hide();
    $("#esconder").hide();
    $("#mostrar").show();
});

$("#mostrar").hide();
$("#mostrar").click(function() {
    $("#teste1").show();
    $("#esconder").show();
    $("#mostrar").hide();

});

var x1 = 1;
$("#alterarCSS").click(function() {
    if(x1 == 1)
    {
        $("#teste2").css({
            "background-color": "#303030",
            "color": "white",
            "border-color": "#000"
        });
        $("#alterarCSS").removeClass("btn-warning");
        $("#alterarCSS").css({
            "background-color": "#303030",
            "color": "white",
            "border-color": "#000"
        });
        x1 = 2;
    }
    else if (x1 == 2){
        $("#teste2").css({
            "background-color": "#ffff",
            "color": "black",
            "border-color": "#e3e3e3"
        });
        $("#alterarCSS").css({
            "background-color": "#ffff",
            "color": "black",
            "border-color": "#e3e3e3"
        });
        x1 = 1;
    }
});


var x2 = 1
$("#alterarClass").click(function() {
    if(x2 == 1)
    {
        $("#teste3").removeClass("alert-success").addClass("alert-primary")
        $("#alterarClass").removeClass("btn-success").addClass("btn-primary")
        x2 = 2
    }
    else if (x2 == 2)
    {
        $("#teste3").removeClass("alert-primary").addClass("alert-success")
        $("#alterarClass").removeClass("btn-primary").addClass("btn-success")
        x2 = 1
    }
});



$("#alternar1").hide();

$("#alternar1").click(function(){
    $("#link").attr({
        "href": "https://www.cps.sp.gov.br",
        "tittle": "CPS"
    });
    $("#link").addClass("text-danger")
    $("#link").text("CPS")
    $("#alternar1").hide();
    $("#alternar2").show();
});

$("#alternar2").click(function(){
    $("#link").attr({
        "href": "https://etecitu.cps.sp.gov.br/",
        "tittle": "Etec Itu"
    });
    $("#link").removeClass();
    $("#link").text("Etec Itu")
    $("#alternar2").hide();
    $("#alternar1").show();
});