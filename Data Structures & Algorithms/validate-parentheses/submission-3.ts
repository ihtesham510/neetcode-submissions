class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s: string): boolean {
        if (s.length % 2 !== 0) return false;
        const map = new Map<string, string>([
            ["]", "["],
            ["}", "{"],
            [")", "("],
        ]);
        const stack: string[] = [];

        for (let i = 0; i < s.length; i++) {
            const bracket = s[i];
            if (map.has(bracket)) {
                const openingBracket = stack.pop();
                const correspondingBracket = map.get(bracket);
                if (openingBracket !== correspondingBracket) {
                    return false;
                }
            } else {
                stack.push(bracket);
            }
        }
        if (stack.length > 0) return false;
        return true;
    }
}
