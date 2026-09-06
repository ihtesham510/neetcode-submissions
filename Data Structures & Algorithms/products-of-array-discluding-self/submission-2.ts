class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums: number[]): number[] {
        const arr: number[] = [];
        const prefix = this.prefixArr(nums);
        const postfix = this.postfixArr(nums);
        for (let i = 0; i < nums.length; i++) {
            if (prefix[i - 1] === undefined) {
                arr.push(postfix[i + 1]);
                continue;
            }
            if (postfix[i + 1] === undefined) {
                arr.push(prefix[i - 1]);
                continue;
            }
            arr.push(prefix[i - 1] * postfix[i + 1]);
        }
        return arr;
    }
    prefixArr(nums: number[]): number[] {
        let product = 1;
        return nums.map((num) => {
            product *= num;
            return product;
        });
    }
    postfixArr(nums: number[]): number[] {
        let product = 1;
        const arr: number[] = [];
        for (let i = nums.length - 1; i >= 0; i--) {
            product *= nums[i];
            arr.unshift(product);
        }
        return arr;
    }
}
