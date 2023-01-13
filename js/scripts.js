// User Interface Logic
function handleSubmission(event) {
  event.preventDefault();
  
  const selected = document.querySelector("input[name='q01']:checked").value;
  console.log("result:",selected);
  
  let result = "";
  console.log("result:" , result);
  
  if('none' === selected)
    result = "JavaScript";

  else if('some' === selected)
    result = "C#";
  else
    result = "Swift";

  document.getElementById("output").innerHTML = result;
}

window.addEventListener("load", function() {
  const form = document.getElementById("survey");
  form.addEventListener("submit", handleSubmission);
});