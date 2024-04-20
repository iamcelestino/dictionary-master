const getWordForm = document.querySelector('.getword');
const input = document.querySelector('#searchWord');

const getMeaning = async(word) => {
    const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    try {
        const response = await fetch(url);
        const data = await response.json();
        updateUi(data);
    } catch (error) {
        console.log(error);
    }
}

const updateUi = (data) => {
    console.log(data[0]);
}

const getWord = (event) => {
    event.preventDefault();
    const word = input.value;
    getMeaning(word);
}

getWordForm.addEventListener('submit', getWord);