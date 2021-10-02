const mobileMenuButton = document.querySelector('.mobile-menu-button');
const mobileNav = document.querySelector('.mobile-nav');
const hamburger = document.querySelector('.hamburger');
const closeButton = document.querySelector('.close-button');
console.dir(closeButton);

let mobileNavIsOpen = false;

document.addEventListener('DOMContentLoaded', event => {
	console.log('yas');
	mobileNavIsOpen = false;
});

mobileMenuButton.addEventListener('click', event => {
	const windowHasMobileWidth = window.innerWidth < 650;
	const mobileNavIsVisible = mobileNav.classList.contains('block');
	
	if (!mobileNavIsVisible && windowHasMobileWidth) {
		mobileNav.classList.add('block');
		mobileNavIsOpen = true;
		hamburger.classList.add('hidden');
		closeButton.classList.add('block');
		
	} else {
		mobileNav.classList.remove('block');
		mobileNavIsOpen = false;
		closeButton.classList.remove('block');
		hamburger.classList.remove('hidden');
	}
})

window.addEventListener('resize', event => {
	const windowHasMobileWidth = window.innerWidth < 650;
	const mobileNavIsVisible = mobileNav.classList.contains('block');
	
	
	if (!windowHasMobileWidth && mobileNavIsVisible) {
		mobileNav.classList.remove('block');
		closeButton.classList.remove('block');
		
	}
	
	if (mobileNavIsOpen && windowHasMobileWidth) {
		mobileNav.classList.add('block');
		closeButton.classList.add('block');
		
	}
});