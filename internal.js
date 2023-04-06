export default class Start extends Object {
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
	searchError () {
		// fijar una dirección de acuerdo a la perspectiva se se captura.
		// for (let index = 0; )
	}
	constructor (resultBuild, propositionBuilded, cursor) {
		super();
		this.cursor = cursor;
		this.resultBuild = resultBuild;
		this.propositionBuilded = propositionBuilded;
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