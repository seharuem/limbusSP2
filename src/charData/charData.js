import { char, res, key1, key2 } from '../filter';
import { char01 } from './01';
import { char02 } from './02';
import { char03 } from './03';
import { char04 } from './04';
import { char05 } from './05';
import { char06 } from './06';
import { char07 } from './07';
import { char08 } from './08';
import { char09 } from './09';
import { char11 } from './11';
import { char12 } from './12';
import { char13 } from './13';

const charData = [
	{ char: '01', data: char01 },
	{ char: '02', data: char02 },
	{ char: '03', data: char03 },
	{ char: '04', data: char04 },
	{ char: '05', data: char05 },
	{ char: '06', data: char06 },
	{ char: '07', data: char07 },
	{ char: '08', data: char08 },
	{ char: '09', data: char09 },
	{ char: '11', data: char11 },
	{ char: '12', data: char12 },
	{ char: '13', data: char13 }
];

const inputData = (data, i, img) =>
	data.map((item) => ({ char: char[i], img: img, ...item }));

const allData = charData.flatMap((item, i) =>
	inputData(item.data, i, item.char)
);

const arrayFilter = (i, key) =>
	allData.filter((f) =>
		key === 'char'
			? f[key] === char[i]
			: Array.isArray(f[key])
			? f[key].includes(i)
			: f[key] === i
	);

const dataSet = (data, key) =>
	Array.from({ length: data.length }, (_, i) => {
		const dataFilter = arrayFilter(i, key);
		return {
			[key]: data[i],
			data: dataFilter
		};
	});

export const nameData = dataSet(char, 'char');
export const resData = dataSet(res, 'res');
export const key1Data = dataSet(key1, 'key');
export const key2Data = dataSet(key2, 'key2');
