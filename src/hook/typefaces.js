import localFont from 'next/font/local';

export const indiBold = localFont({
	src: [
		{
			path: '../fonts/IndivisaTextSans-Bold.woff',
			weight: 'normal',
			style: 'normal'
		},{
			path: '../fonts/IndivisaTextSans-Bold.woff2',
			weight: 'normal',
			style: 'normal'
		}
	],
	variable: '--font-indiBold'
});

export const indiBoldItalic = localFont({
	src: [
		{
			path: '../fonts/IndivisaTextSans-BoldItalic.woff',
			weight: 'normal',
			style: 'normal'
		},{
			path: '../fonts/IndivisaTextSans-BoldItalic.woff2',
			weight: 'normal',
			style: 'normal'
		}
	],
	variable: '--font-indiBoldItalic'
});

export const indiRegular = localFont({
	src: [
		{
			path: '../fonts/IndivisaTextSans-Regular.woff',
			weight: 'normal',
			style: 'normal'
		},{
			path: '../fonts/IndivisaTextSans-Regular.woff2',
			weight: 'normal',
			style: 'normal'
		}
	],
	variable: '--font-indiRegular'
});

export const indiRegularItalic = localFont({
	src: [
		{
			path: '../fonts/IndivisaDisplaySans-RegularItalic.woff',
			weight: 'normal',
			style: 'normal'
		},{
			path: '../fonts/IndivisaDisplaySans-RegularItalic.woff2',
			weight: 'normal',
			style: 'normal'
		}
	],
	variable: '--font-indiRegularItalic'
});