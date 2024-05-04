let Wrapper = document.querySelector('.div')
let first = prompt('Ismingizni kiriting')
let p = document.createElement('p')
p.innerHTML = first
p.style.color = 'red'
Wrapper.appendChild(p)