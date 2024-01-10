import {describe, expect, it} from '@jest/globals';
import {dateRangeByYearMonth} from './dateRangeByYearMonth';

describe('dateRangeByYearMonth', () => {
	it('should return date range for january', () => {
		const dateRange = dateRangeByYearMonth({
			year: 2023,
			month: 1,
		});
		expect(dateRange).toEqual({
			start: '2023-01-01',
			end: '2023-01-31',
		});
	});

	it('should return date range for leap year', () => {
		const dateRange = dateRangeByYearMonth({
			year: 2024,
			month: 2,
		});
		expect(dateRange).toEqual({
			start: '2023-02-01',
			end: '2023-02-29',
		});
	});

	it('should return date range for non-leap year', () => {
		const dateRange = dateRangeByYearMonth({
			year: 2023,
			month: 2,
		});
		expect(dateRange).toEqual({
			start: '2023-02-01',
			end: '2023-02-28',
		});
	});
});
