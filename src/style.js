import styled, { css } from 'styled-components';
import { res, keyColor, border } from './color';

export const Tab = styled.button.attrs({
	className: 'flex-1 pt-2 pb-1 rounded-t-2xl text-white bg-white/20'
})`
	font-family: KOTRA_BOLD;
	transition: background-color 0.2s ease-out, color 0.3s ease-out;

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
		'flex-1 border-3 border-solid border-(--main) rounded-b-2xl py-3 px-1 flex flex-col gap-3 overflow-hidden'
})``;

const tabFolder = (tab) => {
	if (tab === 0) return 'logo';
	if (tab === 1) return 'res';
	if (tab === 2) return 'key';
	return 'key2';
};

export const Filter = styled.button.attrs({
	className:
		'text-sm px-4 py-1 bg-white/15 rounded-full flex gap-2 items-center'
})`
	font-family: KOTRA_BOLD;
	border: 2px solid transparent;
	transition: background-color 0.2s ease-out, border-color 0.2s ease-out;

	&:hover {
		background-color: #666;
	}
	&.select {
		border-color: rgba(255, 255, 255, 0.7);
		border-color: var(--main);
	}
	&::before {
		content: ${(props) => props.$num >= 0 && "''"};
		width: 20px;
		aspect-ratio: 1;
		background: center / contain no-repeat;
		background-image: url(./img/${(props) => tabFolder(props.$tab)}/${(props) =>
			props.$num}.webp);
	}
`;

export const DataWrap = styled.div.attrs({
	className: 'flex-1 flex justify-center gap-4 flex-wrap py-1 pl-3 pr-2 overflow-auto bg-white/5'
})`
	scrollbar-gutter: stable;
	&::-webkit-scrollbar {
		width: 4px;
	}
	&::-webkit-scrollbar-thumb {
		background-color: var(--main);
		border-radius: 4px;
	}
`;

export const Hide = styled.button.attrs({
	type: 'button',
	className: 'bg-white/10 p-5 h-max rounded-2xl font-semibold'
})`
	@media (min-width: 600px) {
		display: none;
	}
`;

const shadow = (num) => {
	if (Array.isArray(num)) {
		const first = keyColor[num[0]];
		const second = num[1] > 6 ? first : keyColor[num[1]];
		return css`
			box-shadow: -1px -1px 3px ${first}, 1px 1px 3px ${second};
		`;
	}
	if (num > 6)
		return css`
			box-shadow: 0 0 4px #eee;
		`;
	if (num >= 0) {
		const color = keyColor[num];
		return css`
			box-shadow: -1px -1px 3px ${color}, 1px 1px 3px ${color};
		`;
	}
	return css`
		box-shadow: 0 0 2px #999;
	`;
};

export const Card = styled.div.attrs({
	className: 'flex-1 flex gap-2 bg-white/10 p-5 h-max rounded-2xl font-semibold'
})`
	font-family: Pretendard;
	min-width: min(100%, 420px);
	max-width: 600px;
	${(props) => shadow(props.$num)}

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
