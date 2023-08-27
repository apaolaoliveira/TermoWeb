import { SecretWord } from "./secretWord.js";
import { Feedback } from "./feedback.js";
import { FeedbackEnum } from "./feedbackEnum.js";
export class TermoScreen {
    get currentRow() {
        return this.rows[this.attempt];
    }
    constructor() {
        this.rows = [];
        this.attempt = 0;
        this.selectedColumnIndex = -1;
        this.secretWord = new SecretWord();
        this.feedback = new Feedback();
        this.keyboard = document.getElementById("keyboard");
        this.btnReset = document.getElementById("btnReset");
        this.btnBackspace = document.getElementById("btnBackspace");
        this.btnEnter = document.getElementById("btnEnter");
        this.message = document.getElementById("message");
        document.querySelectorAll(".row").forEach(div => {
            this.rows.push(div);
        });
        this.setEventListeners();
    }
    reset() {
        if (this.btnReset.classList.contains('disabled'))
            return;
        this.secretWord = new SecretWord();
        this.feedback = new Feedback();
        for (const row of this.rows) {
            for (const letter of row.children) {
                letter.textContent = '';
                letter.classList.remove("correct");
                letter.classList.remove("place");
                letter.classList.remove("incorrect");
            }
        }
        for (const btn of this.keyboard.children) {
            if (btn.getAttribute('data-key') === "reset") {
                this.btnReset.classList.add("disabled");
                continue;
            }
            btn.classList.remove("disabled");
        }
        this.selectedColumnIndex = -1;
        this.attempt = 0;
        this.message.hidden = true;
    }
    backspace() {
        if (this.selectedColumnIndex >= 0) {
            const column = this.currentRow.children[this.selectedColumnIndex];
            if (column) {
                column.textContent = "";
                this.selectedColumnIndex--;
            }
        }
    }
    setEventListeners() {
        for (const btn of this.keyboard.children) {
            btn.classList.remove("disabled");
            if (btn.getAttribute('data-key') === "reset") {
                btn.classList.add("disabled");
                continue;
            }
            if (btn.getAttribute('data-key') === "enter" || btn.getAttribute('data-key') === "reset" || btn.getAttribute('data-key') === "backspace")
                continue;
            btn.addEventListener("click", this.typeLetter.bind(this));
        }
        this.btnEnter.addEventListener("click", this.takeGuess.bind(this));
        this.btnReset.addEventListener("click", this.reset.bind(this));
        this.btnBackspace.addEventListener("click", this.backspace.bind(this));
    }
    typeLetter(event) {
        if (this.selectedColumnIndex > 3 || this.selectedColumnIndex < -1)
            return;
        const letter = event.target.textContent;
        this.selectedColumnIndex++;
        const column = this.currentRow.children[this.selectedColumnIndex];
        column.textContent = letter;
    }
    getWord() {
        let word = '';
        for (let column = 0; column < 5; column++) {
            word += this.currentRow.children[column].innerText;
        }
        return word;
    }
    feedbackColors(indexRow, feedback) {
        for (let columnIndex = 0; columnIndex < feedback.length; columnIndex++) {
            const selectedDiv = this.rows[indexRow].children[columnIndex];
            switch (feedback[columnIndex]) {
                case FeedbackEnum.Correct:
                    selectedDiv.classList.add("correct");
                    break;
                case FeedbackEnum.Place:
                    selectedDiv.classList.add("place");
                    break;
                case FeedbackEnum.Incorrect:
                    selectedDiv.classList.add("incorrect");
                    break;
            }
        }
    }
    takeGuess() {
        const fullGuess = this.getWord();
        this.message.hidden = true;
        let returnedMessage = this.hasErrors(fullGuess);
        if (returnedMessage.trim() !== '') {
            this.message.hidden = false;
            this.message.textContent = returnedMessage;
            return;
        }
        let getFeedback;
        getFeedback = this.feedback.checkGuess(fullGuess, this.secretWord.secretWord);
        if (getFeedback === null)
            return;
        this.feedbackColors(this.attempt, getFeedback);
        this.selectedColumnIndex = -1;
        this.attempt++;
        if (this.checkResult(fullGuess)) {
            for (const btn of this.keyboard.children) {
                if (btn.getAttribute('data-key') === "reset") {
                    this.btnReset.classList.remove("disabled");
                    continue;
                }
                btn.classList.add("disabled");
            }
        }
        console.log(this.secretWord.secretWord);
    }
    checkResult(fullGuess) {
        if (this.attempt === 6 && fullGuess !== this.secretWord.secretWord) {
            this.message.hidden = false;
            this.message.textContent = `"${this.secretWord.secretWord}"`;
            return true;
        }
        if (fullGuess === this.secretWord.secretWord) {
            this.message.hidden = false;
            this.message.textContent = `fenomenal`;
            return true;
        }
        return false;
    }
    hasErrors(guess) {
        if (guess === null || guess === undefined || guess.trim() === '') {
            return `digite uma palavra`;
        }
        if (guess.length < 5) {
            return `apenas palavras com 5 letras`;
        }
        return '';
    }
}
//# sourceMappingURL=termo.screen.js.map