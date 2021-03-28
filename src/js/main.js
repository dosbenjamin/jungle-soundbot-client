const $form = document.querySelector('.js-form')
const $button = document.querySelector('.js-submit')

const upload = async () => {
  await fetch('https://jungle-soundbot-api.herokuapp.com', {
    method: 'POST',
    body: new FormData($form),
    mode: 'no-cors'
  })
}

$button.addEventListener('click', upload)
