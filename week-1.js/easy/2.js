function calculateTotalSpentByCategory(transactions) {

    let data = [];

    transactions.map(ele => {
       data.push({"category": ele.category, "totalspent": ele.price})
       

    })
    return data

    // return [{ "category": transactions.category, "totalspent": transactions.price }]

}
console.log(calculateTotalSpentByCategory(
    [
        {
            id: 1,
            timestamp: 1656076800000,
            price: 10,
            category: 'Food',
            itemName: 'Pizza',
        }, {
            id: 2,
            timestamp: 1656076800000,
            price: 20,
            category: 'Ride',
            itemName: 'Pizza',
        }, {
            id: 3,
            timestamp: 1656076800000,
            price: 30,
            category: 'Dance',
            itemName: 'Pizza',
        }
    ]
));