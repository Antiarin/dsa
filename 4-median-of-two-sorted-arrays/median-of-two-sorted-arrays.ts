function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
    const arr=[...nums1,...nums2];
    arr.sort((a,b)=>a-b)
    let left=0, right=arr.length-1;
    let mid=0;
    if(arr.length%2===0){
        mid= Math.abs(arr[Math.floor((right+1)/2)-1]+ arr[Math.floor((right+1)/2)])/2
    }
    else{
        mid=arr[Math.floor((right+1)/2)]
    }
    console.log(mid)
    return mid
};

/* 
1 3  2
1 2  3 4 
*/