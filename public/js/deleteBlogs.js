const bigBlogsConainer = document.querySelector('.bigBlogsContainer');

bigBlogsConainer.addEventListener('click', async (event) => {
  if (event.target.classList.contains('trashCan')) {
    event.preventDefault();
    const delId = event.target.closest('.deleteContainer').id;
    const delDiv = event.target.closest('.deleteContainer');
    const response = await fetch(`/admin/blogg/delete/${delId}`, {
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
