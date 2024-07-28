import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Provider } from 'jotai';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'IA1.me',
	description: 'AI-Powered Non-Realistic Tamagotchi Generator for Artists and Hobbyists',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<Provider>
					<div className="gradient-bg">
					<div id="root">{children}</div>
						<div className="gradients-container">
							<div className="g1"></div>
							<div className="g2"></div>
							<div className="g3"></div>
							<div className="g4"></div>
							<div className="g5"></div>
							<div className="interactive"></div>
						</div>
					</div>
				</Provider>
			</body>
		</html>
	);
}
