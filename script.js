"use strict"

const testText = [
    "She sat deep in thought. The next word that came out o her mouth would likely be the most important word of her life. It had to be exact with no possibility of being misinterpreted. She was ready. She looked deeply into his eyes and said, \"Octopus.\"",
    "The coin hovered in the air, spinning over and over again. It reached its peak and began to descend. Both boys were pleading with it to land a certain way but the coin had already made up its mind on what it was going to do.",
    "Sometimes there isn't a good answer. No matter how you try to rationalize the outcome, it doesn't make sense. And instead of an answer, you are simply left with a question. Why?",
    "The towels had been hanging from the rod for years. They were stained and worn, and quite frankly, just plain ugly. Debra didn't want to touch them but she really didn't have a choice. It was important for her to see what was living within them.",
    "It was going to rain. The weather forecast didn't say that, but the steel plate in his hip did. He had learned over the years to trust his hip over the weatherman. It was going to rain, so he better get outside and prepare.",
    "It wasn't quite yet time to panic. There was still time to salvage the situation. At least that is what she was telling himself. The reality was that it was time to panic and there wasn't time to salvage the situation, but he continued to delude himself into believing there was.",
    "Betty was a creature of habit and she thought she liked it that way. That was until Dave showed up in her life. She now had a choice to make and it would determine whether her lie remained the same or if it would change forever.",
    "Things aren't going well at all with mom today. She is just a limp noodle and wants to sleep all the time. I sure hope that things get better soon."
];

const textArea = document.getElementById("text");
const testMsg = document.getElementById("test");
const btn = document.getElementById("btn");

let startTime, endTime;

const playGame = () => {
    let randomText = Math.floor(Math.random() * testText.length);
    testMsg.innerText = testText[randomText];
    let date = new Date;
    startTime = date.getTime();
    btn.innerText = "Done";
}

const wordCounter = (str) => {
    let typedText = str.split(" ").length;
    return typedText;
}

const errorCounter = (compText, yourText) => {
    let compWords = compText.split(" ");
    let yourWords = yourText.split(" ");
    let matchWords = 0;

    compWords.forEach((word, index) => {
        if (word === yourWords[index]) {
            matchWords++;
        }
    });

    let errorWords = (compWords.length - matchWords);
    let accuracy = ((matchWords / compWords.length) * 100).toFixed(2);
    return (`${accuracy}% and typos = ${errorWords}`)
}

const showResult = () => {
    let date = new Date;
    endTime = date.getTime();
    let totalTime = ((endTime - startTime) / 1000);
    let totalTyped = textArea.value;
    let wordCount = wordCounter(totalTyped);
    let typeSpeed = Math.round((wordCount / totalTime) * 60);
    let totalError = errorCounter(testMsg.innerText, totalTyped);
    let result = `TEST COMPLETE!!<br>you were typing for ${totalTime} seconds.<br> Your speed was ${typeSpeed} WPM<br> ${totalError}`;
    testMsg.innerHTML = result;
}

btn.addEventListener("click", () => {
    if (btn.innerText == "Start") {
        textArea.disabled = false;
        playGame();
    } else if (btn.innerText == "Done") {
        textArea.disabled = true;
        showResult();
        btn.innerText = "Start";
    }
});