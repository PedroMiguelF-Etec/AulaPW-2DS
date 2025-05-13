$("#calcular").click(function() {
    var Nome = $("#txtnome").val()
    var Idade = parseFloat($("#txtidade").val())
    var SalarioBruto = parseFloat($("#txtsalariob").val())
    var Dependentes = parseFloat($("#txtdependentes").val())

    if (Nome == "" || isNaN(Idade) || isNaN(SalarioBruto) || isNaN(Dependentes)){
        alert("prencha todos os locais")
        return
    }

    if (Idade > 50){
        var bonusidade = 300
    }
    else{
        var bonusidade = 200
    }

    var inss = SalarioBruto * 0.08
    var valetransport = SalarioBruto * 0.05

    var valordependetes = Dependentes * 50

    var SalarioLiquido = SalarioBruto - inss - valetransport + bonusidade + valordependetes
    
    $("#txtrNome").text("Nome: " + Nome)
    $("#txtrndependentes").text("Numero de Dependentes: " + Dependentes)
    $("#txtrsalariobruto").text("Salario Bruto: " + SalarioBruto)
    $("#txtrinss").text("INSS: " + inss)
    $("#txtrvaletransporte").text("Vale Transporte: " + valetransport)
    $("#txtrsalarioliquido").text("Salario Liquido: " + SalarioLiquido)
})
