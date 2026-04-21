import { key1 } from './filter';
import { keyColor } from './color';
import styled from 'styled-components';
import test from '/img/key/0.webp';

const KeyStyle = styled.span.attrs({
	className: 'font-semibold relative'
})`
	color: ${(props) => (props.$num > 6 ? keyColor[7] : keyColor[props.$num])};
	padding-left: ${(props) => (props.$num > 6 ? '1.2rem' : '1rem')};
	&::before {
		content: '';
		width: 1rem;
		aspect-ratio: 1;
		background: url(/img/key/${(props) => props.$num}.webp) center / contain no-repeat;
		position: absolute;
		left: 0;
		top: 0;
	}

	@media (max-width: 480px) {
		padding-left: ${(props) => (props.$num > 6 ? '1rem' : '0.8rem')};
		&::before {
			width: 0.8rem;
			translate: 0 0.5px;
		}
	}
`;

const number = Array.from({ length: 10 }, (_, i) => i);

export const Key = number.map((num) => <KeyStyle $num={num}>{key1[num]}</KeyStyle>);
