const $form = document.querySelector('.js-form')
const $inputs = document.querySelectorAll('.js-input')
const $upload = document.querySelector('.js-upload')
const $uploadText = document.querySelector('.js-upload-text')
const $file = document.querySelector('.js-file')
const $button = document.querySelector('.js-submit')

const upload = async () => {
  try {
    await fetch('https://jungle-soundbot-api.herokuapp.com', {
      method: 'POST',
      body: new FormData($form),
      mode: 'no-cors'
    })
    $form.reset()
  } catch (error) { return }
}

const toggleButtonState = () => {
  const isValid = $form.checkValidity()

  isValid
    ? $button.classList.remove('is-disabled')
    : $button.classList.add('is-disabled')

  return isValid ? false : true
}

const addFile = () => {
  $button.disabled = toggleButtonState()
  $file.value && $upload.classList.add('is-completed')
}

const checkCompletion = ({ target: $input }) => {
  $button.disabled = toggleButtonState()

  $input.value.length > 0
    ? $input.classList.add('is-completed')
    : $input.classList.remove('is-completed')
}

$inputs.forEach($input => {
  $input.addEventListener('input', checkCompletion)
})

$button.addEventListener('click', upload)
$upload.addEventListener('click', () => $file.click())
$file.addEventListener('change', addFile)
