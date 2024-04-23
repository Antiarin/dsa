function findMin(nums: number[]): number {
    let min=Infinity;  
    let low=0, high=nums.length-1;
    while(low<=high){
        const mid=low + Math.floor((high-low+1)/2);
        if(nums[mid]>nums[nums.length-1]){
            low=mid+1;
        }else{
            min=Math.min(min,nums[mid]);
            high=mid-1;
        }
    }
    return min;  
};