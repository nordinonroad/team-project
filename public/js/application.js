//fetch for login error

const { adminEnteringForm } = document.forms;

if(adminEnteringForm) {
  adminEnteringForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const response = await fetch('/admin/newsblogdiv', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({login: adminEnteringForm.login.value, password: adminEnteringForm.password.value}),
  })
  const statusOfAuth = await response.text();
  console.log(statusOfAuth);
    if(statusOfAuth === 'Unauthorized') {
      const errorDiv = document.querySelector('#errorMessage');
      errorDiv.innerText = 'Данные введены некорректно';
    } else 
    window.location.replace('/admin/newsblogdiv');
})
}

