import styled from 'styled-components';

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
		'flex-1 border-3 border-solid border-(--main) p-2 flex flex-col gap-4 overflow-hidden'
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
