function countVowels(str) {
    let check = str.split("")
    console.log(check);
    let data = [];
    check.forEach(ele => {
        if(ele == 'a'||ele == 'e'||ele == 'i'||ele == 'o'||ele == 'u'){
            data.push(ele)
        }
    }
    );

return data.length
}
console.log(countVowels("aeiou"));
