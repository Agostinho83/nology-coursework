import { alphabet, morse } from './database.js';

class Translator {
    constructor(alphabet, morse) {
        this.alphabet = alphabet;
        this.morse = morse;
        this.message = '';
        this.translatedMessage = '';
    }

    translateMorse(message) {
        console.log(message);
        let inputText = message.toLowerCase();
        if (inputText.length === 0) {
            return 'Write the word to be translated';
        } else {
            return inputText
                .split('')
                .map((letter) => alphabet[letter])
                .join('');
        }
    }
    translateEnglish(message) {
        let inputText = message;
        if (inputText.length === 0) {
            return 'Write the word to be translated'
        } else {
            return inputText
                .split('')
                .map((letter) => morse[letter])
                .join('')
        }
    }

}

export default Translator;