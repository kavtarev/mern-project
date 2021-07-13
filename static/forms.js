const registerForm = document.getElementById('first')
const regEmail = document.getElementById('regEmail')
const loginForm = document.getElementById('second')

registerForm.addEventListener('submit', (e) => {
  e.preventDefault()
  fetch('/api/auth/register', {
    method: 'POST',
    headers: { 'Content-type': 'application/json' },
    body: JSON.stringify({ hi: 'gg' }),
  })
    .then((res) => res.json())
    .then((data) => console.log(data))
})

loginForm.addEventListener('submit', (e) => {
  e.preventDefault()
  fetch('/api/auth/login', {
    method: 'POST',
    headers: { 'Content-type': 'application-json' },
    body: JSON.stringify({ hi: 'gg2' }),
  })
    .then((res) => res.json())
    .then((data) => console.log(data))
})
