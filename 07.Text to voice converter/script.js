// we need to decare the speechSynthesis object
speech = new SpeechSynthesisUtterance();

let voices = [];
let voiceSelect = document.querySelector('select');

window.speechSynthesis.onvoiceschanged = () => {
    voices = window.speechSynthesis.getVoices();
    speech.voice = voices[0];

    voices.forEach((voice, i) => (voiceSelect.options[i] = new Option(voice.name, i)))
}

voiceSelect.addEventListener('change', () => {
    speech.voice = voices[voiceSelect.value]
})

// get the button and listen for click event
document.querySelector('button').addEventListener('click', () => {
    // get the value of textarea and put it inside text property of out speech object
    speech.text = document.querySelector('textarea').value;

    // call the speechsynthesis api of the browser and pass the speech object to it
    window.speechSynthesis.speak(speech);
    
})