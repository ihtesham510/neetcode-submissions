class Solution {
    /**
     * @param {number} numRows
     * @return {number[][]}
     */
    generate(numRows: number): number[][] {
        const arr: number[][] = [[1]];

        for (let i = 0; i < numRows - 1; i++) {
            const prev = arr[i];
            const temp = [0, ...prev, 0];
            const generateArr: number[] = [];
            for (let j = 0; j < prev.length + 1; j++) {
                generateArr.push(temp[j] + temp[j + 1]);
            }
            arr.push(generateArr);
        }

        return arr;
    }
}
