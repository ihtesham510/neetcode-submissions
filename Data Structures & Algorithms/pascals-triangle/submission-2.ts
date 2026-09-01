class Solution {
    /**
     * @param {number} numRows
     * @return {number[][]}
     */
    generate(numRows: number): number[][] {
        const arr: number[][] = [];

        for (let i = 0; i < numRows; i++) {
            if (i === 0) {
                arr.push([1]);
                continue;
            }
            const prev = arr[i - 1];
            arr.push(
                Array.from({ length: prev.length + 1 }, (_, j) => {
                    const leftValue = prev[j - 1];
                    const rightValue = prev[j];
                    if (leftValue === undefined || rightValue === undefined) {
                        return 1;
                    }
                    return leftValue + rightValue;
                }),
            );
        }
        return arr;
    }
}
