const steps = Array.from(document.querySelectorAll('form .step'));
const prevBtn = document.querySelectorAll('form .prev-btn')
const nextBtn = document.querySelectorAll('form .next-btn')

const form = document.querySelector('form')




nextBtn.forEach(button => {
   button.addEventListener('click', () => {
     changeStep('next')   
})
});
// prevBtn
prevBtn.forEach(button => {
   button.addEventListener('click', () => {
     changeStep('prev')   
})
});


// changeStep

function changeStep(btn) {
   const active = document.querySelector('.active');
     let index = steps.findIndex(step => step === active)

   if (index >= 0) {

      steps[index].classList.remove('active')
      if (btn === 'next') {
         index ++
      } else if (btn === 'prev') {
          index --
      }
      if (index > 0 && index < steps.length) {
        steps[index].classList.add('active')
         
      }
  }
    
}


form.addEventListener('submit', (e) => {
   
   e.preventDefault()
   const name = document.querySelector('input[name="name"]').value
   const email = document.querySelector('input[name="email"]').value
   const phone = document.querySelector('input[name="phone"]').value
   if (name === '' || email === '' || phone === '') {
        alert('fil the form plz')
   } else {
      alert(`Hello Wellocome ${name}`)
     }
})