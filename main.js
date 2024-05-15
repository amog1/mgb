// Magic 8 ball
// event listner
document.getElementById("ball").addEventListener("click", reply);

// html variables
let question = +document.getElementById("search");
let results = document.getElementById("answer");
let random = Math.random();

// event function
function reply() {
  // que and awr
  if (question == "") {
    results.innerHTML = "Please ask a question..";
  } else if (question == "Does a magic ball actually work?") {
    results.innerHTML = "How dare you doubt me!";
  } else if (question == "Is javaScript awesome?") {
    results.innerHTML = "Of course!";
  }
  //
  if (random <= 0.2) {
    results.innerHTML = "Without a Doubt";
  } else if (random <= 0.4) {
    results.innerHTML = "As I see it, yes";
  } else if (random <= 0.6) {
    results.innerHTML = "Concentrate and ask again";
  } else if (random <= 0.8) {
    results.innerHTML = "Don't count on it";
  } else {
    results.innerHTML = "Outlook not so good";
  }
}

// event listner
document.getElementById("reload").addEventListener("click", refresh);

// function
function refresh() {
  location.reload();
}
