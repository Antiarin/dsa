function productExceptSelf(nums: number[]): number[] {
    let multiple=1;
    let zero=0;
    const arr=Array(nums.length).fill(0);
    for (const i of nums ){
        if (i!==0) multiple*=i
        else zero++
    }
    if(zero===1){
        for (const i of nums.keys()){
            arr[i]=nums[i]==0?multiple:0;
        }
    }else if(zero==0){
        for(const i of nums.keys()){
            arr[i]=multiple/nums[i]
        }
    }
    return arr;
};