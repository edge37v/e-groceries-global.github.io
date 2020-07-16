var form = document.querySelector("#formClass");
let button = document.querySelector("#btnClass");
button.addEventListener("click", event =>{
  if(form.style.visibility === "hidden"){
    form.style.visibility = "visible";
  }else{
    form.style.visibility = "hidden";
  }
})