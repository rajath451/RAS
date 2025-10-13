document.addEventListener("DOMContentLoaded", () => {
  const sidebar = document.querySelector('.sidebar');
  const search = document.getElementById('search');
  const searchbtn = document.getElementById('search-btw');
  const searchclose = document.getElementById('search__clos');

  // Sidebar toggle
  window.showsidebar = () => sidebar.style.display = 'flex';
  window.hidesidebar = () => sidebar.style.display = 'none';

  // Search overlay toggle
  searchbtn.addEventListener('click', (e) => {
    e.preventDefault(); // Prevent link reload
    search.classList.add('show-search');
  });

  searchclose.addEventListener('click', () => {
    search.classList.remove('show-search');
  });
});