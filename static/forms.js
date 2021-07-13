const registerForm = document.getElementById('first')
const regEmail = document.getElementById('regEmail')
const regPass = document.getElementById('regPass')
const logEmail = document.getElementById('logEmail')
const logPass = document.getElementById('logPass')
const loginForm = document.getElementById('second')

registerForm.addEventListener('submit', (e) => {
  e.preventDefault()
  fetch('/api/auth/register', {
    method: 'POST',
    headers: { 'Content-type': 'application/json' },
    body: JSON.stringify({
      email: regEmail.value,
      password: regPass.value,
    }),
  })
    .then((res) => res.json())
    .then((data) => console.log(data))
})

loginForm.addEventListener('submit', (e) => {
  e.preventDefault()
  fetch('/api/auth/login', {
    method: 'POST',
    headers: { 'Content-type': 'application/json' },
    body: JSON.stringify({
      email: logEmail.value,
      password: logPass.value,
    }),
  })
    .then((res) => res.json())
    .then((data) => console.log(data))
})
