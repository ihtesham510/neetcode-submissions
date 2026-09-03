class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums: number[]): number {
        let set = new Set(nums);
        let longest = 0;
        let i = 0;
        while (i < nums.length) {
            if (!set.has(nums[i] - 1)) {
                let count = 0;
                while (set.has(nums[i] + count)) {
                    count++;
                }
                longest = Math.max(longest, count);
            }
            i++;
        }
        return longest;
    }
}
