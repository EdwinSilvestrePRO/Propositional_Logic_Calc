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
			const VP = {
				value: (Ev.target.value == "false")? false : true,
				type: Ev.target.dataset.type,
				codeHTML: Ev.target.textContent
			}
			this.writeDigit(VP);
		}
	}	
}


ProposionalCalculator.Main();
