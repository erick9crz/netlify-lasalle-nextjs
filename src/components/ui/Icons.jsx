import localFont from 'next/font/local';

const lasalle = localFont({
	src: [
		{
			path: '../../icons/lasalle.eot',
			weight: 'normal',
			style: 'normal'
		},
		{
			path: '../../icons/lasalle.ttf',
			weight: 'normal',
			style: 'normal'
		},
		{
			path: '../../icons/lasalle.woff',
			weight: 'normal',
			style: 'normal'
		}
	]
});

export const Icons = ({name}) => {
	return (
		<i className={`${lasalle.className} icon icon-${name}`}></i>
	)
}
