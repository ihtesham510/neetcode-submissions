class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums: number[]): number {
        if (nums.length === 0) return 0;
        const sorted = [...new Set(nums)].sort((a, b) => a - b);
        let left = 0;
        let right = 1;
        let streak = 1;
        let prev = 0;
        while (left < sorted.length) {
            const curr = sorted[left];
            const next = sorted[right];
            if (curr + 1 === next) {
                streak++;
            } else {
                if (streak > prev) {
                    prev = streak;
                }
                streak = 1;
            }
            left++;
            right++;
        }
        return streak > prev ? streak : prev;
    }
}
