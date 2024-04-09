function isAnagram(str1,str2) {
    const trimed_str1 = str1.trim(); 
    const trimed_str2 = str2.trim();
    const lowercase1 =  trimed_str1.toLowerCase().split("").sort().join("");
    const lowercase2 =  trimed_str2.toLowerCase().split("").sort().join("");
   
    console.log(lowercase1);
    console.log(lowercase2);
    if(lowercase1.length == lowercase2.length){
       if(lowercase1 == lowercase2){
        return true
       }else{
        return false
       }
    
}
}

console.log(isAnagram("Listen", "sllent")); 