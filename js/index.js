console.log('hello');

//let find every class add event in each class
const getSeats = document.getElementsByClassName('seat');
let totalPrice = 0;
for(let seat of getSeats){
    // console.log(seat);
    seat.addEventListener('click', function(e){
        //disable seats
        let initialSeatLeft = document.getElementById('seats-left')

        initialSeatLeft.innerText = decressValue(parseInt(initialSeatLeft.innerText));
        seat.disabled = true;
        if(parseInt(initialSeatLeft.innerText) === 36){
            btnDisableMaker();
            
        }
        //set bg & text color for selected seats
        seat.style.backgroundColor = '#1dd100';
        seat.style.color = 'white';

        //total number of booking seat;
        let bookingSeat = document.getElementById('booking-seat');
        bookingSeat.innerText = incressValue(parseInt(bookingSeat.innerText));
        bookingSeat.style.backgroundColor = '#1dd100';
        bookingSeat.style.color = 'white';


        const liContainer = document.getElementById('li-container');
        
        const li = document.createElement('li');
 
        const p1 = document.createElement('p');
        p1.innerText = seat.innerText;
        const p2 = document.createElement('p');
        p2.innerText = 'Economy';
        const p3 = document.createElement('p');
        p3.innerText = 550;
        let p3Value = parseInt(p3.innerText);

        li.appendChild(p1);
        li.appendChild(p2);
        li.appendChild(p3);

        liContainer.appendChild(li)

//coupon and discount

        let totalCostElement = document.getElementById('total-price');
        let grandCostElement = document.getElementById('grand-total');

        let totalTicketPrice = addPrice(p3Value);
        totalCostElement.innerText = totalTicketPrice.toString();
        let totalCost = parseFloat(totalCostElement.innerText);

        // Set the initial grand total cost
        let totalGrandCost = totalCost;
        grandCostElement.innerText = totalGrandCost.toString();

        const removeDisabledAttribute = document.getElementById('apply');
        const applyCoupon = document.getElementById('any-coupon');
        const couponField = document.getElementById('coupon-field');

        removeDisabledAttribute.setAttribute('disabled', 'true');

        applyCoupon.addEventListener('keyup', function(e) {
            if ((applyCoupon.value === 'NEW15' || applyCoupon.value === 'Couple 20') && (parseInt(initialSeatLeft.innerText) === 36)) {
                removeDisabledAttribute.removeAttribute('disabled');
            } else {
                removeDisabledAttribute.setAttribute('disabled', 'true');
            }
        });

        removeDisabledAttribute.addEventListener('click', function(e) {
            if (applyCoupon.value === 'NEW15') {
                // 15% discount
                let discount = 2200 * 0.15;// sorry, koyek ghonta somoy nosto koreo variable diye total price hisab korte na peye evabe sorasori likhe diyechi... ami asha korchi ei byaparta recap korte parbo InShaAllah. apatoto matha kaj korchena... Sorry.
                let totalDiscount = 2200 - discount;

                applyCoupon.value = '';

                const discountPrice = document.getElementById('discount-price');
                const li2 = document.createElement('li');
                const discountP1 = document.createElement('p');
                discountP1.innerText = 'Total Discount Price';
                const discountP2 = document.createElement('p');
                discountP2.innerText = discount;

                li2.appendChild(discountP1);
                li2.appendChild(discountP2);
                discountPrice.appendChild(li2);
                couponField.classList.add('hidden');

                totalGrandCost = totalDiscount;
                grandCostElement.innerText = totalGrandCost.toString();
            } else if (applyCoupon.value === 'Couple 20') {
                // 20% discount
                let discount = 2200 * 0.20;
                let totalDiscount = 2200 - discount;

                applyCoupon.value = '';

                const discountPrice = document.getElementById('discount-price');
                const li2 = document.createElement('li');
                const discountP1 = document.createElement('p');
                discountP1.innerText = 'Total Discount Price';
                const discountP2 = document.createElement('p');
                discountP2.innerText = discount;

                li2.appendChild(discountP1);
                li2.appendChild(discountP2);
                discountPrice.appendChild(li2);
                couponField.classList.add('hidden');

                totalGrandCost = totalDiscount;
                grandCostElement.innerText = totalGrandCost.toString();
            } else {
                applyCoupon.value = ''; 
            }
        });
    })
}

function addPrice(price){
    return totalPrice = totalPrice + price;
}

function decressValue(id){
    return id -= 1;
}
function incressValue(value){
    return value += 1;
}

function btnDisableMaker(){
    const getSeats = document.getElementsByClassName('seat');
    for(let seat of getSeats){
        seat.disabled = true;
    }
}

const phoneNumberInput = document.getElementById('phone-number');
phoneNumberInput.value = '';

const nextButton = document.getElementById('next-btn');
nextButton.setAttribute('disabled', 'true');

phoneNumberInput.addEventListener('keyup', function(e) {
    const phoneNumber = phoneNumberInput.value;
    const length = phoneNumber.length;
    if (length === 11 && !isNaN(parseInt(phoneNumber))) {
        nextButton.removeAttribute('disabled');
    } else {
        nextButton.setAttribute('disabled', 'true');
    }
});
