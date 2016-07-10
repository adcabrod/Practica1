var form = document.getElementById("form-contact");

var conocidoInput = document.getElementsByName("tipo_conocer");


var inputConocido = document.createElement("input");
inputConocido.setAttribute("id", "otros");
inputConocido.setAttribute("type", "text");
inputConocido.setAttribute("name", "otros1");
inputConocido.setAttribute("placeholder", "otros...");
inputConocido.setAttribute("required", "");

for (var i = 0; i < conocidoInput.length; i++) {
	conocidoInput[i].addEventListener('click', function(){
		if (this.value == 'Otros'){
           this.parentNode.appendChild(inputConocido);
		} else {
			this.parentNode.removeChild(inputConocido);
		}
	});
}



form.addEventListener("submit", function(evt){
	var inputNombre = document.getElementById("nombre");
	var emailInput = document.getElementById('email');
	var telefonoInput = document.getElementById("telefono");

	var conocidoRadioInput = {
		"facebook" : document.getElementById("id_conocer_1"),
		"twitter"  : document.getElementById("id_conocer_2"),
		"instagram": document.getElementById("id_conocer_3"),
		"otros2"   : document.getElementById("id_conocer_4"),
	};

	var textoArea = document.getElementById("area").value;
	var textoAreaDividido = textoArea.split(" ");
	var numeroPalabras = textoAreaDividido.length;

	if (inputNombre.checkValidity() == false || !inputNombre.callProp('checkValidity')) {
		alert("Escribe tu nombre");
		inputNombre.focus();
		evt.preventDefault();
		return false;
	}

	if (emailInput.checkValidity() == false || !emailInput.callProp('checkValidity')) {
		alert("Escribe tu email");
		email.focus();
		evt.preventDefault();
		return false;
	}

	if (telefonoInput.checkValidity() == false || !telefonoInput.callProp('checkValidity')) {
		alert("Escribe tu número de telefono en formato español (empezando por 6 , 7 , 8 o 9 + 8 dígitos) ");
		telefono.focus();
		evt.preventDefault();
		return false;
	}

	if (conocidoRadioInput.otros2.checkValidity() == false || !conocidoRadioInput.otros2.callProp('checkValidity')) {
		alert("Selecciona cómo nos conociste");
		evt.preventDefault();
		return false;
	}

	if(document.getElementById("otros")) {
	if(document.getElementById("otros").checkValidity() == false || !inputNombre.callProp('checkValidity')) {
			alert("Escribe cómo nos conociste");
			document.getElementById("otros").focus();
			evt.preventDefault();
			return false;
		}
	}
	if(parseInt(numeroPalabras) >= 150){
		alert("Por favor, introduce menos de 150 palabras en el mensaje");
		evt.preventDefault();
		return false;
	}


});

