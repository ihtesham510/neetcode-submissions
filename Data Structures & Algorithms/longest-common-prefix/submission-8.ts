class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs: string[]): string {
        let res = "";
        let common = strs[0];
        for (let i = 0; i < common.length; i++) {
            for (const s of strs) {
                if (i === s.length || s[i] !== common[i]) return res;
            }
            res += common[i];
        }
        return res;
    }
}
