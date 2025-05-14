document.addEventListener("DOMContentLoaded", () => {
  // Добавляем класс show ко всем скрытым блокам
  document.querySelectorAll(".hidden").forEach(el => {
      el.classList.add("show");
  });
});
window.addEventListener('scroll', () => {
  const underHome = document.querySelector('.underHome');
  const underAbout = document.querySelector('.underAbout');
  const underSkills = document.querySelector('.underSkills');

  const scrollY = window.scrollY;

  // Убираем подсветку у всех
  underHome.style.boxShadow = 'none';
  underHome.style.height = '1.4px';
  underAbout.style.boxShadow = 'none';
  underAbout.style.height = '1.4px';
  underSkills.style.boxShadow = 'none';
  underSkills.style.height = '1.4px';

  // Включаем подсветку в зависимости от положения
  if (scrollY < 700) {
    underHome.style.boxShadow = '0 0 30px white';
    underHome.style.height = '3px' ;
  } else if (scrollY >= 700 && scrollY < 1600) {
    underAbout.style.boxShadow = '0 0 30px white';
    underAbout.style.height = '3px' ;
  } else if (scrollY >= 1600) {
    underSkills.style.boxShadow = '0 0 30px white';
    underSkills.style.height = '3px' ;
  }
});