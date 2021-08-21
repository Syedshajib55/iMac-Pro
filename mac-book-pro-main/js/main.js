//Memory Cost
function updateMemoryCost(memory){
	const extraMemory = document.getElementById('extra-memory');
	if(memory == 16){
		extraMemory.innerText = 180;
	}
	else{
		extraMemory.innerText = 0;
	}
	updateTotal();
}

//Storage Cost
function updateStorageCost(storage){
	const extraStorage = document.getElementById('extra-storage');
	if(storage == 256){
		extraStorage.innerText = 0;
	}
	else if(storage == 512){
		extraStorage.innerText = 100;
	}
	else{
		extraStorage.innerText = 180;
	}
	updateTotal();
}

//Delivery Cost
function updateDeliveryCost(deliveryType){
	const deliveryCost = document.getElementById('delivery-cost');
	if(deliveryType == 'normal'){
		deliveryCost.innerText = 0;
	}
	else {
		deliveryCost.innerText = 20;
	}
	updateTotal();
}

//Update Total Price
function updateTotal(){
	const basePrice = 1299;
	let memoryCost =  parseInt (document.getElementById('extra-memory').innerText );
	let storageCost = parseInt(document.getElementById('extra-storage').innerText);
	let deliveryCost = parseInt(document.getElementById('delivery-cost').innerText);

	const totalPrice = memoryCost + storageCost + deliveryCost + basePrice ;

	//Set Total Price
	document.getElementById('total-cost').innerText = totalPrice;
	document.getElementById('grand-total').innerText = totalPrice;
}

//Update On Coupon Apply
function applyCoupon(){
	//Getting Total Cost
	const totalPrice = parseInt(document.getElementById('total-cost').innerText);

    // Getting input value
    const promoText = document.getElementById('promo-field').value;

    // Clearing input field
    document.getElementById('promo-field').value = "";

    // Promo Code Check
    if (promoText == "stevekaku") {
        const priceAfterPromo = totalPrice - totalPrice / 5;
        document.getElementById('grand-total').innerText = parseFloat(priceAfterPromo);
    }
}

// Memory Button 
document.getElementById('memory-8gb').addEventListener('click',function(){
	updateMemoryCost(8);
});
document.getElementById('memory-16gb').addEventListener('click',function(){
	updateMemoryCost(16);
});

// Storage Button 
document.getElementById('storage-256gb').addEventListener('click',function(){
	updateStorageCost(256);
});
document.getElementById('storage-512gb').addEventListener('click',function(){
	updateStorageCost(512);
});
document.getElementById('storage-1TB').addEventListener('click',function(){
	updateStorageCost(1);
});

//Delivery Button
document.getElementById('normal-delivery').addEventListener('click',function(){
	updateDeliveryCost('normal');
});
document.getElementById('early-delivery').addEventListener('click',function(){
	updateDeliveryCost('early');
});