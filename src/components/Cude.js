import React from 'react';
import { Sphere } from '@react-three/drei';
import { MeshStandardMaterial } from 'three';

function Cude() {
	return (
		<mesh>
			<boxBufferGeometry args={[1, 1, 1]} />
			<meshStandardMaterial color="orange" />
		</mesh>
	);
}

export default Cude;
