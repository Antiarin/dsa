/*
1  3  5  7
10 11 16 20
23 30 34 60
 */

function searchMatrix(matrix: number[][], target: number): boolean {
    for (let i =0;i<matrix.length;i++){
        if (target>=matrix[i][0] && target<=matrix[i][matrix[i].length-1]){
            let low=0, high=matrix[i].length-1;
            while(low<high){
                const mid=low+ Math.floor((high-low+1)/2);
                if (matrix[i][mid]>target){
                    high=mid-1;
                }else{
                    low=mid;
                }
            }
            return matrix[i][low]===target?true:false
        }
    }
    return false;
    
};