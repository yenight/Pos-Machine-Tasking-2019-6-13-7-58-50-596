const printReceipt =  barcodes => {
    let itemsDatas = isBarcodesExist(barcodes);
    if (itemsDatas.isBarcodesExist) {
        let receiptItems = generateRecipt(barcodes, itemsDatas.allItems);
        return printReceiptItems(receiptItems);
    } else {
        return `[ERROR]:barcode is not exist`;
    }
}

const loadAllItems = () => {
    return [
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
    ];
}

const isBarcodesExist =  (barcodes) => {
    const allItems = this.loadAllItems()
    for (let i = 0; i < barcodes.length; i++) {
        if (allItems.findIndex((value)=>{return barcodes[i] === value.id}) < 0) {
            return {isBarcodesExist: false, allItems: allItems}
        }
    }
    return {isBarcodesExist: true, allItems: allItems}
}

const generateRecipt = (barcodes, allItems) => {
    let reciptItems = [];
    for (let i = 0; i < barcodes.length; i++) {
        if (reciptItems.findIndex(value => value.id === barcodes[i]) < 0) {
            reciptItems.push(generateReciptItem(barcodes[i], allItems));
        } else {
            let index = reciptItems.findIndex(value => value.id === barcodes[i]);
            reciptItems[index].count++;
            reciptItems[index].totalPrice += reciptItems[index].price;
        }
    }
    return reciptItems;
}

const generateReciptItem = (barcode, allItems) => {
    const index = allItems.findIndex((value => barcode === value.id))
    return {id: allItems[index].id, name: allItems[index].name, price: allItems[index].price, count: 1, totalPrice: allItems[index].price}
}

const printReceiptItems = (receiptItems) => {
    let receipt = `Receipts
------------------------------------------------------------\n`;
    receipt += `${printItems(receiptItems)}\n`;
    receipt += `------------------------------------------------------------\n`;
    receipt += `${printTotalPrice(receiptItems)}`;
    return receipt;
}

const printItems = (receiptItems) => {
    let receiptItemsString = ``;
    for (let i = 0; i < receiptItems.length; i++) {
        receiptItemsString += receiptItems[i].name;
        for (let j = 0; j < 32 - receiptItems[i].name.length; j++) {
            receiptItemsString += ` `;
        }
        if (i < receiptItems.length - 1) {
            receiptItemsString += `${receiptItems[i].price}          ${receiptItems[i].count}\n`;
        } else {
            receiptItemsString += `${receiptItems[i].price}          ${receiptItems[i].count}`;
        }
    }
    return receiptItemsString;
}

const printTotalPrice = (receiptItems) => {
    let totalPrice = 0;
    for (let i = 0; i < receiptItems.length; i++) {
        totalPrice += receiptItems[i].totalPrice;
    }
    return `Price: ${totalPrice}`;
}

exports.isBarcodesExist = isBarcodesExist;
exports.loadAllItems = loadAllItems;
exports.printReceipt = printReceipt;
exports.generateRecipt = generateRecipt;
exports.generateReciptItem = generateReciptItem;
exports.printReceiptItems = printReceiptItems;
exports.printItems = printItems;
exports.printTotalPrice = printTotalPrice