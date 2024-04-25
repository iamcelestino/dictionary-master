const getWordForm = document.querySelector('.getword');
const input = document.querySelector('#searchWord');
const MoreDescription = document.querySelector('.more__description');

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

const updateUi = (word) => {
    const paragraph = [];
    const definitions = [];
    const meanings = word[0].meanings[0].definitions;

    for(let i = 0; i < 3; i++) {
        const p = document.createElement('p');
        paragraph.push(p)
    }

     meanings.forEach(mean => {
        definitions.push(mean.definition);
    });

    for(let i = 0; i < paragraph.length; i++) {
        paragraph[i].textContent = definitions[i];
        document.querySelector('article').appendChild(paragraph[i]);
    }
    
    document.querySelector('.word').textContent = word[0].word;
    document.querySelector('.phonetic').textContent = word[0].phonetic;

    const html = `
    <div class="flex gap-6 mb-6">
        <h5 class="text-gray-400">Synonyms</h5>
        <p class="text-purple-800 font-bold">${word[0].meanings[0].synonyms[0]}</p>
    </div>

    <div>
        <h3 class="partOfSpeech font-bold text-2xl">${word[0].meanings[0].partOfSpeech}</h3>
        <h5 class="text-gray-400">Meaning</h5>
        <article>
            <div class="flex items-center gap-2 mt-2">
                <div class="bg-purple-800 p-1 inline-block rounded-full"></div>
                <p class="">${meanings[0].definition}</p>
            </div>
            <p class="example text-gray-400 mt-2">"${meanings[0].example}"</p>
        </article>
    </div>
    `
    MoreDescription.innerHTML = html;
}

const getWord = (event) => {
    event.preventDefault();
    const word = input.value.trim();
    getWordForm.reset();
    getMeaning(word);
}

getWordForm.addEventListener('submit', getWord);

const changeFont = (event) => {
    if (event.target.value == "Sans Serif") {
        document.body.style.fontFamily = 'Sans Serif';
    }
    else if (event.target.value == "Serif") {
        document.body.style.fontFamily = 'Serif';
    }
    else if(event.target.value == "Mono"){
        document.body.style.fontFamily = 'Courier New';
    }
}
document.querySelector('select').addEventListener('change', changeFont);

