function largestRectangleArea(heights: number[]): number {
    let stack:number[]=[];
    let maxArea=0;

    for (let i = 0; i <= heights.length; i++){
        let h=i===heights.length?0:heights[i];
        while(stack.length!==0 && h<heights[stack[stack.length-1]]){
            let height=heights[stack.pop()!];
            let width=stack.length===0?i:i-stack[stack.length-1]-1;
            maxArea=Math.max(maxArea,height*width);
        }
        stack.push(i)
    }
    return maxArea;
};