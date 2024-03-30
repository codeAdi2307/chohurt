function findLargestElement(numbers) {
    let data = numbers.sort();
    console.log(data);
    let number =  data.length -1;
    return data[number]  
}
console.log(findLargestElement([3, 7, 2, 9, 1])); 