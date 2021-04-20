document.addEventListener('DOMContentLoaded', function() {
  document.querySelector('ul').addEventListener('click', function(e){
    e.target.classList.toggle('checked')
  })
  const closeArr = document.querySelectorAll('.close')
  closeArr.forEach(function(e){
    e.addEventListener('click', function(e){
      e.target.parentElement.remove()
    }) 
  })
  document.querySelector('#addBtn').addEventListener('click', function(){
    let input = document.querySelector('#input').value
    const newLi = document.createElement('li')
    newLi.textContent = input
    const newSpan = document.createElement('span')
    // console.log(newSpan)
    newSpan.classList.add('close')
    newSpan.innerHTML = 'x'
    newLi.appendChild(newSpan)
    document.querySelector('ul').appendChild(newLi)
    newSpan.addEventListener('click', function(){
      newSpan.parentElement.remove()
    })
  })
})

