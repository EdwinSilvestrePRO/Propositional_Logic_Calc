export default class Start extends Object {
    #cursorPosition = 0;
	#Proposition = [
		{ // Cursor Parpadiante, Result (V || F), Variable Proposional, Conectiva Lógica o Parentesis
			value: null,
			type: 'Cursor',
			codeHTML: `<i id="cursor"></i>`
		},
		{ // Cursor Parpadiante, Result (V || F), Variable Proposional, Conectiva Lógica o Parentesis
			value: false,
			type: 'Result',
			codeHTML: "F"
		}
	];
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
	writeDigit (digit) {
        console.log(digit);
    }
}