const $form = document.querySelector('.js-form')
const $upload = document.querySelector('.js-upload')
const $file = document.querySelector('.js-file')
const $button = document.querySelector('.js-submit')

const upload = async () => {
  await fetch('https://jungle-soundbot-api.herokuapp.com', {
    method: 'POST',
    body: new FormData($form),
    mode: 'no-cors'
  })
}

const addFile = () => {
  $file.click()
}

$button.addEventListener('click', upload)
$upload.addEventListener('click', () => addFile)
