function twoSum(numbers: number[], target: number): number[] {
    let pt=0, pt2=numbers.length-1;
    while(pt<pt2){
        const sum=numbers[pt]+numbers[pt2];
        if (sum>target)pt2--;
        else if (sum<target)pt++;
        else return [pt+1, pt2+1]
    }
    return []
};