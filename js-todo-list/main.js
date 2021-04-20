document.addEventListener('DOMContentLoaded', function() {
  document.querySelector('ul').addEventListener('click', function(e){
    e.target.classList.toggle('checked')
  })
  const closeArr = document.querySelectorAll('span')
  closeArr.forEach(function(e){
    e.addEventListener('click', function(e){
      e.target.parentElement.remove()
    }) 
  })
})
