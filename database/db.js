const searchInput = document.getElementById('search');
const searchBtn = document.getElementById('searchBtn');

searchBtn.addEventListener('click', (e) => {
   e.preventDefault();
   const val = searchInput.value;
   console.log(val);
   showList(val);
})