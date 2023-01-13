// User Interface Logic
function handleSubmission(event) {
  event.preventDefault();
  const answerQ01 = document.querySelector("input[name='q01']:checked").value;
  const answerQ02 = document.querySelector("input[name='q02']:checked").value;
  const answerQ03 = document.querySelector("input[name='q03']:checked").value;
  const answerQ04 = document.querySelector("input[name='q04']:checked").value;

  if (answerQ01 === "null" || answerQ02 === "null"  || answerQ03 === "null" || answerQ04 === "null"){
  error.removeAttribute("class");
  }
  

  let javascript = document.getElementById("javascript");
  let python = document.getElementById("python");
  let cSharp = document.getElementById("cSharp");
  let ruby = document.getElementById("ruby");
  let swift = document.getElementById("swift");
  let rust = document.getElementById("rust");
  let error = document.getElementById("error");
  
  // if(!answerQ01 || !answerQ02 || !answerQ03){
  //   document.getElementById("error").removeAttribute("class");
  // }

  if(answerQ01 === "none" && answerQ02 === "app" || "game" && answerQ03 === "weeks"){
    javascript.removeAttribute("class");
  }
    
  else if(answerQ01 ==="none" && answerQ02 === "data" && answerQ03 === "weeks"){
    python.removeAttribute("class");
  }

  else if(answerQ01="some" && answerQ02 === "game" || "app"){
    cSharp.removeAttribute("class");
  }

  else if("alot" === answerQ01 && answerQ02 === "app" || "game"){
    ruby.removeAttribute("class");
  }
  
  else if("some" === answerQ01 && answerQ02 === "app"){
    swift.removeAttribute("class");
  }
  
  else if(answerQ02 === "data" && answerQ03 === "months"){
    rust.removeAttribute("class");
  }


}
window.addEventListener("load", function() {
  const form = document.getElementById("survey");
  form.addEventListener("submit", handleSubmission);
});
