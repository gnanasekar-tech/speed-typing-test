let timerEl = document.getElementById("timer");
let speedTypingTestEl = document.getElementById("speedTypingTest");
let quoteDisplayEl = document.getElementById("quoteDisplay");
let resultEl = document.getElementById("result");
let quoteInputEl = document.getElementById("quoteInput");
let submitBtnEl = document.getElementById("submitBtn");
let resetBtnEl = document.getElementById("resetBtn");
let loadingEl = document.getElementById("loading");

let count = 0;
let timerId = setInterval(function() {
    count = count + 1;
    timerEl.textContent = count + " seconds";
}, 1000);

function text() {

    let url = "https://apis.ccbp.in/random-quote";
    let options = {
        method: "GET",
    };
    loadingEl.classList.remove("d-none");
    speedTypingTestEl.classList.add("d-none");
    fetch(url, options)
        .then(function(response) {
            return response.json();
        })
        .then(function(JsonData) {

            loadingEl.classList.add("d-none");
            speedTypingTestEl.classList.remove("d-none");
            let data = JsonData.content;
            quoteDisplayEl.textContent = data;
        });

}
resetBtnEl.addEventListener("click", function() {
    text();
    count = 0;
    quoteInputEl.textContent = "";
    quoteDisplayEl.textContent = data;

});

submitBtnEl.addEventListener("click", function(event) {
    if (quoteInputEl.value === quoteDisplayEl.data) {

        resultEl.textContent = "you typed in " + count + "seconds";
        clearInterval(timerId);
    } else {
        resultEl.textContent = "Your typed incorrect sentense";
    }
});

text()
