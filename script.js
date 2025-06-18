const iframe = document.getElementById('browser');
const loader = document.getElementById('loader');

// Показать iframe только после загрузки
iframe.onload = () => {
  loader.style.display = 'none';
  iframe.style.display = 'block';
};
