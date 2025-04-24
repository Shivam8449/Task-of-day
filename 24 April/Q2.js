function largestRectangleArea(heights) {
    let stack = [];
    let maxArea = 0;
    heights.push(0); 

    for (let i = 0; i < heights.length; i++) {
        while (stack.length && heights[stack[stack.length - 1]] > heights[i]) {
            let height = heights[stack.pop()];
            let width = stack.length === 0 ? i : i - stack[stack.length - 1] - 1;
            maxArea = Math.max(maxArea, height * width);
        }
        stack.push(i);
    }

    return maxArea;
}

let heights = [2, 1, 5, 6, 2, 3];
console.log(largestRectangleArea(heights)); 
