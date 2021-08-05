const { buttonActionForm } = document.forms;
//console.log(buttonActionForm);
buttonActionForm.addEventListener('click', async (event) => {
  event.preventDefault();
  //console.log(event.target);
  const { id } = event.target.dataset;
  // console.log(id);
  const fetch1 = await fetch('/post/buttonAdminAction', {
    method: 'POST',
    headers: { "Content-Type": 'application/json' },
    body: JSON.stringify({ id }),
  });

  const newsBlogsDiv = document.querySelector('.newsBlogsDiv');
  const result = await fetch1.text();
    newsBlogsDiv.innerHTML = result;
}
);
