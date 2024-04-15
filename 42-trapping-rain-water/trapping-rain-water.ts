function trap(height: number[]): number {
    let waterTrapped = 0, left = Array(height.length).fill(0), right = Array(height.length).fill(0);
    left[0] = height[0];
    for (let i = 1; i < height.length; ++i) {
        left[i] = Math.max(left[i - 1], height[i]);
    }
    right[height.length - 1] = height[height.length - 1];
    for (let i = height.length - 2; i >= 0; --i) {
        right[i] = Math.max(right[i + 1], height[i]);
    }

    for (const i of height.keys()) {
        waterTrapped = waterTrapped + (Math.min(left[i], right[i]) - height[i]);
    }
    return waterTrapped;
};