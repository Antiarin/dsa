function search(nums: number[], target: number): number {
    let low = 0, high = nums.length - 1;
    while (low <= high) {
        let mid = low + Math.floor((high - low + 1) / 2);
        if (nums[mid] === target) return mid;
        else if (nums[low] < nums[mid]) {
            if (nums[low] <= target && target < nums[mid]) high = mid - 1;
            else low = mid + 1;
        } else {
            if (nums[mid] < target && target <= nums[high]) low = mid + 1;
            else high = mid - 1
        }
    }
    return -1;
};