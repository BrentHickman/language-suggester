// User Interface Logic
function handleSubmission(event) {
  event.preventDefault();
  const answerQ01 = document.querySelector("input[name='q01']:checked").value;
  // const answerQ02 = document.querySelector("input[name='q02']:checked").value;
  // const answerQ03 = document.querySelector("input[name='q03']:checked").value;


  let javascript = document.getElementById("javascript");
  let cSharp = document.getElementById("cSharp");
  let rust = document.getElementById("rust");
  
  if("none" === answerQ01){
    javascript.removeAttribute("class");
  }
    
  else if("some" === answerQ01){
    cSharp.removeAttribute("class");
  }
  else if("alot" === answerQ01){
    rust.removeAttribute("class");
  }
}
window.addEventListener("load", function() {
  const form = document.getElementById("survey");
  form.addEventListener("submit", handleSubmission);
});