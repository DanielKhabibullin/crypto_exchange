/* eslint-disable no-tabs */
// import {el, setChildren} from 'redom';
/* eslint-disable max-len */
export const renderFooter = () => {
	const footer = document.querySelector('.footer');
	footer.innerHTML = `
		<a href="/" class="footer__logo">
			<svg class="footer__logo-image" width="139" height="38" viewBox="0 0 139 38" fill="none" xmlns="http://www.w3.org/2000/svg">
				<mask id="path-1-inside-1_205_418" fill="white">
					<rect width="25" height="25" rx="1"></rect>
				</mask>
				<rect width="25" height="25" rx="1" stroke="#B865D6" stroke-width="4" mask="url(#path-1-inside-1_205_418)"></rect>
				<mask id="path-2-inside-2_205_418" fill="white">
					<rect x="13" y="13" width="25" height="25" rx="1"></rect>
				</mask>
				<rect x="13" y="13" width="25" height="25" rx="1" stroke="#4B00CA" stroke-width="4" mask="url(#path-2-inside-2_205_418)"></rect>
				<path d="M56.756 26.198C55.1867 26.198 53.8447 25.8753 52.73 25.23C51.6153 24.5847 50.7573 23.668 50.156 22.48C49.5693 21.2773 49.276 19.862 49.276 18.234C49.276 16.606 49.5693 15.198 50.156 14.01C50.7573 12.822 51.6153 11.9053 52.73 11.26C53.8447 10.6147 55.1867 10.292 56.756 10.292C57.6213 10.292 58.45 10.4093 59.242 10.644C60.0487 10.8787 60.7453 11.216 61.332 11.656C61.6547 11.8613 61.838 12.1107 61.882 12.404C61.9407 12.6827 61.8967 12.9393 61.75 13.174C61.618 13.394 61.42 13.5407 61.156 13.614C60.892 13.6873 60.5987 13.614 60.276 13.394C59.7773 13.0273 59.2347 12.756 58.648 12.58C58.076 12.404 57.4673 12.316 56.822 12.316C55.15 12.316 53.874 12.8293 52.994 13.856C52.114 14.8827 51.674 16.342 51.674 18.234C51.674 20.126 52.114 21.5927 52.994 22.634C53.874 23.6607 55.15 24.174 56.822 24.174C57.4673 24.174 58.0833 24.086 58.67 23.91C59.2713 23.734 59.836 23.4553 60.364 23.074C60.6867 22.8687 60.9727 22.8027 61.222 22.876C61.4713 22.9347 61.662 23.074 61.794 23.294C61.926 23.514 61.97 23.7633 61.926 24.042C61.882 24.306 61.728 24.5333 61.464 24.724C60.848 25.208 60.1293 25.5747 59.308 25.824C58.5013 26.0733 57.6507 26.198 56.756 26.198ZM64.4897 21.028C64.2257 21.028 64.0057 20.94 63.8297 20.764C63.6537 20.588 63.5657 20.3753 63.5657 20.126C63.5657 19.862 63.6537 19.6493 63.8297 19.488C64.0057 19.312 64.2257 19.224 64.4897 19.224H69.3297C69.579 19.224 69.7917 19.312 69.9677 19.488C70.1437 19.6493 70.2317 19.862 70.2317 20.126C70.2317 20.3753 70.1437 20.588 69.9677 20.764C69.7917 20.94 69.579 21.028 69.3297 21.028H64.4897ZM74.5153 26.154C73.8113 26.154 73.4593 25.7947 73.4593 25.076V11.414C73.4593 10.6953 73.8113 10.336 74.5153 10.336C74.8233 10.336 75.058 10.3947 75.2193 10.512C75.3953 10.6293 75.5567 10.82 75.7033 11.084L81.1153 21.204L86.5273 11.084C86.674 10.82 86.828 10.6293 86.9893 10.512C87.1653 10.3947 87.4 10.336 87.6933 10.336C88.368 10.336 88.7053 10.6953 88.7053 11.414V25.076C88.7053 25.7947 88.368 26.154 87.6933 26.154C87.004 26.154 86.6593 25.7947 86.6593 25.076V14.648L82.0393 23.162C81.922 23.382 81.7973 23.5433 81.6653 23.646C81.5333 23.7487 81.35 23.8 81.1153 23.8C80.866 23.8 80.668 23.7487 80.5213 23.646C80.3893 23.5287 80.2647 23.3673 80.1473 23.162L75.5273 14.67V25.076C75.5273 25.7947 75.19 26.154 74.5153 26.154ZM96.7865 26.198C95.7012 26.198 94.7625 25.9707 93.9705 25.516C93.1785 25.0613 92.5625 24.4233 92.1225 23.602C91.6972 22.766 91.4845 21.776 91.4845 20.632C91.4845 19.488 91.6972 18.5053 92.1225 17.684C92.5625 16.848 93.1785 16.2027 93.9705 15.748C94.7625 15.2933 95.7012 15.066 96.7865 15.066C97.8425 15.066 98.7665 15.2933 99.5585 15.748C100.351 16.2027 100.967 16.848 101.407 17.684C101.847 18.5053 102.067 19.488 102.067 20.632C102.067 21.776 101.847 22.766 101.407 23.602C100.967 24.4233 100.351 25.0613 99.5585 25.516C98.7665 25.9707 97.8425 26.198 96.7865 26.198ZM96.7865 24.482C97.6959 24.482 98.4292 24.152 98.9865 23.492C99.5439 22.832 99.8225 21.8787 99.8225 20.632C99.8225 19.3853 99.5439 18.4393 98.9865 17.794C98.4292 17.134 97.6959 16.804 96.7865 16.804C95.8625 16.804 95.1219 17.134 94.5645 17.794C94.0072 18.4393 93.7285 19.3853 93.7285 20.632C93.7285 21.8787 94.0072 22.832 94.5645 23.492C95.1219 24.152 95.8625 24.482 96.7865 24.482ZM105.662 26.154C104.929 26.154 104.562 25.78 104.562 25.032V16.232C104.562 15.484 104.921 15.11 105.64 15.11C106.359 15.11 106.718 15.484 106.718 16.232V17.046C107.085 16.4007 107.583 15.9093 108.214 15.572C108.859 15.2347 109.578 15.066 110.37 15.066C112.907 15.066 114.176 16.5033 114.176 19.378V25.032C114.176 25.78 113.809 26.154 113.076 26.154C112.328 26.154 111.954 25.78 111.954 25.032V19.51C111.954 18.586 111.771 17.9113 111.404 17.486C111.052 17.0607 110.495 16.848 109.732 16.848C108.837 16.848 108.119 17.134 107.576 17.706C107.048 18.2633 106.784 19.004 106.784 19.928V25.032C106.784 25.78 106.41 26.154 105.662 26.154ZM122.276 26.198C120.516 26.198 119.13 25.7067 118.118 24.724C117.106 23.7267 116.6 22.37 116.6 20.654C116.6 19.554 116.82 18.586 117.26 17.75C117.714 16.8993 118.338 16.2393 119.13 15.77C119.922 15.3007 120.831 15.066 121.858 15.066C123.339 15.066 124.505 15.5427 125.356 16.496C126.206 17.4347 126.632 18.7327 126.632 20.39C126.632 20.8887 126.338 21.138 125.752 21.138H118.756C118.917 23.3673 120.098 24.482 122.298 24.482C122.738 24.482 123.2 24.4307 123.684 24.328C124.168 24.2107 124.637 24.0053 125.092 23.712C125.4 23.536 125.664 23.4773 125.884 23.536C126.118 23.58 126.287 23.7047 126.39 23.91C126.492 24.1007 126.507 24.3207 126.434 24.57C126.375 24.8047 126.206 25.01 125.928 25.186C125.429 25.5233 124.842 25.78 124.168 25.956C123.508 26.1173 122.877 26.198 122.276 26.198ZM121.946 16.628C121.022 16.628 120.288 16.914 119.746 17.486C119.203 18.058 118.873 18.8207 118.756 19.774H124.762C124.718 18.7767 124.454 18.0067 123.97 17.464C123.486 16.9067 122.811 16.628 121.946 16.628ZM131.434 30.114C131.023 30.114 130.737 29.96 130.576 29.652C130.429 29.3587 130.444 29.014 130.62 28.618L131.918 25.714L128.002 16.628C127.826 16.232 127.818 15.88 127.98 15.572C128.156 15.264 128.493 15.11 128.992 15.11C129.256 15.11 129.468 15.176 129.63 15.308C129.806 15.44 129.96 15.6673 130.092 15.99L133.106 23.426L136.164 15.99C136.296 15.6527 136.45 15.4253 136.626 15.308C136.802 15.176 137.044 15.11 137.352 15.11C137.748 15.11 138.019 15.264 138.166 15.572C138.312 15.88 138.305 16.2247 138.144 16.606L132.644 29.256C132.497 29.5933 132.328 29.8207 132.138 29.938C131.962 30.0553 131.727 30.114 131.434 30.114Z" fill="white"></path>
			</svg>
		</a>
		<div class="footer__copy">© C-Money, 2023</div>
	`;
};
