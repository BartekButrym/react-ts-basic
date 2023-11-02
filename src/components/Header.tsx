import { PropsWithChildren } from 'react';

type HeaderProps = PropsWithChildren<{
	image: {
		src: string;
		alt: string;
	};
}>;

export const Header = ({ image, children }: HeaderProps) => {
	return (
		<header>
			<img {...image} />
			{children}
		</header>
	);
};
