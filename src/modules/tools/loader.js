import {main} from '../../index.js';
import {createElement} from '../createElement.js';

export const preloader = (active) => {
	if (active === true) {
		const loader = createElement('div',
			{
				className: 'spinner-box',
			},
			{
				append: createElement('div',
					{
						className: 'spinner',
					},
				),
			},
		);
		main.append(loader);
	} else if (document.querySelector('.spinner-box')) {
		const loader = document.querySelector('.spinner-box');
		loader.remove();
	}
};
