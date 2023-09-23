import Image from 'next/image';

export default function CustomImage({ src, width, height, alt }) {
	return (
		<Image src={src} width={width} height={height} alt={`La Salle - ${alt}`}/>
	);
}
