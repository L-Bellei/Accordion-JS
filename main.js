const btns = document.querySelectorAll('.btn');

btns.forEach((bt) => {
	bt.addEventListener('click', (e) => addAccordion(e));
});

const addAccordion = (e) => {
	const section = e.target.parentNode.querySelector('section');

	section.classList.toggle('hide');
};
