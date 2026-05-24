class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        if(s.length !== t.length) return false
        const str1 = s.split('').sort().join('')
        const str2 = t.split('').sort().join('')
        return str1 === str2
    }
}
