function countWords() {
    const inputField = document.getElementById('inputField');
    const text = inputField.value.trim();
    const wordCountList = document.getElementById('wordCountList');
    const enteredText = document.getElementById('enteredText');

    if (text !== "") {
        // Display the entered text
        enteredText.innerHTML = `Entered Text: ${text}`;

        
        const wordsArray = text.split(/\s+/);  //splitting on the basis of whit spaces 
        const wordCount = wordsArray.reduce((acc, word) => {
            word = word.toLowerCase();
            acc[word] = (acc[word] || 0) + 1; //already present or not present
            return acc;
        }, {});   //acc acting as object //starting with empty obj


        // Display the word counts
        wordCountList.innerHTML = Object.entries(wordCount) // converting to array of array -- wordcount is an object 
    .map(([word, count]) => `<li>${word}: ${count}</li>`)
    .join('');

// Clear the input field
inputField.value = "";
    }
}


// const inputField = document.getElementById('inputField');
// const wordList = document.getElementById('wordList');
// const wordCount = document.getElementById('wordCount');

// let wordsArray = [];

// function addToList() {
//     const text = inputField.value.trim();

//     if (text !== "") {
//         wordsArray.push(text);
//         displayList();
//         displayWordCount();
//         inputField.value = "";
//     }
// }

// function displayList() {
//     wordList.innerHTML = '';
//     wordsArray.forEach(word => {
//         const li = document.createElement('li');
//         li.textContent = word;
//         wordList.appendChild(li);
//     });
// }

// function displayWordCount() {
//     wordCount.innerHTML = '';
//     const wordCountMap = wordsArray.reduce((acc, word) => {
//         acc[word] = (acc[word] || 0) + 1;
//         return acc;
//     }, {});

//     for (const [word, count] of Object.entries(wordCountMap)) {
//         const li = document.createElement('li');
//         li.textContent = `${word}: ${count}`;
//         wordCount.appendChild(li);
//     }
// }
