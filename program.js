javascript:
'use strict';
import Start from "./internal.js";

class ProposionalCalculator extends Start {
	access () {
		const $template = document.getElementById("@condition").content;
		
		let nodeActual = document.importNode($template, true);

		document.body.appendChild(nodeActual);
		
		const $section = document.body
		.querySelector("section#terminnos");

		setTimeout(()=> $section.classList.remove("notVisible"), 1500);
		
		document.oninput = Ev => {
			if (Ev.target.matches("input#tach")) {
				let $button = $section.querySelector("button#iam-action");
				if(Ev.target.checked) 
					$button.disabled = false;
				else
					$button.disabled = true;
			}
		}
	}
	static Main () {
		document.getElementById("icon")
		?.setAttribute("href", Start.icon);

		const $operations = document.getElementById("operations"),
		$main = $operations.parentElement,
		$resultBuild = $operations.querySelector("h1.result-build"),
		$propositionBuilded = $operations.querySelector("h2.proposition-builded"),
		$cursor = $operations.querySelector("i#cursor"),
		$notifications = document.getElementById("notifications"),
		$historial = document.getElementById("historial");

		const PCM = new ProposionalCalculator(
			$main,
			$resultBuild,
			$propositionBuilded,
			$cursor,
			$notifications,
			$historial
		);

		document
		.addEventListener("click", Ev=>{
			if (Start.STARTED == null) {
				if (Ev.target.matches("button#iam-action")) {
					document.oninput = null;
					const $section = document.body
					.querySelector("section#terminnos");

					setTimeout(()=> {
						$section.classList.remove("notVisible");
						document.body.removeChild($section);

						localStorage.setItem("@std", "Acepto");

						Start.STARTED = localStorage.getItem("@std");
						
						return Start.isDisabled = false;
					}, 500);
				}
				else
					return Start.isDisabled = true;
			}
			
			else
				(Start.isDisabled == false)?
				PCM.eventClickHandler(Ev)
				:
				PCM.Reactive(Ev);
		});

		document
		.addEventListener("keydown", Ev=> {
			if (Start.STARTED == null) 
				return Start.isDisabled = true;
			
			else
				(Start.isDisabled == false)? 
				PCM.eventKeyboardHandler(Ev) : null;
				
		});
		
		if (Start.STARTED == null)
		PCM.access();

		else 
			Start.isDisabled == false; // El usuario ya aceptó los terminos y condiciones.
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
			navigator.vibrate([50]);
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
			navigator.vibrate([50]);
		}

		else if (Ev.target.matches("button#historial"))
			this.viewHistorial(Ev.target);

		else if (Ev.target.matches("button#help"))
			this.viewHelp();
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

addEventListener("DOMContentLoaded", ProposionalCalculator.Main);