// let age = 15;

// let drivingLicense = false;

// if (age >= 18) {
//   if (drivingLicense === true) {
//     console.log("you can drive vehicle");
//   } else {
//     console.log("you have to register for driving license");
//   }
// } else {
//   console.log("you are not eligible for driving car");
// }

// let age = 20;
// let marks = 65;
// let entranceExam = true;

// if (age >= 18) {
//     if (marks >= 60) {
//         if (entranceExam === true) {
//             console.log("Admission Confirmed");
//         } else {
//             console.log("Entrance Exam Required");
//         }
//     } else {
//         console.log("Marks are too low");
//     }
// } else {
//     console.log("Not Eligible Due to Age");
// }

// let isLoggedIn = true;
// let cartAmount = 2500;
// let hasCoupon = false;

// if (isLoggedIn === true) {
//   if (cartAmount >= 2000) {
//     if (hasCoupon === true) {
//       console.log("20% Discount Applied");
//     } else {
//         console.log("10% Discount Applied")
//     };
//   } else {
//     console.log("Add More Products");
//   }
// } else {
//   console.log("Please Login First");
// }

// let pinEntered = true;
// let accountBalance = 5000;
// let withdrawAmount = 3000;

// if(pinEntered === true){
//     if(withdrawAmount > 0){
//         if(accountBalance >= withdrawAmount){
//             console.log ("Withdrawal Successful")
//         }else{
//             console.log("Insufficient Balance")
//         }
//     }else{
//         console.log("Invalid Amount")
//     }
// }else{
//     console.log("Incorrect PIN")
// }

let isLoggedIn = true;
let roomAvailable = true;
let hasEnoughMoney = false;

if (isLoggedIn === true) {
  if (roomAvailable === true) {
    if (hasEnoughMoney === true) {
      console.log("Room Booked Successfully");
    } else {
      console.log("Insufficient Money");
    }
  } else {
    console.log("No Rooms Available");
  }
}else{
    console.log("Please Login First")
}


let consumerRegistered = true;
let units = 250;
let paymentDone = false;

if (consumerRegistered) {
    if (units > 0) {
        if (paymentDone) {
            console.log("Electricity bill payment successful");
        } else {
            console.log("Please complete your electricity bill payment");
        }
    } else {
        console.log("No electricity units consumed");
    }
} else {
    console.log("Consumer is not registered");
}