function maxSlidingWindow(nums, k) {
    let result = [];
    let deque = [];

    for (let i = 0; i < nums.length; i++) {
        if (deque.length && deque[0] === i - k) {
            deque.shift();
        }
        while (deque.length && nums[deque[deque.length - 1]] < nums[i]) {
            deque.pop();
        }
        deque.push(i);
        if (i >= k - 1) {
            result.push(nums[deque[0]]);
        }
    }

    return result;
}

const nums = [1, 3, -1, -3, 5, 3, 6, 7];
const k = 3;
console.log(maxSlidingWindow(nums, k)); 
