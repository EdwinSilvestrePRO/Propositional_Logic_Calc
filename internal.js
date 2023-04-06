export default class Start extends Object {
	static isDisabled = false;
	#CalcError = class extends Object {
		constructor (typeError, message) {
			super();
			this.message = message;
			this.typeError = typeError;
		}
	}
    #cursorPosition = 0;
	#axioma = [];
	#starts = [];
	#ends = [];
	#Proposition = [
		{ // Cursor Parpadiante, Result (V || F), Variable Proposional, Conectiva Lógica o Parentesis
			value: null,
			type: 'Cursor',
			codeHTML: `<i id="cursor"></i>`
		},
		{ // Cursor Parpadiante, Result (V || F), Variable Proposional, Conectiva Lógica o Parentesis
			value: false,
			type: 'Variable_Proposicional',
			codeHTML: "F"
		}
	];
	updateAxioma () {
		let proposition = [];
		this.#Proposition
		.forEach(el=> (el.type !== "Cursor")? proposition.push(el) : (el));
		this.#axioma = proposition.reverse();
		// retorno el contexto actual.
		return this;
	}
	#viewError (calcError) {
		const $Title = this.notifications.querySelector("h3#title"),
		$detail = this.notifications.querySelector("p#details"),
		$main = this.resultBuild.parentElement.parentElement;

		$Title.textContent = calcError.typeError;
		$detail.textContent = calcError.message;

		this.notifications
		.classList.add("error");

		this.notifications
		.classList.remove("hidden");
		
		$main.classList.add("disabled");
		Start.isDisabled = true;
	}
	searchError () {
		// fijar una dirección de acuerdo a la perspectiva se se captura.
		const typesErrors = {
			parentesis: null
		}
		let paresParentesis = {
			apertura: 0,
			cierre: 0,
			isEqual () {
				return this.apertura == this.cierre;
			}
		}
		for (let index = 0; index < this.#axioma.length; index++) {
			let { type } = this.#axioma[index];
			if(/Parentesis_.*/.test(type)) {
				type == "Parentesis_Apertura"? (()=>{

					// bloque de paréntesis de apertura
					let before = this.#axioma[index-1];
					let after = this.#axioma[index+1];
					if(before !== undefined) {
						const notBack = ["Variable_Proposicional", "Parentesis_Cierre"];

						notBack
						.forEach(el=> el == before.type? 
							typesErrors.parentesis = new this.#CalcError("Error de paréntesis:", 
							`Detrás del elemento ${this.#axioma[index].type} en la posición ${index} no debe de existir un elemento ${el}, esto consiste en operaciones y debe de utilizar una conectiva lógica para incluir a ${el}.`) : el);
						
						if(typesErrors.parentesis)
							// Detener bucle para que no exista el siguiente:
							return index = this.#axioma.length+this.#axioma.length;
						else ;
					} else; //no hay algo antes del paréntesis de apertura

					if(typeof after !== "object") {
						typesErrors
						.parentesis = new this.#CalcError("Error de paréntesis:", 
						`Delante del elemento ${this.#axioma[index].type} en la posición ${index} debe de haber algo distindo al parentesis de cierre para que no esté vasio y distinto a una conectiva lógica para que así tenga una proposición válida para calcular.`);
						
						// Detener bucle para que no exista el siguiente:
						return index = this.#axioma.length+this.#axioma.length;
					}
					else {
						const notForward = ["Conectiva_Logica", "Parentesis_Cierre"];
						
						notForward
						.forEach(el=> el == after.type? 
							typesErrors
							.parentesis = new this.#CalcError("Error de paréntesis:", 
							`Delante del elemento ${this.#axioma[index].type} en la posición ${index} no debe de existir un elemento ${el} porque ¡no tiene sentido!.`) : el);

						if(typesErrors.parentesis)
						// Detener bucle para que no exista el siguiente:
						return index = this.#axioma.length+this.#axioma.length;
					}

					paresParentesis.apertura++;
				})()
				:
				(()=>{
					// bloque de paréntesis de cierre
					let before = this.#axioma[index-1];
					let after = this.#axioma[index+1];
					if (typeof before !== "object") {
						typesErrors
						.parentesis = new this.#CalcError("Error de paréntesis:", 
						`Atrás del elemento ${this.#axioma[index].type} en la posición ${index} debe de haber algo distinto al parentesis de apertura para que no esté vasío y distinto a una conectiva lógica incluyendo a la Negación Lógica para que así tenga una proposición válida para calcular en un sentido más amplio.`);
						// Detener bucle para que no exista el siguiente:
						return index = this.#axioma.length+this.#axioma.length;
					}
					else {
						const notBack = ["Parentesis_Apertura", "Conectiva_Logica-Negacion", "Conectiva_Logica"];
						notBack
						.forEach(el=> el == before.type? 
							typesErrors.parentesis = new this.#CalcError("Error de paréntesis:", 
							`Detrás del elemento ${this.#axioma[index].type} en la posición ${index} no debe de existir un elemento ${el} porque así no es coherente.`) : el);
						
						if(typesErrors.parentesis)
							// Detener bucle para que no exista el siguiente:
							return index = this.#axioma.length+this.#axioma.length;
						else ; // no hay un elemento prohibido atrás.
					}

					if (typeof after == "object") {
						const notForward = ["Variable_Proposicional", "Conectiva_Logica-Negacion", "Parentesis_Apertura"];
						
						notForward
						.forEach(el=> el == after.type? 
							typesErrors
							.parentesis = new this.#CalcError("Error de paréntesis:", 
							`Delante del elemento ${this.#axioma[index].type} en la posición ${index} no debe de existir un elemento ${el} porque en este sistema ¡no tiene sentido!.`) : el);

						if(typesErrors.parentesis)
						// Detener bucle para que no exista el siguiente:
						return index = this.#axioma.length+this.#axioma.length;
					}
					else ; // No hay elementos despues del paréntesis de cierre.

					paresParentesis.cierre++;
				})();
			}
		}

		// Imprime Error de paréntesis.
		if(typesErrors.parentesis)
			this.#viewError(typesErrors.parentesis);

		else if(!paresParentesis.isEqual()) {
			typesErrors
			.parentesis = new this.#CalcError("Error de paréntesis:", 
							`Cierra a los paréntesis que hayas abierto y elimina a los paréntesis de más porque la cantidad de parentesis de apertura debe ser igual a las de cierre.`);
			
			this.#viewError(typesErrors.parentesis);
		}

		else {} // No hay Errores

	}
	constructor (resultBuild, propositionBuilded, cursor, notifications) {
		super();
		this.cursor = cursor;
		this.resultBuild = resultBuild;
		this.propositionBuilded = propositionBuilded;
		this.notifications = notifications;
		this.data = {
			once: false,
			capture: false
		}
	}
	getProposition() {
        return this.#Proposition;
    }
	writeElement (element) {
        let proposition = [];
		let isLocalized = false,
		positionActual = 0;
		// (Yansou) Bucle para buscar el cursor:
		while (!isLocalized) {
			// Encontró el cursor si y solo si la condición es verdadera.
			if(this.#cursorPosition == positionActual) {
				// inserto el cursor en la nueva matriz:
				proposition[positionActual] = this.#Proposition[this.#cursorPosition];
				// incremento y pruebo si hay algo después del cursor:
				positionActual++;
				if(typeof this.#Proposition[positionActual] !== "object") {
					if(this.#cursorPosition > 0)
					proposition[positionActual] = element;
					else "nada";
					break;
				}
				else null;
				// ese halgo actual se comprueba con el futuro algo para ver si son del mismo tipo:
				if(this.#Proposition[positionActual].type == element.type) {
					proposition[positionActual] = element;
					positionActual++;
					for (; positionActual < this.#Proposition.length; positionActual++) {
						proposition[positionActual] = this.#Proposition[positionActual];
					}
				}
				else {
					let positionOfelement = positionActual;
					proposition[positionActual] = element;
					positionActual++;
					for (; positionOfelement < this.#Proposition.length; positionOfelement++) {
						proposition[positionActual] = this.#Proposition[positionOfelement];
						positionActual++;
					}
				}
				positionActual++;
				isLocalized = true;
			}
			// como no lo encontró, pues hay un elemento válido antes del cursor:
			else
			proposition[positionActual] = this.#Proposition[positionActual];
			// incrementa para ir al siguiente:
			positionActual++;
		}
		this.#Proposition = proposition;
		let codeHTML = [];

		this.#Proposition
		.forEach(element=>
			 codeHTML.push(element.codeHTML));

		this.resultBuild.innerHTML = codeHTML.reverse().join("");
    }
	deleteElement () {
		let proposition = [],
		isLocalized = false,
		positionActual = 0;
		const defaultValue = { // Cursor Parpadiante, Result (V || F), Variable Proposional, Conectiva Lógica o Parentesis
			value: false,
			type: 'Variable_Proposicional',
			codeHTML: "F"
		}
		// (Yansou) Bucle para buscar el cursor:
		while (!isLocalized) {
			// Encontró el cursor si y solo si la condición es verdadera.
			if(this.#cursorPosition == positionActual) {
				// inserto el cursor en la nueva matriz:
				proposition[positionActual] = this.#Proposition[this.#cursorPosition];
				// incremento y pruebo si hay algo después del cursor:
				positionActual++;
				if(typeof this.#Proposition[positionActual] !== "object")
					break;
				else null;

				if(this.#cursorPosition > 0) {
					positionActual++;

					for (; positionActual < this.#Proposition.length; positionActual++) 
					proposition[positionActual-1] = this.#Proposition[positionActual];
				}
				else {
					if (positionActual == this.#Proposition.length-1) {
						proposition[positionActual] = defaultValue;
						break;
					}
					positionActual++;
					for (; positionActual < this.#Proposition.length; positionActual++) 
					proposition[positionActual-1] = this.#Proposition[positionActual];
				}
				isLocalized = true;
			}
			// como no lo encontró, pues hay un elemento válido antes del cursor:
			else
			proposition[positionActual] = this.#Proposition[positionActual];
			// incrementa para ir al siguiente:
			positionActual++;
		}
		this.#Proposition = proposition;
		let codeHTML = [];

		this.#Proposition
		.forEach(element=>
			 codeHTML.push(element.codeHTML));

		this.resultBuild.innerHTML = codeHTML.reverse().join("");
	}
	moveCursor (value) {
		const proposition = [],
		maxPosition = this.#Proposition.length - 1,
		minPosition = this.#Proposition.length - this.#Proposition.length;

		let positionActual = 0,
		isLocalized = false;

		if (value == "right" && this.#cursorPosition < maxPosition) {
			// (Yansou) Bucle para buscar el cursor:
			while (!isLocalized) {
				if (this.#cursorPosition == positionActual) {
					proposition[positionActual] = this.#Proposition[(positionActual+1)];
					proposition[(positionActual+1)] = this.#Proposition[positionActual];

					positionActual += 2;
					for (; positionActual < this.#Proposition.length; positionActual++) 
					proposition[positionActual] = this.#Proposition[positionActual];
					
					isLocalized = true;
				} 
				else 
				proposition[positionActual] = this.#Proposition[positionActual];

				positionActual++;
			}

			this.#cursorPosition++;
		}
		else if (value == "left" && this.#cursorPosition > minPosition) {
			positionActual = this.#Proposition.length - 1;
			// (Yansou) Bucle para buscar el cursor:
			while (!isLocalized) {
				if(this.#cursorPosition == positionActual) {
					// >>>>>>>>>>>>>>>>>>>>>>>
					proposition[positionActual] = this.#Proposition[(positionActual - 1)];
					proposition[(positionActual-1)] = this.#Proposition[positionActual];
					
					positionActual -= 2;

					for(; positionActual >= 0; positionActual--)
					proposition[positionActual] = this.#Proposition[positionActual];
					isLocalized = true;
				}
				else 
				proposition[positionActual] = this.#Proposition[positionActual];

				positionActual--;
			}
			this.#cursorPosition--;
		}
		else return null;

		this.#Proposition = proposition;
		let codeHTML = [];

		this.#Proposition
		.forEach(element=>
			 codeHTML.push(element.codeHTML));

		this.resultBuild.innerHTML = codeHTML.reverse().join("");
	}
	ResetCalculator () {
		this.#cursorPosition = 0;
		this.#Proposition = [
			{ // Cursor Parpadiante, Result (V || F), Variable Proposional, Conectiva Lógica o Parentesis
				value: null,
				type: 'Cursor',
				codeHTML: `<i id="cursor"></i>`
			},
			{ // Cursor Parpadiante, Result (V || F), Variable Proposional, Conectiva Lógica o Parentesis
				value: false,
				type: 'Variable_Proposicional',
				codeHTML: "F"
			}
		];
		let codeHTML = [];

		this.#Proposition
		.forEach(element=>
			 codeHTML.push(element.codeHTML));

		this.resultBuild.innerHTML = codeHTML.reverse().join("");
	}
}