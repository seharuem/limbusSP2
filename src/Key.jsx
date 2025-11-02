import { key1 } from './filter';
import { key } from './color';
import styled from 'styled-components';

const KeyStyle = styled.span.attrs({
	className: 'font-extrabold underline'
})`
	color: ${(props) => key[props.$num]};
`;

const number = Array.from({ length: 7 }, (_, i) => i);

export const Key = number.map((num) => (
	<KeyStyle $num={num}>{key1[num]}</KeyStyle>
));
