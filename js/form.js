///////// FORM //////////
const scriptURL = 'https://script.google.com/macros/s/AKfycbwnQI_B4u_MqoTCqH5TAhvt1q7U4O-Mt_rypaEdfVy6zUtl0ZOXFE4NTRWDcf_W2A0BSg/exec'
  const form = document.forms['submit-to-google-sheet']
  const msg = document.getElementById('msg')

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        msg.innerHTML = 'Message sent successfully'
        setTimeout(function(){
            msg.innerHTML = ''
        }, 5000)
        form.reset()
      })
      .catch(error => console.error('Error!', error.message))
  })
