document.addEventListener('DOMContentLoaded', function() {
	const searchBtn = document.querySelector('.actions-search');
	const searchBlock = document.querySelector('.search-block');
	this.addEventListener('click', event => {
		if (event.target.className === 'actions-search' && searchBlock.classList.contains('search-block-active') === false) {
			searchBlock.classList.add('search-block-active');
		} else {
			searchBlock.classList.remove('search-block-active');
		}
	})

	const mobMenu = document.querySelectorAll('.mob-menu');
	const menu = document.querySelector('.menu');
	const actions = document.querySelector('.actions');
	mobMenu.forEach(item => {
		item.addEventListener('click', function() {
			if (this.classList.contains('left-menu-down')) {
				menu.classList.toggle('active-menu-actions');
			} else {
				actions.classList.toggle('active-menu-actions');
			}
		})
	})
})