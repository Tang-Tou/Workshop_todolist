document.addEventListener('DOMContentLoaded', function() {
  document.querySelector('ul').addEventListener('click', function(e){
    // debugger
    e.target.classList.toggle('checked')
  })
})
