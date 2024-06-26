function isAlphaNumeric(char:string){
    const code=char.charCodeAt(0);
    return (code>=48 && code<=57) ||( code>=65 && code<=90) || (code >= 97 && code <= 122);
}
function isPalindrome(s: string): boolean {
    if(s.length<=1) return true;
    let left=0, right=s.length-1;
    while(left<right){
        if (!isAlphaNumeric(s[left]))left++;
        else if(!isAlphaNumeric(s[right])) right--;
        else if (s[left].toLowerCase()!==s[right].toLowerCase()) return false;
        else{
            left++;
            right--;
        }
    }
    return true;    
};