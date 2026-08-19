class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        const map = new Map<number, number>();

        for (let i = 0; i < nums.length; i++) {
            const num = nums[i];
            const remainder = map.get(target - num);
            if (remainder !== undefined) {
                return [remainder, i];
            }
            map.set(num, i);
        }
    }
}
