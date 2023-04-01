'use strict';

class ProposionalCalculator extends Object {
	static isDisabled = false;

	#Proposition = [
		{ // Result (V || F), Variable Proposional, Conectiva Lógica, Parentesis
			value: false,
			type: 'Result',
			textVisible: "F"
		}
	];
	#cursorPosition = 0;
	getProposition () {
		return this.#Proposition;
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
	static Main () {
		const $operations = document.getElementById("operations"),
		$resultBuild = $operations.querySelector("h1.result-build"),
		$propositionBuilded = $operations.querySelector("h2.proposition-builded"),
		$cursor = $operations.querySelector("i#cursor");

		const PCM = new ProposionalCalculator($resultBuild, $propositionBuilded, $cursor);
		document.addEventListener("click", (Ev)=> {
			if(ProposionalCalculator.isDisabled) return null;
			else {
				if(Ev.target.matches("button#digit")) {
					const VP = {
						value: (Ev.target.value == "true")? true : false,
						type: Ev.target.dataset.type,
						textVisible: Ev.target.textContent
					}
					const oldProposition = [];
					PCM.getProposition().forEach(el=> oldProposition.push(el));
					PCM.writeVP(VP, oldProposition);
					console.log(PCM.getProposition());
				}
			}
		}, PCM.data);
	}
	writeVP (vp, oldProposition) {

		if(this.#Proposition.length == 1) {
			this.#Proposition.pop();
			this.#Proposition.push(vp);
		}
		let lngr = this.#Proposition.length+1;
		let simulateArr = [];
		simulateArr = simulateArr.reverse();
		let quit = 0;
		for (let index = 0; index < lngr; index++) {
			if (this.#cursorPosition == (lngr-1)) {
				if(index == (lngr-1)) 
					simulateArr[index] = this.cursor.outerHTML;
				else {
					simulateArr[index] = oldProposition[index].textVisible;
					this.#Proposition = oldProposition;
				}
			}
			else {
				if(index == this.#cursorPosition) {
					simulateArr[index] = this.cursor.outerHTML;
					quit = 1;
				}
				else simulateArr[index] = this.#Proposition[index - quit].textVisible;
			}
		}
		this.resultBuild.innerHTML = simulateArr.reverse().join("");
	}
}


ProposionalCalculator.Main();
