import sum from '../_service/demo.js';
import {describe, expect} from "@jest/globals";

describe('sum function', () => {
    it('sums up two integers', () => {
        expect(sum(1, 2)).toEqual(3);
    });
});