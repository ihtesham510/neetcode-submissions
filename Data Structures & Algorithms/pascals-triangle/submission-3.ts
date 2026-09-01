class Solution {
    /**
     * @param {number} numRows
     * @return {number[][]}
     */
    generate(numRows: number): number[][] {
        const arr: number[][] = [[1]];

        for (let i = 1; i < numRows; i++) {
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
