// User Interface Logic
function handleSubmission(event) {
  event.preventDefault();
  const selected = document.querySelector("input[name='q01']:checked").value;
  let none = document.getElementById("javascript");
  let some = document.getElementById("cSharp");
  let alot = document.getElementById("rust");
  
  if("none" === selected){
    none.removeAttribute("class");
  }
    
  else if("some" === selected){
    some.removeAttribute("class");
  }
  else if("alot" === selected){
    alot.removeAttribute("class");
  }
}
window.addEventListener("load", function() {
  const form = document.getElementById("survey");
  form.addEventListener("submit", handleSubmission);
});