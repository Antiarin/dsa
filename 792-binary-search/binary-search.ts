function search(nums: number[], target: number): number {
    let low=0, high=nums.length-1;
    while(low<high){
        let mid=low+ Math.floor((high-low+1)/2);
        if(target<nums[mid]){
            high=mid-1;
        }else{
            low=mid;
        }
    }
    return nums[low]===target?low:-1
    
};