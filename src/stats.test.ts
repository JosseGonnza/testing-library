import {average, sum} from "./stats";
import {describe, expect, it, test} from "./testLib";
import * as statsAsync from "./statsAsync";

describe("Stats should ", () => {
    it("Calculates the sum of all elements os the array",
        () => {
            const result = sum([1, 2, 3]);
            const expected = 6;
            expect(expected).toBe(result);
        });

    it("Calculates the average of all elements os the array",
        () => {
            const result = average([1, 2, 3]);
            const expected = 2;
            expect(expected).toBe(result);
        });
});

describe("Stats Async should ", () => {
    it("Calculates the sum of all elements os the array (async)",
        async () => {
            const result = await statsAsync.sum([1, 2, 3]);
            const expected = 6;
            expect(expected).toBe(result);
        });

    it("Calculates the average of all elements os the array (async)",
        async () => {
            const result = await statsAsync.average([1, 2, 3]);
            const expected = 2;
            expect(expected).toBe(result);
        });
});
