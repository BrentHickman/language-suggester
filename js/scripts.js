// User Interface Logic
function handleSubmission(event) {
  event.preventDefault();
  const answerQ01 = document.querySelector("input[name='q01']:checked").value;
  const answerQ02 = document.querySelector("input[name='q02']:checked").value;
  const answerQ03 = document.querySelector("input[name='q03']:checked").value;

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

  if(answerQ01 === "none" && answerQ02 === ("app" || "game") && answerQ03 === ("days" || "weeks")){
    javascript.removeAttribute("class");
  }
    
  else if("some" === answerQ01){
    python.removeAttribute("class");
  }

  else if("some" === answerQ01){
    cSharp.removeAttribute("class");
  }

  else if("some" === answerQ01){
    ruby.removeAttribute("class");
  }
  
  else if("some" === answerQ01){
    swift.removeAttribute("class");
  }
  
  else if("alot" === answerQ01){
    rust.removeAttribute("class");
  }

  // else {
  //   error.removeAttribute("class");
  //
  
}
window.addEventListener("load", function() {
  const form = document.getElementById("survey");
  form.addEventListener("submit", handleSubmission);
});