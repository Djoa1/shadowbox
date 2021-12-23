function iniciarShadow(){

        var movimentos = ['assets/img/cruzesquerda.gif', 'assets/img/cruzdireita.gif','assets/img/jeb.gif', 'assets/img/direto.gif'];
       
        var movimento = Math.floor(Math.random() * movimentos.length);

        document.getElementById("guarda").src = movimentos[movimento];

        setTimeout(function voltaBase (){

            document.getElementById("guarda").src = "assets/img/start.gif";

    }, 1250);
}

setInterval(function() {iniciarShadow()}, 4500);