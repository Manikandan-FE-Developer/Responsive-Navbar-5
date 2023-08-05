const bodyEl = document.body
const hamburgerEl = document.querySelector('.hamburger')

hamburgerEl.addEventListener('click', () => {
	bodyEl.classList.toggle('active')
})

changeIcon = (icon) => icon.classList.toggle('fa-times');