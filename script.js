/*haha i think i spelled hamburger wrong 2 websites in a row but its kinda funny so ima keep it*/
const hambuger = document.getElementsByClassName('hambuger')[0];
const navLinks = document.getElementsByClassName('navigation-links')[0];

hambuger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
})

document.addEventListener('DOMContentLoaded', () => {
    const navItems = document.querySelectorAll('.hidden-nav');
    const contentItems = document.querySelectorAll('.pixel-container');
  
    navItems.forEach((item, index) => {
      item.addEventListener('click', () => {

        navItems.forEach(navItem => navItem.classList.remove('active'));
        contentItems.forEach(contentItem => contentItem.classList.remove('active'));
  
        item.classList.add('active');
        contentItems[index].classList.add('active');
      });
    });
  });
  