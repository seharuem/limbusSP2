import styled, { css, keyframes } from 'styled-components';
import { res, keyColor, border } from './color';

export const Tab = styled.button.attrs({
	className: 'flex-1 sm:max-w-25 py-1 sm:px-2 rounded-sm border-3 bg-black/30 backdrop-blur-sm text-sm'
})`
	border-color: #523521;
	font-family: KOTRA_BOLD;
	transition: border-color 0.2s ease-out;
	&:hover {
		border-color: #ffaa0080;
	}
	&.active {
		border-color: var(--main);
		box-shadow:
			0 0 4px #972213,
			inset 0 0 4px #972213;
	}
	@media (max-width: 600px) {
		font-size: 0.8rem;
	}
`;

export const Box = styled.div.attrs({
	className: 'flex-1 py-3 px-1 flex flex-col gap-3 overflow-hidden'
})``;

const fade = keyframes`
	0% { opacity: 0; }
	100% { opacity: 1; }
`;

export const FilterWrap = styled.div.attrs({
	className: 'flex flex-wrap gap-3'
})`
	animation: ${fade} 0.3s ease-out;
	&:not(:has(input)) {
		gap: 4px;
	}
`;

const tabFolder = (tab) => {
	if (tab === 0) return 'logo';
	if (tab === 1) return 'res';
	if (tab === 2) return 'key';
	return 'key2';
};

export const Filter = styled.label.attrs({
	className: 'flex gap-1 items-center cursor-pointer relative font-medium'
})`
	font-family: scDream;
	transition:
		background-color 0.2s ease-out,
		border-color 0.2s ease-out;

	&::before {
		content: ${(props) => props.$num >= 0 && "''"};
		width: 1.5em;
		aspect-ratio: 1;
		background: center / contain no-repeat;
		background-image: url(/img/${(props) => tabFolder(props.$tab)}/${(props) => props.$num}.webp);
	}
	&:hover input {
		border-color: var(--main);
	}

	@media (max-width: 480px) {
		font-size: 0.75rem;
	}
`;

export const Check = styled.input.attrs({
	type: 'checkbox',
	name: 'filter',
	className: 'cursor-pointer shrink-0'
})`
	appearance: none;
	width: 1.1rem;
	aspect-ratio: 1;
	border: 2px solid white;
	border-radius: 4px;

	&:checked {
		border-color: var(--main);
	}

	& + div {
		width: 1.3rem;
		aspect-ratio: 1;
		background: var(--main);
		mask: center / contain no-repeat;
		mask-image: url(/img/check.svg);
		position: absolute;
		right: 0;
		translate: 5px -5px;
	}

	@media (max-width: 480px) {
		width: 1rem;

		& + div {
			width: 1.2rem;
		}
	}
`;

export const DataWrap = styled.div.attrs({
	className:
		'flex-1 grid auto-rows-max grid-cols-[repeat(auto-fit,_minmax(min(100%,500px),_1fr))] justify-center gap-2.5 max-sm:gap-2 p-1 pr-3 overflow-auto'
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
	className: 'shrink-0 h-max ml-auto font-semibold text-xs pt-0.5'
})`
	font-family: KOTRA_BOLD;
	@media (min-width: 480px) {
		display: none;
	}
`;

const shadow = (num) => {
	const isArray = Array.isArray(num);
	const isSpecial = isArray ? num.every((n) => n > 6) : num > 6;

	let first, second;

	if (isSpecial) {
		first = second = keyColor[7];
	} else if (isArray) {
		first = keyColor[num[0]];
		second = num[1] > 6 ? first : keyColor[num[1]];
	} else if (num >= 0) {
		first = second = keyColor[num];
	}

	return first && second
		? css`
				box-shadow:
					inset 1px 1px 2px ${first},
					inset -1px -1px 2px ${second};
			`
		: css`
				box-shadow: 0 0 2px #999;
			`;
};

export const Card = styled.div.attrs({
	className: 'flex-1 flex gap-2 p-5 h-max rounded-sm backdrop-blur-sm'
})`
	background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.2));
	font-family: scDream;
	${(props) => shadow(props.$num)}
	animation: ${fade} 0.3s ease-out;

	@media (max-width: 480px) {
		flex-direction: column;
	}
`;

export const Img = styled.div.attrs({
	className: 'rounded-sm w-max h-40 aspect-3/4'
})`
	background: center / contain no-repeat;
	background-image: url(/img/char/${(props) => `${props.$img}/${props.$num}.png`});
	box-shadow: inset 0 0 4px ${(props) => `${props.$num > 300 ? border[0] : props.$num > 200 ? border[1] : border[2]}`};
	border: 1px solid ${(props) => `${props.$num > 300 ? border[0] : props.$num > 200 ? border[1] : border[2]}`};

	@media (max-width: 600px) {
		align-self: center;
	}
`;

export const Title = styled.span.attrs({
	className: 'px-2 pt-0.5 rounded-sm text-sm max-sm:text-[13px] break-keep font-medium'
})`
	background: ${(props) =>
		Array.isArray(props.$res)
			? `linear-gradient(to right, ${props.$res.map((r) => res[r]).join(',')})`
			: res[props.$res]};
`;

export const Res = styled.div.attrs({
	className: 'aspect-square size-5 max-sm:size-4'
})`
	translate: 0 -1px;
	background: center / contain no-repeat;
	background-image: url(/img/res/${(props) => `${props.$res}.webp`});
`;

export const Detail = styled.span.attrs({
	className: 'text-start flex-1 break-keep font-normal text-[15px]'
})`
	@media (max-width: 480px) {
		font-size: 0.8rem;
	}
`;

export const St = styled.span.attrs({
	className: 'font-semibold'
})``;

export const Text = styled.div.attrs({
	className: 'flex-1 flex justify-center items-center text-3xl'
})`
	font-family: KOTRA_BOLD;
`;
