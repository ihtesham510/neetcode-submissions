class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs: string[]): string {
        if (strs.length === 1) return strs[0];
        const arr: string[] = [];
        const sorted = strs.sort();
        const first = sorted[0];
        const last = sorted[sorted.length - 1];
        for (let i = 0; i < Math.min(first.length, last.length); i++) {
            if (first[i] === last[i]) {
                arr.push(first[i]);
            } else {
                break;
            }
        }
        return arr.join("");
    }
}
