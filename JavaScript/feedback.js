import { FeedbackEnum } from "./feedbackEnum.js";
export class Feedback {
    checkGuess(guess, secretWord) {
        if (guess.length !== 5) {
            return null;
        }
        let letterFeedback = new Array(secretWord.length);
        for (let i = 0; i < secretWord.length; i++) {
            if (guess[i] == secretWord[i])
                letterFeedback[i] = FeedbackEnum.Correct;
            else if (secretWord.includes(guess[i]))
                letterFeedback[i] = FeedbackEnum.Place;
            else
                letterFeedback[i] = FeedbackEnum.Incorrect;
        }
        return letterFeedback;
    }
}
//# sourceMappingURL=feedback.js.map