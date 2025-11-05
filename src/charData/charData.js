import { char, res, key1 } from '../filter';
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

export const charData = [
	{ char: '01', name: char[0], data: char01 },
	{ char: '02', name: char[1], data: char02 },
	{ char: '03', name: char[2], data: char03 },
	{ char: '04', name: char[3], data: char04 },
	{ char: '05', name: char[4], data: char05 },
	{ char: '06', name: char[5], data: char06 },
	{ char: '07', name: char[6], data: char07 },
	{ char: '08', name: char[7], data: char08 },
	{ char: '09', name: char[8], data: char09 },
	{ char: '11', name: char[9], data: char11 },
	{ char: '12', name: char[10], data: char12 },
	{ char: '13', name: char[11], data: char13 }
];

const inputData = (data, i, img) =>
	data.map((item) => ({ char: char[i], img: img, ...item }));

const allData = charData.flatMap((item, i) =>
	inputData(item.data, i, item.char)
);

const resFilter = (data, i) =>
	data.filter((f) => (Array.isArray(f.res) ? f.res.includes(i) : f.res === i));

export const resData = Array.from({ length: 7 }, (_, i) => {
	const dataFilter = resFilter(allData, i);
	return {
		res: res[i],
		data: dataFilter
	};
});

const keyFilter = (data, i) =>
	data.filter((f) => (Array.isArray(f.key) ? f.key.includes(i) : f.key === i));

export const key1Data = Array.from({ length: 10 }, (_, i) => {
	const dataFilter = keyFilter(allData, i);
	return {
		key: key1[i],
		data: dataFilter
	};
});
