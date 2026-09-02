class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        const map = new Map<string, string[]>();
        for (const s of strs) {
            const sorted = s.split("").sort().join("");
            if (map.has(sorted)) {
                const set = map.get(sorted);
                set?.push(s);
            } else {
                map.set(sorted, [s]);
            }
        }

        return [...map.values()].map(val=>[...val]);
    }
}
