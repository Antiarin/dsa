use std::cmp::Ordering;

impl Solution {
    pub fn merge(nums1: &mut Vec<i32>, m: i32, nums2: &mut Vec<i32>, n: i32) {
        let mut m =m as usize;
        let mut n=n as usize;
        for i in (0..n+m).rev(){
            match(m,n){
                (_,0)=>{
                    break;
                }
                (0,_)=>{
                    nums1[i]=nums2[n-1];
                    n-=1;
                }
                _=>{
                    match nums1.get(m-1).cmp(&nums2.get(n-1)){
                        Ordering::Less=>{
                            nums1[i]=nums2[n-1];
                            n-=1;
                        }
                        Ordering::Equal|
                        Ordering::Greater=>{
                            nums1[i]=nums1[m-1];
                            m-=1;
                        }
                    }
                }
            }
        }
    }
}