import styled from 'styled-components';
import { res, key, border } from './color';

export const Tab = styled.button.attrs({
	className: 'flex-1 pt-2 pb-1 rounded-t-2xl text-white bg-white/20'
})`
	font-family: KOTRA_BOLD;
	transition: background-color 0.2s ease-out, border-color 0.2s ease-out;

	&:hover {
		background-color: #666;
	}
	&.active {
		background-color: var(--main);
		color: black;
	}
`;

export const Box = styled.div.attrs({
	className:
		'flex-1 border-3 border-solid border-(--main) rounded-b-2xl p-2 flex flex-col gap-2 overflow-hidden'
})``;

export const Filter = styled.button.attrs({
	className: 'px-4 pt-1 bg-white/20 rounded-full'
})`
	font-family: KOTRA_BOLD;
	transition: background-color 0.2s ease-out, color 0.2s ease-out;

	&:hover {
		background-color: #666;
	}
	&.select {
		background-color: white;
		color: black;
	}
`;

export const Card = styled.div.attrs({
	className: 'flex-1 flex gap-2 bg-white/10 p-5 h-max rounded-2xl font-semibold'
})`
	font-family: Pretendard;
	min-width: min(100%, 420px);
	max-width: 600px;
	box-shadow: ${(props) =>
		Array.isArray(props.$num)
			? `-1px -1px 3px ${key[props.$num[0]]}, 1px 1px 3px ${
					props.$num[1] > 6 ? key[props.$num[0]] : key[props.$num[1]]
			  }`
			: props.$num > 6
			? '0 0 4px #eee'
			: props.$num >= 0
			? `-1px -1px 3px ${key[props.$num]}, 1px 1px 3px ${key[props.$num]}`
			: '0 0 2px #999'};

	@media (max-width: 600px) {
		flex-direction: column;
	}
`;

export const Img = styled.div.attrs({
	className: 'rounded-lg border-3 border-solid w-max h-40 aspect-3/4'
})`
	background: center / contain no-repeat;
	background-image: url(./img/char/${(props) =>
		`${props.$img}/${props.$num}.png`});
	border-color: ${(props) =>
		`${
			props.$num > 300 ? border[0] : props.$num > 200 ? border[1] : border[2]
		}`};

	@media (max-width: 600px) {
		align-self: center;
	}
`;

export const Title = styled.span.attrs({
	className: 'w-full rounded-full text-[15px] break-keep'
})`
	background: ${(props) =>
		Array.isArray(props.$res)
			? `linear-gradient(to right, ${props.$res.map((r) => res[r]).join(',')})`
			: res[props.$res]};
`;

export const Res = styled.div.attrs({
	className: 'aspect-square size-5'
})`
	background: center / contain no-repeat;
	background-image: url(./img/res/${(props) => `${props.$res}.webp`});
`;

export const St = styled.span.attrs({
	className: 'font-extrabold'
})``;

export const Text = styled.div.attrs({
	className: 'flex-1 flex justify-center items-center text-3xl'
})`
	font-family: KOTRA_BOLD;
`;
