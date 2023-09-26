import { getImagesOfApp } from './imagesOfApp.js';
export default class Start extends Object {
	static isDisabled = false;
	static STARTED = localStorage.getItem("@std");
	static icon = getImagesOfApp().icon;
	static ActionAsync (time) {
		return new Promise((resolve, reject)=> {
			if(typeof time !== "number") 
			reject(`"${time}" no es un número`);
			else
			setTimeout(resolve, time);
		});
	}
	#Documentations = {
		variables_proposicionales: {
			title: "Variables Proposicionales",
			codeHTMLOfSupport: `
		<p>
						Las variables Lógicas Proposicionales
						son contenedores de verdad (V) o falsedad (F)
						que se utiliza para realizar operaciones.
						<br>
						<br>
						Las variables predeterminadas de esta aplicación son:
					</p>
					<ul class="default-variables false">
						<li>s: 3 es mayor que 10.</li>
						<li>t: las laptos se comen.</li>
						<li>x: hay un solo planeta en el sistema solar.</li>
					</ul>
	
					<p>
						Estas variables son considerados en esta Calculadora
						dígitos falsistas, porque sus enunciados son falsos.
					</p>
					<ul class="default-variables true">
						<li>p: 40 es mayor que -300.</li>
	
						<li>q: la ciencia es una escalera para revelar verdades.</li>
	
						<li>r: el uiverso es complejo.</li>
					</ul>
					<p>
						Estas variables son considerados en esta Calculadora
						dígitos verdaderos, porque sus enunciados son verdaderos.
					</p>
					<p>
						Para que estos dígitos realizen operaciones necesita
						de constantes lógicas o Conectivas Lógicas para hacer
						operaciones de Negación, Conjunción, etc... y
						es para eso que está esta calculadora, para calcular
						básicamente los valores de los enunciados que solo
						pueden ser dos: V o F.
					</p>
		`
		},
		conectivas_logicas: {
			title: "Conectivas Lógicas",
			codeHTMLOfSupport: `
			<p>
				Son operadores Lógicos Proposicionales para realizar
				operaciones entre Variables Proposicionales que son
				contenedores de verdad (V) o falsedad (F). Estos
				operadores deciden la acción de esas variables,
				cada operador es distinto porque es un concepto que
				se manifiesta a la hora de realizar operaciones.
			</p>

			<p>
				Se pueden llamar Conectivas Lógicas, Constantes Lógicas,
				Operadores Lógicos Proposicionales, entre otros.
				Con estos operadores se pueden formar fómulas bién
				formadas aún mas complejas y hacer inferencias cuya
				conclusiones sean tautológicas.
			</p>

			<p>
				Como la Lógica Proposicional es un sistema formal
				que pertenece a la rama dedicada a la Lógica Matemática
				posee propiedades que son estudiadas en la metalógica.
				<br><br>
				Las Conectivas Lógicas son representadas mediante
    			símbolos en operaciones Lógicas:
			</p>
				<div class="operation">operación: <i>∽F→(∽(x→r)∧∽x)\u2228∽p...</i></div>
				<br>
				<br>
				<div class="def">Conjunción lógica "∧"</div>
				<p>
					Este es un operador Lógico que se
					utiliza para la conjunción lógica
					entre los valores Proposicionales,
					el valor es V solo si los dos valores
					son verdaderos.
					<br>
					<br>
					Ejemplo:
				</p>
					<div class="operation">p∧p ≡ V</div>
					<div class="operation">s∧p ≡ F</div>
					<div class="operation">p∧s ≡ F</div>
					<div class="operation">s∧s ≡ F</div>
				<br>
				<div class="def">Disyunción lógica "\u2228"</div>
				<p>
					Este operador Lógico que se
					utiliza para la Disyunción
					lógica entre valores Proposicionales,
					el valor es V cuando uno de los dos o
					los dos son verdaderos y F cuando
					los dos son falsos.
					<br>
					<br>
					Ejemplo:
				</p>
				<div class="operation">p\u2228p ≡ V</div>
				<div class="operation">s\u2228p ≡ V</div>
				<div class="operation">p\u2228s ≡ V</div>
				<div class="operation">s\u2228s ≡ F</div>

				<br>
				<br>

				<div class="def">Negación Lógica "~"</div>
				<p>
				Este operador Lógico que se
				utiliza para la Negación Lógica
				de valores Proposicionales, el
				valor es V si la variable
				es falsa y F si es verdadera.
				<br>
				<br>
				Ejemplo:
				</p>
				<div class="operation">~s ≡ V</div>
				<div class="operation">~p ≡ F</div>

				<div class="def">Implicación Material "\u2192"</div>
				<p>
					Este operador es utilizado para la
					Implicación Material que es justamente
					equivalente a la Negación Lógica del
					primer valor y la Disyunción lógica
					con el segundo valor.
					<br>
					<br>
					Ejemplo:
				</p>
				<div class="operation">p \u2192 p ≡ V</div>
				<div class="operation">s \u2192 p ≡ V</div>
				<div class="operation">s \u2192 s ≡ V</div>
				<div class="operation">p \u2192 s ≡ F</div>
				
				<br>
				<br>
			<p>
				Es muy recomendable utilizar paréntesis
				para realizar operaciones proposicionales
				en esta aplicación porque ayuda a evitar
				ambiguaciones.
			</p>
			`
		},
		order_operations: {
			title: "Operaciones",
			codeHTMLOfSupport: `
	<p>Las Operaciones son realizadas
	mediante evaluaciones de las
	Variables y las Conectivas Lógicas
	para determinar un resultado.</p>

	<p>En esta calculadora Proposicional
	hay reglas para hacer operaciones
	y se hace en un orden jerárquico
	definido en esta calculadora que
	es el siguiente:</p>
	
	<ol class="order-operation">
		<li> Paréntesis (para cambiar el orden de evaluación).</li>
		<li> Negación lógica (operador monádico, como el NOT).</li>
		<li> Conjunción lógica (AND).</li>
		<li> Disyunción lógica (OR).</li>
		<li> Implicación material (IF...THEN).</li>
	</ol>

	<p>Esta Calculadora Lógica sigue estas reglas
	del 1 asta 5.</p>
			`
		},
		historial_calc: {
			title: "Historial de Cálculo",
			codeHTMLOfSupport: `
<p>El Historial de Cáculos es una
característica de esta aplicación
para ver las operaciones o valores
mas recientes, tiene un límite
establecido en lo que condiciona
que no habrá en el historial mas
de 25 operaciones recientes.</p>

<p>Ya que estás usando esta aplicación
puedes acceder al historial presionando
el botón que queda en el centro de esta
calculadora para ver y editarlos.</p>
			`
		},
		information_calc: {
			title: "Información de la Calculadora",
			codeHTMLOfSupport: `
			<figure>
				<img width="300" height="300" src="${getImagesOfApp().logoOfApp}"/>
				<figcaption>Codevelp Propositional Calculator</figcaption>
			</figure>
			<pre>
			Versión: v1.2.3

			Desarrolladores: Codevelp

			Canal de youtube: Codevelp Club.

			Fecha creación: Thu, 13 Apr 2023.

			Actualizado en esta fecha: Tue Sep 26 2023
			Descripción:

			Esta calculadora es una iniciativa de Codevelp
			que abarca el concepto de la lógica proposicional
			para así realizar con efectividad operaciones
			proposicionales.
			</pre>
			<br>
			<br>
			<div class="def">Mas</div>
			<p>
				Esta es una calculadora lógica proposicional es
				capas de hacer operaciones de conjunción lógica,
				disyunción lógica, negación lógica e implicación
				material. Los operadores Bicondicional o doble 
				implicación y disyunción exclusiva fueron excluidas
				en esta versión 1.2.3 por motivos importantes de 
				incumplimiento del sistema lógico de esta calculadora,
				pero talvés posteriormente lo soporte.
				<br>
				<br>
				Se tiene la perspectiva de que esta calculadora
				sea la mejor calculadora proposicional del mundo.
			</p>
			`
		}
	}
	#CalcError = class extends Object {
		constructor (typeError, message) {
			super();
			this.message = message;
			this.typeError = typeError;
		}
	}
	#CalcWarning = class extends this.#CalcError {
		constructor (typeWarn, message) {
			super(typeWarn, message);
			this.typeWarn = this.typeError;
		}
	}
    #cursorPosition = 0;
	#axioma = [];
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

		if(calcError instanceof this.#CalcWarning)
			this.notifications
				.classList.add("warn");

		else 
			this.notifications
				.classList.add("error");

		this.notifications
		.classList.remove("hidden");
		
		$main.classList.add("disabled");
		Start.isDisabled = true;
	}
	async #hideHelp () {
		
		const $article = document.body.querySelector("article#SA-internal");
		
		$article.classList.add("toTop");
		
		await Start.ActionAsync(1000);
		
		document.body.removeChild($article);

		Start.isDisabled = false;

		this.main
		.classList.remove("disabled");
	}
	#closeWindow () {
		const $main = this.resultBuild.parentElement.parentElement,
		posibleClass = ["error", "warn", "instructions"];

		posibleClass
		.forEach(el=> this.notifications.classList.remove(el));
		

		this.notifications
		.classList.add("hidden");

		$main.classList.remove("disabled");

		Start.isDisabled = false;
	}

	searchError () {
		// fijar una dirección de acuerdo a la perspectiva se se captura.
		const typesErrors = {
			parentesis: null,
			conectiva: null,
			variable: null
		}
		let paresParentesis = {
			apertura: 0,
			cierre: 0,
			isEqual () {
				return this.apertura == this.cierre;
			}
		}
		let countCLN = 0,
			countVP = 0;
		for (let index = 0; index < this.#axioma.length; index++) {
			let { type } = this.#axioma[index];

			if(type == "Conectiva_Logica-Negacion") {
				if(++countCLN >= 4) {
					typesErrors.conectiva = new this.#CalcError("Error de Negación Lógica:",
					`Se repite demaciado el operador proposícional ${type}. No debe de repetirse mas de 3 veces porque si lo hace es inválido para efectuar el cálculo. Utiliza paréntesis si quieres realizarlo.`);
					break;
				}
			}
			else 
				countCLN = 0;
			
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
						`Delante del elemento ${this.#axioma[index].type} en la posición ${index} debe de haber algo distinto al parentesis de cierre para que no esté vasio y distinto a una conectiva lógica para que así tenga una proposición válida para calcular.`);
						
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
			else if (/Conectiva_.*/.test(type)) {
				type == "Conectiva_Logica-Negacion"? (()=>{
					// Bloque conectiva lógica negación:
					let before = this.#axioma[index-1];
					let after = this.#axioma[index+1];
					if(before !== undefined) {
						const notBack = ["Variable_Proposicional", "Parentesis_Cierre"];

						notBack
						.forEach(el=> el == before.type? 
							typesErrors.conectiva = new this.#CalcError("Error de Negación Lógica:", 
							`Detrás del elemento ${this.#axioma[index].type} en la posición ${index} no debe de existir un elemento ${el}, debes de colocar a ${this.#axioma[index].type} correctamente.`) : el);
						
							if(typesErrors.conectiva) 
								// Detener bucle para que no exista el siguiente:
								return index = this.#axioma.length+this.#axioma.length;
							else ; // no hay error de conectiva lógica.

					} else ;//No hay algo antes de la negación lógica


					if(typeof after !== "object") {
						typesErrors
						.conectiva = new this.#CalcError("Error de Negación Lógica:", 
						`Delante del elemento ${this.#axioma[index].type} en la posición ${index} debe de haber algo distinto al parentesis de cierre y distinto de una conectiva lógica distinto de si misma, porque si es igual a ${this.#axioma[index].type} entonces es válido.`);
						// Detener bucle para que no exista el siguiente:
						return index = this.#axioma.length+this.#axioma.length;
					} 
					else {
						const notForward = ["Conectiva_Logica", "Parentesis_Cierre"];
						
						notForward
						.forEach(el=> el == after.type? 
							typesErrors
							.conectiva = new this.#CalcError("Error de Negación Lógica:", 
							`Delante del elemento ${this.#axioma[index].type} en la posición ${index} no debe de existir un elemento ${el} porque ¡no tiene sentido!.`) : el);

						if(typesErrors.conectiva) 
							// Detener bucle para que no exista el siguiente:
							return index = this.#axioma.length+this.#axioma.length;
					}

				})()
				:
				(()=>{
					// Bloque conectiva lógica distinto de negación lógica:
					let before = this.#axioma[index-1];
					let after = this.#axioma[index+1];
					if(typeof before !== "object") {
						typesErrors
						.conectiva = new this.#CalcError(`Error de ${type}:`, 
						`Detrás del elemento ${this.#axioma[index].type} en la posición ${index} debe de haber algo distinto de cualquier conectiva lógica y parentesis de apertura. Colócalo correctamente para realizar la operación`);
						// Detener bucle para que no exista el siguiente:
						return index = this.#axioma.length+this.#axioma.length;
					}
					else {
						const notBack = ["Conectiva_Logica", "Conectiva_Logica-Negacion", "Parentesis_Apertura"];
						
						notBack
						.forEach(el=> el == before.type? 
							typesErrors.conectiva = new this.#CalcError(`Error de ${type}:`, 
							`Detrás del elemento ${this.#axioma[index].type} en la posición ${index} no debe de existir un elemento ${el}, debes de colocar a ${this.#axioma[index].type} correctamente para que se pueda realizar la operación.`) : el);
						
							if(typesErrors.conectiva) 
								// Detener bucle para que no exista el siguiente:
								return index = this.#axioma.length+this.#axioma.length;
							else ; // no hay error de conectiva lógica.
					}

					if(typeof after !== "object") {
						typesErrors
						.conectiva = new this.#CalcError(`Error de ${type}:`, 
						`Delante del elemento ${type} en la posición ${index} debe de haber algo distinto al parentesis de cierre y distinto de una conectiva lógica excluyendo a negación lógica.`);
						// Detener bucle para que no exista el siguiente:
						return index = this.#axioma.length+this.#axioma.length;
					} 
					else {
						const notForward = ["Conectiva_Logica", "Parentesis_Cierre"];
						
						notForward
						.forEach(el=> el == after.type? 
							typesErrors
							.conectiva = new this.#CalcError(`Error de ${type}:`, 
							`Delante del elemento ${this.#axioma[index].type} en la posición ${index} no debe de existir un elemento ${el} porque ¡no tiene sentido!.`) : el);

						if(typesErrors.conectiva) 
							// Detener bucle para que no exista el siguiente:
							return index = this.#axioma.length+this.#axioma.length;
					}
				})();
			}
			else if (/Variable_Proposicional/.test(type)) {
				// bloque de Variables_Proposicionales
				let before = this.#axioma[index-1];
				let after = this.#axioma[index+1];
				if(before !== undefined) {
					const notBack = ["Variable_Proposicional", "Parentesis_Cierre"];

					notBack
					.forEach(el=> el == before.type? 
						typesErrors.variable = new this.#CalcError("Error de Variable_Proposicional:", 
						`Detrás del elemento ${this.#axioma[index].type} en la posición ${index} no debe de existir un elemento ${el}, debes de colocar a ${this.#axioma[index].type} correctamente y no debe de repetir variables proposicionales en un sentido lineal.`) : el);
					
						if(typesErrors.variable) 
							// Detener bucle para que no exista el siguiente:
							break;
						else ; // no hay error de variable proposicional.



				} else ;//No hay algo antes de la variable Proposicional.

				if(typeof after == "object") {
					const notForward = ["Variable_Proposicional", "Conectiva_Logica-Negacion", "Parentesis_Apertura"];
					
					notForward
					.forEach(el=> el == after.type? 
						typesErrors
						.variable = new this.#CalcError("Error de Variable_Proposicional:", 
						`Delante del elemento ${this.#axioma[index].type} en la posición ${index} no debe de existir un elemento ${el} porque no vale.`) : el);
	
					if(typesErrors.variable) 
						// Detener bucle para que no exista el siguiente:
						break;
				}
				 	countVP++;
				} 
				else {}
				
				if (countVP >= 3 && (paresParentesis.apertura == 0 && paresParentesis.cierre == 0)) {
					typesErrors
						.variable = new this.#CalcWarning("Advertencia de Variables_Proposicionales:", 
						`Si necesitas realizar más de una operacón usted debe de utilizar paréntesis para que pueda indicar que operación se va hacer primero, segundo, tercero y susecivamente. También sirve para evitar las ambiguaciones utilizando la desambiguación de operaciones como lo es la conjunción lógica y la disyunción lógica.`);
					break;
				}
				
		}

		// Imprime Error de paréntesis.
		if(typesErrors.parentesis)
			this.#viewError(typesErrors.parentesis);

		else if(typesErrors.conectiva) 
				this.#viewError(typesErrors.conectiva);

		else if(typesErrors.variable) 
				this.#viewError(typesErrors.variable);
			
		else if(!paresParentesis.isEqual()) {
			typesErrors
			.parentesis = new this.#CalcError("Error de paréntesis:", 
							`Cierra a los paréntesis que hayas abierto y elimina a los paréntesis de más porque la cantidad de parentesis de apertura debe ser igual a las de cierre.`);
			
			this.#viewError(typesErrors.parentesis);
		}


		else 
			this.#evaluateProposition() // No hay Errores

	}
	async #selectSupportOption (target, doc, panel) {
		const optionActual = this.#Documentations[doc];
		if (optionActual) {
			panel.realContent.classList.add("notVisible");
			panel.theTitle.textContent = optionActual.title;
			panel.realContent.innerHTML = optionActual.codeHTMLOfSupport;
			target.classList.add("selected");
			
			await Start.ActionAsync(150);
			
			panel.realContent.classList.remove("notVisible");

		}
		else return target.textContent = "No Funciona";
	}
	constructor (main, resultBuild, propositionBuilded, cursor, notifications, historial) {
		super();
		this.cursor = cursor;
		this.main = main;
		this.resultBuild = resultBuild;
		this.propositionBuilded = propositionBuilded;
		this.notifications = notifications;
		this.historial = historial;
		this.data = {
			once: false,
			capture: false
		}
	}
	Reactive (Ev) {
		if (Ev.target.matches("div#notifications svg") || Ev.target.matches("div#notifications svg path")) 
			this.#closeWindow();
		
		else if (Ev.target.matches("button#historial-button.desp"))
			this.#closeHistorial(Ev.target);
		
		else if (Ev.target.matches("div#historial-interface li.element")) {
			let { index } = Ev.target.dataset;

			const results = JSON.parse(localStorage.getItem("@Results")),
				target = document.querySelector("button#historial-button.desp"),
				EL = {
					value: (results[index] == "F")? false : true,
					type: "Variable_Proposicional",
					codeHTML: results[index]
				}
				
			this.writeElement(EL);
			
			this.#closeHistorial(target);
		}
		else if (Ev.target.matches("li.element button.delElementActual")) {
			let index = Number.parseInt(Ev.target.parentElement.dataset.index);

			const historial = JSON.parse(localStorage.getItem("@Historial")),
			results = JSON.parse(localStorage.getItem("@Results")),
			target = document.querySelector("button#historial-button.desp");

			let newResults = results.filter((el, indexElement)=> indexElement !== index);
			
			let newHistorial = historial.filter((el, indexElement)=> indexElement !== index);
			
			localStorage.setItem("@Historial", JSON.stringify(newHistorial));
			localStorage.setItem("@Results", JSON.stringify(newResults));

			this.viewHistorial(target);
		}

		else if (Ev.target.matches("svg.exitOfSupportNow") || Ev.target.matches("svg.exitOfSupportNow path"))
			this.#hideHelp();
		
		else if (Ev.target.matches("ol#list-options-H li.support-option")) {
			let selected = Ev.target.matches("li.support-option.selected");

			const oldTarget =  document.querySelector("li.support-option.selected");
			
			let { doc } = Ev.target.dataset,
			realContent = document.querySelector("article#SA-internal div.real-content"),
			theTitle = document.querySelector("article#SA-internal div.title-option");

			if(!selected) {
				oldTarget.classList.remove("selected")

				this.#selectSupportOption(Ev.target, doc, {
				realContent,
				theTitle
				});
			}
			else {} // Ya fué seleccionado.
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
	updateResultBuild () {
		let codeHTML = [];

		this.#Proposition
		.forEach(element=>
			 codeHTML.push(element.codeHTML));

		this.resultBuild.innerHTML = codeHTML.reverse().join("");
	}
	ResetCalculator () {
		navigator.vibrate([50]);
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

		this.propositionBuilded.textContent = "F";
	}
	#evaluateProposition () {
		let stringValue = [];
		
		let textVisible = "";
		function setImplication (started, position) {
			let newMatriz = [];
			newMatriz[position] = "||";
				let index = position;
				let parentesisClosed = false;
				let [ layer1, layer2 ] = [0, 0];
				while (index >= 1) {
					index--;
					if (stringValue[index-2] == ")") {
						parentesisClosed = true;
						layer2++;
					}
					else if (stringValue[index-1] == "(") {
						parentesisClosed = false;
						layer1++;
					}
					else 0;

					if(started) {
						newMatriz[index] = ")";
						started = false;
					}
					else if ((/(\()|(\=\=)/).test(stringValue[index-2]) && (!parentesisClosed && layer1 == layer2)) {
						started = true;
						let index2 = index-2;
						newMatriz[index] = "(";
						index--;
						newMatriz[index] = "!";
						for (; index2 >= 0; index2--) {
							index--;
							if (started) {
								started = false;
								newMatriz[index] = stringValue[index2];
							}
							else 
								newMatriz[index] = stringValue[index2];
						}
						break;
					}
					else if (index-2 === 0) {
						newMatriz[index] = stringValue[index-2];
						index--;
						newMatriz[index] = "(";
						index--;
						newMatriz[index] = "!";
					}
					else
						newMatriz[index] = stringValue[index-2];
				}
				stringValue = newMatriz;
				return true;
		}
		let position = 0;
		let offset = 0;
		let parentesisLst = false;
		let repeat = 0;
		for (;;) {
			let { value, type, codeHTML } = this.#axioma[position];
			textVisible += codeHTML;
			if(/Parentesis_.*/.test(type)) stringValue[position+offset] = codeHTML;
			else if (/Conectiva_Logica-Negacion/.test(type)) stringValue[position+offset] = "!";
			else if (codeHTML == "\u2227") stringValue[position+offset] = "&&";
			else if(codeHTML == "\u2228") stringValue[position+offset] = "||";
			else if (codeHTML == "\u2192")  {
				// ------------------ Face actual de la variable stringValue -----------------------
				offset+= 3;
				setImplication(true, position+offset);
				// ------------------ Face de la variable stringValue conmutada -------------------
			}
			else stringValue[position+offset] = value;

			if (parentesisLst && (position == this.#axioma.length - 1)) {
				let count = 1;
				do {
				stringValue[position+offset+count] = ")";
				count++;
				} while (count <= repeat);
				parentesisLst = false;
			}
			else 0;

			position++;
			if(position >= this.#axioma.length) break;
			else position;
		}
		stringValue = stringValue.join("");
		
		this.propositionBuilded.textContent = textVisible;

		if ( window.eval(stringValue) ) {
			this.#cursorPosition = 0;
			this.#Proposition = [
				{ // Cursor Parpadiante, Result (V || F), Variable Proposional, Conectiva Lógica o Parentesis
					value: null,
					type: 'Cursor',
					codeHTML: `<i id="cursor"></i>`
				},
				{ // Cursor Parpadiante, Result (V || F), Variable Proposional, Conectiva Lógica o Parentesis
					value: true,
					type: 'Variable_Proposicional',
					codeHTML: "V"
				}
			];
			this.updateResultBuild();
		} else {
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
			this.updateResultBuild();
		}
		let historial = [],
		results = [];

		let oldH = localStorage.getItem("@Historial");

		if (oldH !== null) {
			historial = JSON.parse(oldH);
			results = JSON.parse(localStorage.getItem("@Results"));
		}

		else {}
		
		if (historial.length >= 25) 
		historial.shift();

		else {}

		historial.push(this.#axioma);
		results.push(window.eval(stringValue)? "V" : "F");

		localStorage.setItem("@Historial", JSON.stringify(historial));
		localStorage.setItem("@Results", JSON.stringify(results));
	}
	viewHistorial (target) {
		let historial = [],
			results = [];

		const $ul = document.createElement("ul"),
		$oldUl = document.getElementById("list-item");

		$ul.id = "list-item";

		let oldH = localStorage.getItem("@Historial");

		if (oldH !== null) {
			historial = JSON.parse(oldH);
			results = JSON.parse(localStorage.getItem("@Results"));
		}

		else {}
		
		if(historial.length >= 1) {
			const $fragment = document.createDocumentFragment();
			
			let $liCount = document.createElement("li");
			$liCount.textContent = `Hay ${historial.length} elemento(s):`;
			$liCount.setAttribute("class", "void");
			
			// Para mostrar cuantos elementos hay: .
			$fragment.appendChild($liCount);

			historial.forEach((el, index, thisArg)=> {
				let $li = document.createElement("li");
				$li.setAttribute("data-index", `${index}`);
				$li.setAttribute("class", `element`);

				let textHTML = "";
					for (const { codeHTML } of el) {
						if (textHTML.length >= 14) {
							textHTML += "...";
							break;
						}
						else 
							textHTML += codeHTML;
					}
				
				$li.innerHTML = (textHTML + " ≡ ") + (results[index] + "<button class='delElementActual'>eliminar</button>");

				$fragment.appendChild($li);
			});
			// Para mostrar la collección de datos del historial de cálculo
			$ul.appendChild($fragment);
		}
		else {
			let $li = document.createElement("li");
			$li.textContent = "No hay algo aquí 🧐";
			$li.setAttribute("class", "void");
			
			// Para mostrar en que no hay algo.
			$ul.appendChild($li);
		}

		this.historial.replaceChild($ul, $oldUl);
		target.textContent = "X";

		target
		.classList.add("desp");

		Start.isDisabled = true;

		this.main
		.classList.add("disabled");

		this.historial
		.classList.remove("hidden");
	}

	#closeHistorial (target) {
		target.textContent = "Historial";

		target
		.classList.remove("desp");

		Start.isDisabled = false;

		this.main
		.classList.remove("disabled");

		this.historial
		.classList.add("hidden");
	}
	async viewHelp() {
		Start.isDisabled = true;

		this.main
		.classList.add("disabled");
		const { content } = document.getElementById("S&AIID"),
		imported = document.importNode(content, true);
		
		document.body
		.appendChild(imported);

		const $article = document.body.querySelector("article#SA-internal");


		await Start.ActionAsync(0);
		
		$article.classList.remove("toTop");
	}
}