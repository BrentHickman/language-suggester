// Business Logic
let survey = document.querySelector("#survey");

function handleSubmission(event) {
  event.preventDefault();
  const answerQ01 = document.querySelector("input[name='q01']:checked").value;
  const answerQ02 = document.querySelector("input[name='q02']:checked").value;
  const answerQ03 = document.querySelector("input[name='q03']:checked").value;
  const answerQ04 = document.querySelector("input[name='q04']:checked").value;

  let javascript = document.getElementById("javascript");
  let python = document.getElementById("python");
  let cSharp = document.getElementById("cSharp");
  let ruby = document.getElementById("ruby");
  let swift = document.getElementById("swift");
  let rust = document.getElementById("rust");
  let error = document.getElementById("error");

  if(answerQ01 === "none" && answerQ02 === "app" || answerQ01 === "none" && answerQ02 === "game"){
    javascript.removeAttribute("class");
  } 
  else if(answerQ01 === "none" && answerQ02 === "data"){
    python.removeAttribute("class");
  }
  else if(answerQ01 === "some" && answerQ02 === "game" || answerQ01 ==="some" && answerQ02 ==="app"){
    cSharp.removeAttribute("class");
  }
  else if(answerQ01=== "alot" && answerQ02 === "game"){
    ruby.removeAttribute("class");
  }
  else if("alot" === answerQ01 && answerQ02 === "app"){
    swift.removeAttribute("class");
  }
  else if(answerQ01 !== "none" && answerQ02 === "data"){
    rust.removeAttribute("class");
  }
  else {
    error.removeAttribute("class");
  }
  const form = document.getElementById("survey");
  form.addEventListener("submit", resetAfterSubmit);
};

// User Interface Logic
window.addEventListener("load", function() {
  const form = document.getElementById("survey");
  form.addEventListener("submit", handleSubmission);
});

///reset results after submit
function resetAfterSubmit(event) {
  event.preventDefault();
  document.getElementById("javascript").classList.add("hidden");
  document.getElementById("python").classList.add("hidden");
  document.getElementById("cSharp").classList.add("hidden");
  document.getElementById("ruby").classList.add("hidden");
  document.getElementById("swift").classList.add("hidden");
  document.getElementById("rust").classList.add("hidden");
  document.getElementById("error").classList.add("hidden");
  return handleSubmission(event);
};
