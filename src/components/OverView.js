import React, { Suspense, useRef } from 'react';
import { Canvas, useFrame } from 'react-three-fiber';
import { OrbitControls, Environment } from '@react-three/drei';

import Header from './Header';
import Cude from './Cude';
const OverView = () => {
	return (
		<>
			<Header />

			<Canvas className="cg" pixelRatio={[1, 2]} camera={{ position: [10, 2, 0], fov: 60 }}>
				<ambientLight position={[0, 4, 0]} intensity={5} lookAt={[0, 0, 0]} />

				<pointLight shadow position={[3, 2, -1]} intensity={0.5} />
				{/* <ambientLight intensity={0.5} color={'white'} /> */}

				<OrbitControls maxPolarAngle={Math.PI / 2} enableZoom={true} enablePan={true} />
				<axesHelper />
				<Suspense fallback={null}>
					<Environment files="royal_esplanade_1k.hdr" />
					<Cude />
				</Suspense>
			</Canvas>
		</>
	);
};

export default OverView;
