const panels = document.querySelectorAll('.panel');

let last_active = panels[0];

panels.forEach(panel => {
  panel.addEventListener("click", () => {
    last_active.classList.remove('active')
    panel.classList.add('active')
    last_active = panel;
  })
})