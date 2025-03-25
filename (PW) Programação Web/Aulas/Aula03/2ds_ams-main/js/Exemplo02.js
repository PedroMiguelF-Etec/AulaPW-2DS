$("#button2").hide();
$("#button3").hide();

$("#button1").click(function(){
    $("#button1").hide();
    $("#button2").show();

    $("#alert").text("A Faculdade de Tecnologia Dom Amaury Castanho (FATEC Itu) é uma instituição pública de ensino superior que oferece cursos de graduação gratuitos. ")
    $("#alert").removeClass("alert-primary").addClass("alert-success");

    $("#link").removeClass("text-primary").addClass("text-success");
    $("#link").text("Fatec Itu");
    $("#link").attr({
        "href": "https://www.fatecsp.br/"
    });
});
$("#button2").click(function(){
    $("#button2").hide();
    $("#button3").show();

    $("#alert").text("O Centro Paula Souza (CPS) é uma autarquia do governo do estado de São Paulo que administra escolas técnicas e faculdades de tecnologia. O CPS é uma referência em educação profissional e tecnológica. ")
    $("#alert").removeClass("alert-success").addClass("alert-warning");

    $("#link").removeClass("text-success").addClass("text-warning");
    $("#link").text("CPS");
    $("#link").attr({
        "href": "https://www.cps.sp.gov.br/"
    });
});
$("#button3").click(function(){
    $("#button3").hide();
    $("#button1").show();

    $("#alert").text("A Escola Técnica Estadual (Etec) é uma instituição de ensino público que oferece cursos técnicos e de ensino médio. As Etecs são reconhecidas no mercado de trabalho e exigem um processo seletivo para ingresso.")
    $("#alert").removeClass("alert-warning").addClass("alert-primary");

    $("#link").removeClass("text-warning").addClass("text-primary")
    $("#link").text("Etec Itu")
    $("#link").attr({
        "href": "https://etecitu.cps.sp.gov.br/"
    });
});