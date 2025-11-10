import { key1 } from './filter';
import { keyColor } from './color';
import styled from 'styled-components';

const KeyStyle = styled.span.attrs({
	className: 'font-extrabold underline'
})`
	color: ${(props) => (props.$num > 6 ? '#eee' : keyColor[props.$num])};
`;

const number = Array.from({ length: 10 }, (_, i) => i);

export const Key = number.map((num) => (
	<KeyStyle $num={num}>{key1[num]}</KeyStyle>
));
