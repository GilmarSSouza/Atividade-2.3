var x = { casa1:0, casa2:0, casa3:0, casa4:0, casa5:0, casa6:0, casa7:0, casa8:0, casa9:0};
var moves = 0;
var victory = 0;


function teste(event){
	y = event.target.id;
	console.log(y);
	if (x[y] == 0 && victory != 1) {
		x[y] = 1
		event.target.innerHTML = "<img src = 'letter_x.png'/>";
		moves++;
		console.log(moves);
		verificarfimdejogo();
		AI();
		
	}
	else{
		alert("Celula ocupada");
	}
	
}
function AI(){
	if (moves<9 && victory != 1){
	var ok = 0;
	while(ok!=1){
	var n = Math.floor(Math.random()*9) + 1;
	console.log(n);
	var z = "casa" + n;
	
	if(x[z] == 0){
		x[z] = 2;
		document.getElementById(z).innerHTML = "<img src = 'letter_o.png'/>";
		moves++;
		verificarfimdejogo();
		ok = 1;
	}
}

	console.log(x[z]);
}
}
/*function check_victory(){
	console.log("teste");
	for (var i = 1; i < 10; i++) {
		console.log("casa" + i +" - "+ x["casa"+i]);
	}
	if((x[casa1] == 1) && (x[casa2] == 1) && (x[casa3] == 1) || (x[casa4] == 1) && (x[casa5] == 1) && (x[casa6] == 1) || (x[casa7] == 1) && (x[casa8] == 1) && (x[casa9] == 1) || (x[casa1] == 1) && (x[casa5] == 1) && (x[casa9] == 1) || (x[casa1] == 1) && (x[casa4] == 1) && (x[casa7] == 1) || (x[casa2] == 1) && (x[casa5] == 1) && (x[casa8] == 1) || (x[casa3] == 1) && (x[casa6] == 1) && (x[casa9] == 1) || (x[casa3] == 1) && (x[casa5] == 1) && (x[casa7] == 1)){
		document.getElementById("resultado").innerHTML = "Você Ganhou, Parabens!!";
		victory = 1;
		console.log("Você ganhou")
	}
	else if((x[casa1] == 2) && (x[casa2] == 2) && (x[casa3] == 2) || (x[casa4] == 2) && (x[casa5] == 2) && (x[casa6] == 2) || (x[casa7] == 2) && (x[casa8] == 2) && (x[casa9] == 2) || (x[casa1] == 2) && (x[casa5] == 2) && (x[casa9] == 2) || (x[casa1] == 2) && (x[casa4] == 2) && (x[casa7] == 2) || (x[casa2] == 2) && (x[casa5] == 2) && (x[casa8] == 2) || (x[casa3] == 2) && (x[casa6] == 2) && (x[casa9] == 2) || (x[casa3] == 2) && (x[casa5] == 2) && (x[casa7] == 2)){
		document.getElementById("resultado").innerHTML = "Você Perdeu, reinicie a pagina para tentar novamente";
		victory = 1;	
		console.log("você perdeu");
	}
}	*/
function verificarfimdejogo(){
	casasIguais(1, 2, 3);
	casasIguais(4, 5, 6);
	casasIguais(7, 8, 9);
    casasIguais(1, 4, 7);
    casasIguais(2, 5, 8);
    casasIguais(3, 6, 9);
    casasIguais(1, 5, 9);
    casasIguais(3, 5, 7);



}
function casasIguais(a, b, c){
    var casaA = (x["casa"+a]);
    var casaB = (x["casa"+b]);
    var casaC = (x["casa"+c]);
    if ((casaA == 1) && (casaA == casaB) && (casaB == casaC)){
    	document.getElementById("resultado").innerHTML = "<h1>Você Ganhou, Parabens!!</h1>";
		victory = 1;
		console.log("Você ganhou")
    }
    else if ((casaA == 2) && (casaB == casaA) && (casaC == casaB)) {
    	document.getElementById("resultado").innerHTML = "<h1>Você Perdeu, reinicie a pagina para tentar novamente</h1>";
		victory = 1;	
		console.log("você perdeu");
    }
   }


