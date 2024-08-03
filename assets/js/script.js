'use strict'

/**
 * navbar toggle
 */

const navOpenBtn = document.querySelector('[data-nav-open-btn]')
const navbar = document.querySelector('[data-navbar]')
const navCloseBtn = document.querySelector('[data-nav-close-btn]')
const overlay = document.querySelector('[data-overlay]')

const elemArr = [navCloseBtn, overlay, navOpenBtn]

for (let i = 0; i < elemArr.length; i++) {
  elemArr[i].addEventListener('click', function () {
    navbar.classList.toggle('active')
    overlay.classList.toggle('active')
  })
}

/**
 * toggle navbar & overlay when click any navbar-link
 */

const navbarLinks = document.querySelectorAll('[data-navbar-link]')

for (let i = 0; i < navbarLinks.length; i++) {
  navbarLinks[i].addEventListener('click', function () {
    navbar.classList.toggle('active')
    overlay.classList.toggle('active')
  })
}

/**
 * header & go-top-btn active
 * when window scroll down to 400px
 */

const header = document.querySelector('[data-header]')
const goTopBtn = document.querySelector('[data-go-top]')

window.addEventListener('scroll', function () {
  if (window.scrollY >= 400) {
    header.classList.add('active')
    goTopBtn.classList.add('active')
  } else {
    header.classList.remove('active')
    goTopBtn.classList.remove('active')
  }
})

'#message'.addEventListener('click', (e) => {
  e.preventDefault()

  const name = document.getElementById('fullname').value
  const email = document.getElementById('email').value
  const message = document.getElementById('message').value

  // Craft the pre-filled WhatsApp message
  const encodedMessage = encodeURIComponent(
    `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
  )
  const whatsappLink = `https://wa.me/233598665863?text=${encodedMessage}`

  // Ask for user confirmation before redirecting (optional but recommended)
  if (
    confirm(`This will open WhatsApp with the following pre-filled message:

  Name: ${name}
  Email: ${email}

  Message:
  ${message}

  Are you sure you want to continue?`)
  ) {
    // Redirect to WhatsApp link
    window.location.href = whatsappLink
    form.reset()
  } else {
    // User declined, do nothing
  }
})
