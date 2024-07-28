'use client';
import { Loader } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import { Experience } from './Experience';
import { Ui } from './UI';

export function BookIndex() {
	return (
		<div className="flex w-full h-full">
			<Ui />
			<Loader />
			<Canvas shadows camera={{ position: [-0.5, 1, 4], fov: 45 }}>
				<group position-y={0}>
					<Suspense fallback={null}>
						<Experience />
					</Suspense>
				</group>
			</Canvas>
		</div>
	);
}
