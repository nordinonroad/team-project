const bigNewsConainer = document.querySelector('.bigNewsContainer');

bigNewsConainer.addEventListener('click', async (event) => {
  // console.log(event.target)
  if (event.target.classList.contains('trashCan')) {
    event.preventDefault();
    const delId = event.target.closest('.deleteNewsContainer').id;
    const delDiv = event.target.closest('.deleteNewsContainer');
    const response = await fetch(`/admin/newsPage/delete/${delId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.status === 200) {
      delDiv.remove();
    } else
    alert('Ошибка!');
  }
});
