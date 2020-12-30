
const checkbox = document.querySelector('#checkbox')
if (window.matchMedia('(prefers-color-scheme: dark)').matches){
   checkbox.setAttribute('checked',true)
}

checkbox.addEventListener('change', function(e){
  document.body.classList.toggle('is-dark-mode')

   
})
