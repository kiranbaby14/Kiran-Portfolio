const JavaScript = () => {
  /*==================== QUALIFICATION TABS ====================*/
  const tabs = document.querySelectorAll('[data-target]'),
    tabContents = document.querySelectorAll('[data-content]')

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const target = document.querySelector(tab.dataset.target)

      tabContents.forEach(tabContent => {
        tabContent.classList.remove('qualification_active')
      })

      target.classList.add('qualification_active')

      tabs.forEach(tab => {
        tab.classList.remove('qualification_active')
      })
      tab.classList.add('qualification_active')
    })
  })



  /*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
  let sections = document.querySelectorAll('section[id]')

  function scrollActive() {
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
      const sectionHeight = current.offsetHeight
      const sectionTop = current.offsetTop - 200;
      let sectionId = current.getAttribute('id')

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.add('active-link')
      } else {
        document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.remove('active-link')
      }

    })
  }
  window.addEventListener('scroll', scrollActive)


  /*==================== CHANGE BACKGROUND HEADER ====================*/
  function scrollHeader() {
    const nav = document.getElementById('header')
    // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
    if (this.scrollY >= 80) {
      nav.classList.add('scroll-header');
    }
    else {
      nav.classList.remove('scroll-header')
    }
  }
  window.addEventListener('scroll', scrollHeader)


  /*==================== SHOW SCROLL UP ====================*/
  function scrollUp() {
    const scrollUp = document.getElementById('scroll-up');
    // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if (this.scrollY >= 560) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
  }
  window.addEventListener('scroll', scrollUp)

}

export default JavaScript;