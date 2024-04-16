function dailyTemperatures(temperatures: number[]): number[] {
    const res=Array(temperatures.length).fill(0);
    const stack=[]
    for (const i of temperatures.keys()){
        while(stack.length>0&&temperatures[i]> temperatures[stack[stack.length-1]]){
            const idx=stack.pop()
            res[idx]=i-idx
        }
        stack.push(i);        
    }
    return res
};