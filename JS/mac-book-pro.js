// Cost update and total cost update calculation function
function costUpdate(eachCostId, cost){
    const costId = document.getElementById(eachCostId);
    costId.innerText=cost;

    // function call Total calculation and store total price
    const totalPriceStore = totalcostUpdateCalculation();

    const totalPrice = document.getElementById('total-price');
    totalPrice.innerText=totalPriceStore;

    const totalPriceFooter =document.getElementById('total-price-footer');
    totalPriceFooter.innerText=totalPriceStore;
}

// total cost update calculation function 
function totalcostUpdateCalculation() {
    // getting id for all cost
    const bestPrice = document.getElementById('best-price');
    const memoryCost = document.getElementById('memory-cost');
    const storageCost = document.getElementById('storage-cost');
    const deliveryCost = document.getElementById('delivery-cost');

    // All cost addition and return 
    const bestPriceStore = parseFloat(bestPrice.innerText);
    const memoryCostStore = parseFloat(memoryCost.innerText);
    const storageCostStore = parseFloat(storageCost.innerText);
    const deliveryCostStore = parseFloat(deliveryCost.innerText);
    const totalPrice = bestPriceStore + memoryCostStore + storageCostStore + deliveryCostStore;
    
    return totalPrice;  
}

// Promo code matching show the 20% discount function
function promoCodeUpdate(totalPriceFooterId, couponCode){
    
    const totalCostId = document.getElementById(totalPriceFooterId);
    // function call Total calculation and store total price
    const totalPricePromo = totalcostUpdateCalculation();
  
    const promoInputField = document.getElementById('promo-input');
    // Matching the promo code from input value
    if(promoInputField.value == couponCode){
        
        totalCostId.innerText = totalPricePromo-((totalPricePromo*20)/100);
    }
    // Clear the input field value
    promoInputField.value='';
}

// Click handler for 8GB unified (memory)
document.getElementById('eight-gb-memory').addEventListener('click',function(){
    costUpdate('memory-cost',0);
});

// Click handler for 16GB unified (memory)
document.getElementById('sixteen-gb-memory').addEventListener('click',function(){
    costUpdate('memory-cost',180);
});

// Click handler for 256GB SSD (storage)
document.getElementById('storage-256-gb').addEventListener('click',function(){
    costUpdate('storage-cost',0);
});

// Click handler for 512GB SSD (storage)
document.getElementById('storage-512-gb').addEventListener('click',function(){
    costUpdate('storage-cost',100);
});

// Click handler for 1TB SSD (storage)
document.getElementById('storage-1-tb').addEventListener('click',function(){
    costUpdate('storage-cost',180);
});

// Click handler for FREE Prime (delivery)
document.getElementById('delivery-aug-25').addEventListener('click',function(){
    costUpdate('delivery-cost',0);
   
});

// Click handler for $20 Charge (delivery)
document.getElementById('delivery-aug-21').addEventListener('click',function(){
    costUpdate('delivery-cost',20);
   
});

// Click handler for Promo code (apply)
document.getElementById('promo-code-btn').addEventListener('click',function(){
    promoCodeUpdate('total-price-footer','stevekaku');
});
