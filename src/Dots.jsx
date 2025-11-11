import { useState, useEffect } from 'react';
import { Text } from './style';

function Dots() {
	const [dots, setDots] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setDots((prev) => (prev === 3 ? 1 : prev + 1));
		}, 500);

		return () => clearInterval(interval);
	}, []);
	return <Text>로딩 중입니다{' .'.repeat(dots)}</Text>;
}
export default Dots;
