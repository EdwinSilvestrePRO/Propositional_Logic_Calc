javascript:
'use strict';
import Start from "./internal.js";

class ProposionalCalculator extends Start {
	static isDisabled = false;
	static Main () {
		const $operations = document.getElementById("operations"),
		$resultBuild = $operations.querySelector("h1.result-build"),
		$propositionBuilded = $operations.querySelector("h2.proposition-builded"),
		$cursor = $operations.querySelector("i#cursor");

		const PCM = new ProposionalCalculator($resultBuild, $propositionBuilded, $cursor);
		document
		.addEventListener("click", Ev=> PCM.eventHandler(Ev));
	}
	eventHandler (Ev) {
		if (Ev.target.matches("button#digit")) {
			const EL = {
				value: (Ev.target.value == "false")? false : true,
				type: Ev.target.dataset.type,
				codeHTML: Ev.target.textContent
			}
			this.writeElement(EL);
		}
		else if (Ev.target.matches("button#symbol") || Ev.target.matches("button#parentesis")) {
			const EL = {
				value: null,
				type: Ev.target.dataset.type,
				codeHTML: Ev.target.textContent
			}
			this.writeElement(EL);
		}
	}	
}


ProposionalCalculator.Main();
