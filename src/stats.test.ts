import {average, sum} from "./stats";
import {expect, test} from "./testLib";

test("Calculates the sum of all elements os the array", () => {
        const result = sum([1, 2, 3]);
        const expected = 6;
        expect(expected).toBe(result);
});

test("Calculates the average of all elements os the array", () => {
    const result = average([1, 2, 3]);
    const expected = 2;
    expect(expected).toBe(result);
});
