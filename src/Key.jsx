import { key1 } from './filter';
import { keyColor } from './color';
import styled from 'styled-components';
import test from '/img/key/0.webp';

const KeyStyle = styled.span.attrs({
	className: 'font-extrabold underline pl-4.5 relative'
})`
	color: ${(props) => (props.$num > 6 ? '#eee' : keyColor[props.$num])};
	&::before {
		content: '';
		width: 1rem;
		aspect-ratio: 1;
		background: url(/img/key/${(props) => props.$num}.webp) center / contain no-repeat;
		position: absolute;
		left: 0;
		top: 1px;
	}
`;

const number = Array.from({ length: 10 }, (_, i) => i);

export const Key = number.map((num) => <KeyStyle $num={num}>{key1[num]}</KeyStyle>);
