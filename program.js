javascript:
'use strict';
import Start from "./internal.js";

class ProposionalCalculator extends Start {
	static Main () {
		const $operations = document.getElementById("operations"),
		$resultBuild = $operations.querySelector("h1.result-build"),
		$propositionBuilded = $operations.querySelector("h2.proposition-builded"),
		$cursor = $operations.querySelector("i#cursor"),
		$notifications = document.getElementById("notifications");

		const PCM = new ProposionalCalculator($resultBuild, $propositionBuilded, $cursor, $notifications);

		document
		.addEventListener("click", Ev=>
		(Start.isDisabled == false)? PCM.eventClickHandler(Ev) : PCM.Reactive(Ev));

		document
		.addEventListener("keydown", Ev=> 
		(Start.isDisabled == false)? PCM.eventKeyboardHandler(Ev) : Ev);
	}
	eventClickHandler (Ev) {
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
		else if (Ev.target.matches("button#del-element") || Ev.target.closest("button#del-element"))
		this.deleteElement();

		else if (Ev.target.matches("button#changePositionCursor")) 
		this.moveCursor(Ev.target.value);
		
		else if (Ev.target.matches("button#reset"))
		this.ResetCalculator();
		else if (Ev.target.matches("button#equal")) {
			this
			.updateAxioma()
			.searchError();
		}
	}
	isVariable (key) {
		const keys = [
			{ // Cursor Parpadiante, Result (V || F), Variable Proposional, Conectiva Lógica o Parentesis
				value: false,
				type: 'Variable_Proposicional',
				codeHTML: "s"
			},
			{ // Cursor Parpadiante, Result (V || F), Variable Proposional, Conectiva Lógica o Parentesis
				value: false,
				type: 'Variable_Proposicional',
				codeHTML: "t"
			},
			{ // Cursor Parpadiante, Result (V || F), Variable Proposional, Conectiva Lógica o Parentesis
				value: false,
				type: 'Variable_Proposicional',
				codeHTML: "x"
			},
			{ // Cursor Parpadiante, Result (V || F), Variable Proposional, Conectiva Lógica o Parentesis
				value: true,
				type: 'Variable_Proposicional',
				codeHTML: "p"
			},
			{ // Cursor Parpadiante, Result (V || F), Variable Proposional, Conectiva Lógica o Parentesis
				value: true,
				type: 'Variable_Proposicional',
				codeHTML: "q"
			},
			{ // Cursor Parpadiante, Result (V || F), Variable Proposional, Conectiva Lógica o Parentesis
				value: true,
				type: 'Variable_Proposicional',
				codeHTML: "r"
			}

		];
		for (const actualData of keys) {
			if(key == actualData.codeHTML)
				return actualData;
		}
		return false;
	}
	eventKeyboardHandler (Ev) {
		if(Ev.keyCode == 39 || Ev.code == "ArrowRight")
		this.moveCursor("left");

		else if (Ev.keyCode == 37 || Ev.code == "ArrowLeft")
		this.moveCursor("right");

		else if (Ev.keyCode == 8 || Ev.code == "Backspace")
		this.deleteElement();

		else {
			const Variable = this.isVariable(Ev.key);
			if(Variable) 
			this.writeElement(Variable);
		}
	}
}


ProposionalCalculator.Main();
