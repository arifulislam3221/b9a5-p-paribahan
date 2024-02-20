console.log('hello');
// const a1 = document.getElementsByClassName('seat').addEventListener('click', function(e){
//     for(let seats of a1){
//         console.log(seats);
//     }
//     // a1.style.backgroundColor = 'green';
    
    // const seatsLeft = document.getElementById('seats-left');
//     // // console.log();
//     // // ;
    // let totalSeatLeft = parseInt(seatsLeft.innerText) - 1;
    // // totalSeatLeft - 1;
    // console.log(totalSeatLeft);
//     // // let totalSeat = seatsLeft.innerText;
    
//     // // for(let i = 0; i < parseInt(seatsLeft.innerText); i++){
//     // //     let totalSeats = totalSeatLeft - i;
//     // //     console.log(totalSeats);
//     // // }
//     // console.log('hi');
// })

// const seats = document.getElementsByClassName('seat');
// for(let seat of seats){
//     // console.log(seat);
//     seat.addEventListener('click', function(e){
//         seat.style.backgroundColor = '#1dd100';
//         const seatsLeft = document.getElementById('seats-left');
//         let totalSeatLeft = parseInt(seatsLeft.innerText) - 1;
//     // totalSeatLeft - 1;
//     console.log(totalSeatLeft);

//     })
// }
// const seats = document.getElementsByClassName('seat');

// for (let seat of seats) {
//     seat.addEventListener('click', function(e) {
//         if (!seat.classList.contains('booked')) { // Check if the seat is available
//             seat.style.backgroundColor = '#1dd100'; // Change background color
//             const seatLeft = document.getElementById('seats-left');
//             let totalSeatLeft = parseInt(seatLeft.innerText) - 1;
//             seatLeft.innerText = totalSeatLeft; // Update the total number of seats left
//         }
//     });
// }

const getSeats = document.getElementsByClassName('seat');
let totalPrice = 0;
for(let seat of getSeats){
    // console.log(seat);
    seat.addEventListener('click', function(e){
        
        seat.style.backgroundColor = '#1dd100';

        // let bbc = incressValue()
        // console.log(bbc);
//total number of booking seat;
        let bookingSeat = document.getElementById('booking-seat');
        bookingSeat.innerText = incressValue(parseInt(bookingSeat.innerText));

        // let setSeatNumber = document.getElementById('seat-number1');
        // setSeatNumber.innerText = seat.innerText;
        
        // const bookingSeatNumber = document.getElementsByClassName('seat-number')
        // for(let bookingSeats of bookingSeatNumber){
        //     // console.log(bookingSeats);
        //     // let setSeatNumber = document.getElementById('seat-number1');
        //     bookingSeats.innerText = seat.innerText;
        //     // const isVisible = bookingSeats.classList.remove('hidden');
        //     let tableRow = document.getElementsByClassName('tr');
        //     for(let row of tableRow){
        //         row.classList.remove('hidden');
        //     }
        //     // const removeHidden = bookingSeats.classList.remove('hidden');
        //     // const removeHiddenClass = tableRow.classList.remove('hidden')

        // }
        const liContainer = document.getElementById('li-container');
        const li = document.createElement('li');

        const p1 = document.createElement('p');
        p1.innerText = seat.innerText;
        const p2 = document.createElement('p');
        p2.innerText = 'Economy';
        const p3 = document.createElement('p');
        p3.innerText = 550;
        let p3Value = parseInt(p3.innerText);
        // console.log(typeof p3Value);

        li.appendChild(p1);
        li.appendChild(p2);
        li.appendChild(p3);

        liContainer.appendChild(li)


        // const totalPrice = 

        // let addCost = p3Value;
        // console.log(addCost + 1);
        // let totalCost = document.getElementById('total-price').innerText;
        // parseFloat(totalCost);
        let totalCost = parseInt(document.getElementById('total-price').innerText);
        let abc = addPrice(p3Value);
        totalCost.innerText = abc.innerText;
        console.log(totalCost);
        // addPrice(p3Value);



        //// let addTotalPrice = document.getElementById('total-price').innerText;
        // let addTotalPrice = ;
        // let totalCost = parseInt(document.getElementById('total-price').innerText);

        // let setTotalvalue = addPrice(p3Value);
        // totalCost.innerText = setTotalvalue.innerText;
        // console.log(totalCost);

        // console.log(addPrice(p3Value))
        // console.log(parseInt(p3.innerText));
        // totalCost += p3Value;  
        // console.log(totalCost);
        // totalCost = totalCost.innerText;

        // const convertedTotal = parseInt(totalCost);
        // document.getElementById('total-price').innerText = convertedTotal + parseInt(totalCost);



        // let initialSeatLeft = document.getElementById('seats-left')
        // initialSeatLeft.innerText = decressValue(parseInt(initialSeatLeft.innerText));
                // bookingSeat += 1;
                // incressValue(parseInt(document.getElementById('booking-seat').innerText)) = bookingSeat.innerText;
                // incressValue(bookingSeat) = bookingSeat.innerText;
                // // console.log(bookingSeat);
                // console.log(incressValue(bookingSeat.innerText));
                // console.log(bb);


        // countSeatBooking();
        // const seatName = getSeats.innerText;
        const isBooked = seat.classList.add('booked');
        const seatNumber = seat.classList.add(seat.innerText);

        


        let initialSeatLeft = document.getElementById('seats-left')
        // const initialSeatLeftNumber = parseInt(initialSeatLeft);
        // let currentSeat = parseInt(initialSeatLeft.innerText);
        // let a = decressValue(currentSeat);
        // let a = decressValue(parseInt(initialSeatLeft.innerText));
        initialSeatLeft.innerText = decressValue(parseInt(initialSeatLeft.innerText));
        seat.disabled = true;
        if(parseInt(initialSeatLeft.innerText) === 36){
            btnDisableMaker();
            // seat.forEach(function(seat) {
            //     // if (!seat.disabled) {
            //     //     seat.disabled = true;
            //     // }
            // });
        }
        // if (clickedCount === 4) {
        //     buttons.forEach(function(btn) {
        //         if (!btn.disabled) {
        //             btn.disabled = true;
        //         }
        //     });
        // }
        // console.log(a);

        // for(let a = currentSeat; a > 0; a--){
        //     totalSeatNumber = a;
        //     // if () {
                
        //     // }
        //     console.log(totalSeatNumber);
        // }
        // for
        // totalSeatNumber = totalSeat - 1;
        // console.log(totalSeatNumber);
        
        // console.log(seat);
        // if((seat.classList.contains === isBooked ) && (seat.classList.contains === seatNumber)){
        //     console.log('hey');
        // }
        // else{
        //     console.log('why?')
        // }
    })
}
// let setTotalSeat = 40;
// const seatLeft = document.getElementById('seat-left');
// function countSeatBooking(){
//     const getSeats = document.getElementsByClassName('seat');
//     // let seatBooking = 0;
//     for(let seat of getSeats){
//         seat.addEventListener('click', function(e){
            
//             let bookingSeat = parseInt(document.getElementById('booking-seat'));
            
//             // let bookingSeat = document.getElementById('booking-seat');
//             bookingSeat.innerText += 1;
//             // let totalSeatBookingNumber =  parseInt(bookingSeat.innerText) += 1;
//             // let totalSeatBookingNumber = bookingSeat.innerText;
//             // bookingSeat.innerText = 
//             // const seatBookngNumber = 
//         })
//     }
// }
function addPrice(price){
    return totalPrice = totalPrice + price;
}

function decressValue(id){
    return id -= 1;
}
function incressValue(value){
    return value += 1;
}
// let bb = incressValue(0)
// console.log(bb);

function btnDisableMaker(){
    const getSeats = document.getElementsByClassName('seat');
    for(let seat of getSeats){
        seat.disabled = true;
    }
}

// let abc = btnDisableMaker();
// console.log(abc);

// let a = decressValue(setTotalSeat);
// console.log(a);

// const bookingSeatNumber = document.getElementsByClassName('seat-number')
//         for(let bookingSeats of bookingSeatNumber){
//             console.log(bookingSeats);
//         }