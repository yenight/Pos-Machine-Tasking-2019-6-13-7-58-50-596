const main = require('../main')

it ('should return [{id:...}]', () => {
    expect(main.loadAllItems()).toEqual([
    {"id": "0001", "name" : "Coca Cola", "price": 3},
    {"id": "0002", "name" : "Diet Coke", "price": 4},
    {"id": "0003", "name" : "Pepsi-Cola", "price": 5},
    {"id": "0004", "name" : "Mountain Dew", "price": 6},
    {"id": "0005", "name" : "Dr Pepper", "price": 7},
    {"id": "0006", "name" : "Sprite", "price": 8},
    {"id": "0007", "name" : "Diet Pepsi", "price": 9},
    {"id": "0008", "name" : "Diet Mountain Dew", "price": 10},
    {"id": "0009", "name" : "Diet Dr Pepper", "price": 11},
    {"id": "0010", "name" : "Fanta", "price": 12}
]);
});

it('should return {isBarcodesExist: false, allItems: allItems}',  () => {
    expect(main.isBarcodesExist(['0001', '0003', '0005', '0003'])).toEqual({isBarcodesExist: true,
        allItems: [
            {"id": "0001", "name" : "Coca Cola", "price": 3},
            {"id": "0002", "name" : "Diet Coke", "price": 4},
            {"id": "0003", "name" : "Pepsi-Cola", "price": 5},
            {"id": "0004", "name" : "Mountain Dew", "price": 6},
            {"id": "0005", "name" : "Dr Pepper", "price": 7},
            {"id": "0006", "name" : "Sprite", "price": 8},
            {"id": "0007", "name" : "Diet Pepsi", "price": 9},
            {"id": "0008", "name" : "Diet Mountain Dew", "price": 10},
            {"id": "0009", "name" : "Diet Dr Pepper", "price": 11},
            {"id": "0010", "name" : "Fanta", "price": 12}
        ]})
});

it('should return {isBarcodesExist: false, allItems: allItems}',  () => {
    expect(main.isBarcodesExist(['0011', '0003', '0005', '0003'])).toEqual({isBarcodesExist: false,
        allItems: [
            {"id": "0001", "name" : "Coca Cola", "price": 3},
            {"id": "0002", "name" : "Diet Coke", "price": 4},
            {"id": "0003", "name" : "Pepsi-Cola", "price": 5},
            {"id": "0004", "name" : "Mountain Dew", "price": 6},
            {"id": "0005", "name" : "Dr Pepper", "price": 7},
            {"id": "0006", "name" : "Sprite", "price": 8},
            {"id": "0007", "name" : "Diet Pepsi", "price": 9},
            {"id": "0008", "name" : "Diet Mountain Dew", "price": 10},
            {"id": "0009", "name" : "Diet Dr Pepper", "price": 11},
            {"id": "0010", "name" : "Fanta", "price": 12}
        ]})
});

it('should return [{"id": "001"...}...]', () => {
    expect(main.createRecipt(['0001', '0003', '0005', '0003'], [
        {"id": "0001", "name" : "Coca Cola", "price": 3},
        {"id": "0002", "name" : "Diet Coke", "price": 4},
        {"id": "0003", "name" : "Pepsi-Cola", "price": 5},
        {"id": "0004", "name" : "Mountain Dew", "price": 6},
        {"id": "0005", "name" : "Dr Pepper", "price": 7},
        {"id": "0006", "name" : "Sprite", "price": 8},
        {"id": "0007", "name" : "Diet Pepsi", "price": 9},
        {"id": "0008", "name" : "Diet Mountain Dew", "price": 10},
        {"id": "0009", "name" : "Diet Dr Pepper", "price": 11},
        {"id": "0010", "name" : "Fanta", "price": 12}
    ])).toEqual([{id: '0001', name: 'Coca Cola', price: 3, count: 1, totalPrice: 3},
        {id: '0003', name: 'Pepsi-Cola', price: 5, count: 2, totalPrice: 10},
        {id: '0005', name: 'Dr Pepper', price: 7, count: 1, totalPrice: 7}])
});

it('should return {"id": "0001"...}', () => {
    expect(main.createReciptItem('0001', [
        {"id": "0001", "name" : "Coca Cola", "price": 3},
        {"id": "0002", "name" : "Diet Coke", "price": 4},
        {"id": "0003", "name" : "Pepsi-Cola", "price": 5},
        {"id": "0004", "name" : "Mountain Dew", "price": 6},
        {"id": "0005", "name" : "Dr Pepper", "price": 7},
        {"id": "0006", "name" : "Sprite", "price": 8},
        {"id": "0007", "name" : "Diet Pepsi", "price": 9},
        {"id": "0008", "name" : "Diet Mountain Dew", "price": 10},
        {"id": "0009", "name" : "Diet Dr Pepper", "price": 11},
        {"id": "0010", "name" : "Fanta", "price": 12}
    ])).toEqual({id: '0001', name: 'Coca Cola', price: 3, count: 1, totalPrice: 3})
});

it('should return `Receipts.....`', () => {
    expect(main.printReceiptItems([{id: '0001', name: 'Coca Cola', price: 3, count: 1, totalPrice: 3},
        {id: '0003', name: 'Pepsi-Cola', price: 5, count: 2, totalPrice: 10},
        {id: '0005', name: 'Dr Pepper', price: 7, count: 1, totalPrice: 7}])).toEqual(`Receipts
------------------------------------------------------------
Coca Cola                       3          1
Pepsi-Cola                      5          2
Dr Pepper                       7          1
------------------------------------------------------------
Price: 20`);
});

it('should return `Coca Cola....`', () => {
    expect(main.printItems([{id: '0001', name: 'Coca Cola', price: 3, count: 1, totalPrice: 3},
        {id: '0003', name: 'Pepsi-Cola', price: 5, count: 2, totalPrice: 10},
        {id: '0005', name: 'Dr Pepper', price: 7, count: 1, totalPrice: 7}])).toBe(`Coca Cola                       3          1
Pepsi-Cola                      5          2
Dr Pepper                       7          1`);
});

it('should return `Price:20`', () => {
    expect(main.printTotalPrice([{id: '0001', name: 'Coca Cola', price: 3, count: 1, totalPrice: 3},
        {id: '0003', name: 'Pepsi-Cola', price: 5, count: 2, totalPrice: 10},
        {id: '0005', name: 'Dr Pepper', price: 7, count: 1, totalPrice: 7}])).toEqual(`Price: 20`);
});

it('should return `Receipts.....`', () => {
    expect(main.printReceipt(['0001', '0003', '0005', '0003'])).toEqual(`Receipts
------------------------------------------------------------
Coca Cola                       3          1
Pepsi-Cola                      5          2
Dr Pepper                       7          1
------------------------------------------------------------
Price: 20`);
});

it('should return `[ERROR]:barcode is not exist`', () => {
    expect(main.printReceipt(['0011', '0003', '0005', '0003'])).toEqual(`[ERROR]:barcode is not exist`);
});