const icons = document.querySelectorAll(".faq-toggle");
icons.forEach(icon => {
  icon.addEventListener("click", ()=>{
    icon.parentElement.classList.toggle("active")
  })
})