class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs: string[]): string {
        if (strs.length === 0) {
            return "";
        }
        if (strs.length === 1) {
            return strs[0];
        }

        let chars: string[] = [];

        for (let i = 0; i < strs.length; i++) {
            const curr = strs[i];
            const next = strs[i + 1];
            if (!curr || !next) break;
            const matchings = [];
            for (let j = 0; j < Math.min(next.length, curr.length); j++) {
                if (curr[j] == next[j]) {
                    matchings.push(curr[j]);
                } else {
                    break;
                }
            }
            // console.log([...matchings].join(""));
            if (chars.length === 0) {
                chars = matchings;
            } else {
                chars = matchings.length < chars.length ? matchings : chars;
            }
        }
        return [...chars].join("");
    }
}
