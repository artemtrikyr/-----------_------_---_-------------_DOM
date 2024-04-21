function Ahahah(){
    let weight = parseFloat(document.getElementById("weight").value);
    let price = parseFloat(document.getElementById("price").value);
    let totalPrice = 0;
    
    if (weight<2){
        totalPrice = price + 40;
    } else if (weight<10) {
        totalPrice = price + 60;
    } else if (weight<30) {
        totalPrice = price + 80;
    } else {
        totalPrice = price + 10000;
    }
    
    if (document.getElementById("tax").checked) { 
        totalPrice *= 1.02;
    }


    document.getElementById("totalCost").value = totalPrice;
    
}