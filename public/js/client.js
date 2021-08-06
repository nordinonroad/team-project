const postContainer = document.getElementById('container');

postContainer.addEventListener('click', async (event) => {
  event.preventDefault();
  const id = event.target.closest("div").id;
  console.log(id);
  const del = document.querySelector('.del')
  console.log('DELETE', del);
  const response = await fetch(`/blog/delete/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });
  console.log(response)
  if (response.status === 200) {
    del.remove();
  }
});
