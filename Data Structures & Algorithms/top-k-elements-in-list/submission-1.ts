class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        const map = new Map<number, number>();
        for (let i = 0; i < nums.length; i++) {
            const num = nums[i];
            if (map.has(num)) {
                const count = map.get(num);
                map.set(num, count + 1);
            } else {
                map.set(num, 1);
            }
        }
        return [...map.entries()].sort((a,b)=>b[1]-a[1]).slice(0,k).map(([key])=>key)
    }
}
