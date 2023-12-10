//Variable available to all codes
let roomChoice;
let costPerRoom;
let numRooms;
let costRooms;
let roomCosts;
let noOfKids5;
let mealsCost;
let extraBedCost;
let extraBedValue;
let wifiAvailibility;
let extraView;
let PromoValue;
let PromoOff;
let payment;
let loyaltyPoints;
let count;
let overall;
let orderId;
let overallLoyalty;
    //for adventure booking
let numSlAdults;
let costSlAdults;
let adventureCost;
let numSlChildren;
let costSlChildren;
let numForeignAdults;
let costForeignAdults;
let numForeignChildren;
let costForeignChildrenAd;
let chargeAdult;
let chargeKid;
let adultsGuideNum;
let guideCost;
let adultsGuideCost;
let childrenGuideNum;
let childrenGuideCost;
let paymentAdv;
let guideValue;
//Get reference to interactive elements
     // for room booking
currentBookingRoom = document.getElementById("-currentBooking");
costCurrentRoom = document.getElementById("-costOfCurrent");
overallBookingRoom = document.getElementById("-overallBooking");
costOverallRoom = document.getElementById("-costOfOverall");
checkInRoom = document.getElementById("checkInDate");
checkInRoomTable = document.getElementById("-checkInDate");
checkOutRoom = document.getElementById("checkOutDate");
checkOutRoomTable = document.getElementById("-checkOutDate");
fullNameRoom = document.getElementById("fullName");
fullNameRoomTable = document.getElementById("-fullName");
nicRoom = document.getElementById("nic");
nicRoomTable = document.getElementById("-nic");
nationalityRoom = document.getElementById("nationality");
nationalityRoomTable = document.getElementById("-nationality");
cityRoom = document.getElementById("city");
cityRoomTable = document.getElementById("-city");
mobileRoom = document.getElementById("mobile");
mobileRoomTable = document.getElementById("-mobile");
emailRoom = document.getElementById("email");
emailRoomTable = document.getElementById("-email");
choiceRoom = document.getElementsByName("choice");
choiceRoomTable = document.getElementById("-choiceOfRooms");
costPerRoomTable = document.getElementById("-costPerRoom");
totalBillRoom = document.getElementById("-totalBill");
noOfRooms = document.getElementById("numberOfRooms");
noOfRoomsTable = document.getElementById("-numberOfRooms");
totalRoomCostTable = document.getElementById("-costOfTotalRooms");
noOfSlAdultsRoom = document.getElementById("numberOfSlAdults");
noOfSlAdultsRoomTable = document.getElementById("-numberOfSlAdults");
noOfSlChildrenRoom = document.getElementById("numberOfSlChildren");
noOfSlChildrenRoomTable = document.getElementById("-numberOfSlChildren");
noOfForeignAdultsRoom = document.getElementById("numberOfForeignAdults");
noOfForeignAdultsRoomTable = document.getElementById("-numberOfForeignAdults");
noOfForeignChildrenRoom = document.getElementById("numberOfForeignChildren");
noOfForeignChildrenRoomTable = document.getElementById("-numberOfForeignchildren");
noOfKids5Room = document.getElementById("numberOfKidsAbove5YearsOfAge");
noOfKids5RoomTable = document.getElementById("-numberOfKids5");
mealsCostTable = document.getElementById("-mealsCharge");
arrivalTimeRoom = document.getElementById("arrivalTime");
arrivalTimeRoomTable = document.getElementById("-arrivalTime");
leavingTimeRoom = document.getElementById("leavingTime");
leavingTimeRoomTable = document.getElementById("-leavingTime");
durationOfTheStayRoom = document.getElementById("durationOfTheStay");
durationOfTheStayRoomTable = document.getElementById("-durationOfTheStay");
extraBedRoom = document.getElementsByName("extraBed");
extraBedRoomTable = document.getElementById("-extraBed");
extraBedChargeTable = document.getElementById("-extraBedCharge");
wifiRoom = document.getElementById("wifi");
wifiRoomTable = document.getElementById("-wifi");
extraRequirementRoom = document.getElementsByName("extraRequirements");
ViewTable = document.getElementById("-poolGarden");
promoCodeRoom = document.getElementById("promoCode");
promoCodeRoomTable = document.getElementById("-promoCode");
promoOffTable = document.getElementById("-promoCodeOff");
paymentMethodRoom = document.getElementsByName("paymentMethod");
paymentMethodRoomTable = document.getElementById("-paymentMethod");
btnBookNow = document.getElementById("roomButton");
outputRoom = document.getElementById("roomOutput");
btnLoyalty = document.getElementById("loyaltyButton");
outputLoyalty = document.getElementById("loyaltyOutput");
btnFavorites = document.getElementById("favoriteButton");
    //for adventure booking
currentBookingAdventure = document.getElementById("--currentBooking");
costCurrentAdventure = document.getElementById("--costOfCurrent");
overallBookingAdventure = document.getElementById("--overallBooking");
costOverallAdventure = document.getElementById("--costOfOverall");
totalBillAdventure = document.getElementById("--totalBill")
checkInAdventure = document.getElementById("checkindate");
checkInAdventureTable = document.getElementById("--checkInDate");
checkOutAdventure = document.getElementById("checkoutdate");
checkOutAdventureTable = document.getElementById("--checkOutDate");
fullNameAdventure = document.getElementById("fullname");
fullNameAdventureTable = document.getElementById("--fullName");
nicAdventure = document.getElementById("Nic");
nicAdventureTable = document.getElementById("--nic");
nationalityAdventure = document.getElementById("Nationality");
nationalityAdventureTable = document.getElementById("--nationality");
cityAdventure = document.getElementById("City");
cityAdventureTable = document.getElementById("--city");
mobileAdventure = document.getElementById("Mobile");
mobileAdventureTable = document.getElementById("--mobile");
emailAdventure = document.getElementById("Email");
emailAdventureTable = document.getElementById("--email");
costPerSlAdultTable = document.getElementById("--costPerSlAdult");
costPerSlChildTable = document.getElementById("--costPerSlChild");
costPerForeignAdultTable = document.getElementById("--costPerForeignAdult");
costPerForeignChildTable = document.getElementById("--costPerForeignChild");
noOfSlAdults = document.getElementById("NumberOfSlAdults");
noOfSlAdultsTable = document.getElementById("--noSlAdults");
totalCostSlAdultsTable = document.getElementById("--costSlAdults");
noOfSlChildren = document.getElementById("NumberOfSlChildren");
noOfSlChildrenTable = document.getElementById("--noSlChildren");
totalCostSlChildrenTable = document.getElementById("--costSlChildren");
noOfForeignadultsAd = document.getElementById("NumberOfForeignAdults");
noOfForeignAdultsTable = document.getElementById("--noForeignAdults");
totalCostForeignAdultsTable = document.getElementById("--costForeignAdults");
noOfForeignChildrenAd = document.getElementById("NumberOfForeignChildren");
noOfForeignChildrenTable = document.getElementById("--noForeignChildren");
totalCostForeignChildrenTable = document.getElementById("--costForeignChildren");
guideChoice = document.getElementsByName("NeedOfGuidanceForDiving");
guidePerAdultTable = document.getElementById("--guidePerAdult");
guideAdultCharge = document.getElementById("--guideChargeAdult");
guidePerKidTable = document.getElementById("--guidePerKid");
guideKidCharge = document.getElementById("--guideChargeKids");
numAdultsGuide = document.getElementById("--adultsGuidance");
numChildrenGuide = document.getElementById("--childrenGuidance");
numAdultsGuideForm = document.getElementById("NumberOfAdults1");
numChildrenGuideForm = document.getElementById("NumberOfChildren1");
arrivalTimeAdventure = document.getElementById("ArrivalTime");
arrivalTimeAdventureTable = document.getElementById("--arrivalTime");
leavingTimeAdventure = document.getElementById("LeavingTime");
leavingTimeAdventureTable = document.getElementById("--leavingTime");
durationOfTheStayAdventure = document.getElementById("DurationOfTheStay");
durationOfTheStayAdventureTable = document.getElementById("--durationOfTheStay");
paymentMethodAdventure = document.getElementsByName("PaymentMethod");
paymentMethodAdventureTable = document.getElementById("--paymentMethod");
btnAdventure = document.getElementById("adventureButton");
outAdventure = document.getElementById("adventureOutput");
//Listen for events
window.addEventListener("load", init);
    // for room booking
checkInRoom.addEventListener("change", checkDateRoom);
checkOutRoom.addEventListener("change", checkDateRoom);
fullNameRoom.addEventListener("change", changeText);
nicRoom.addEventListener("change", changeText);
nationalityRoom.addEventListener("change", changeText);
cityRoom.addEventListener("change", changeText);
mobileRoom.addEventListener("change", changeText);
emailRoom.addEventListener("change", changeText);
choiceRoom.forEach(item => item.addEventListener("change", changeRoom));
noOfRooms.addEventListener("change", roomCost);
noOfSlAdultsRoom.addEventListener("change",changeText);
noOfSlChildrenRoom.addEventListener("change",changeText);
noOfForeignAdultsRoom.addEventListener("change",changeText);
noOfForeignChildrenRoom.addEventListener("change",changeText);
noOfKids5Room.addEventListener("change", kidsFive);
arrivalTimeRoom.addEventListener("change", time);
leavingTimeRoom.addEventListener("change", time);
durationOfTheStayRoom.addEventListener("change", time);
extraBedRoom.forEach(item => item.addEventListener("change",extraBed));
wifiRoom.addEventListener("change", wifi);
extraRequirementRoom.forEach(item => item.addEventListener("change", extra));
promoCodeRoom.addEventListener("change", promo);
paymentMethodRoom.forEach(item => item.addEventListener("change", pay));
btnBookNow.addEventListener("click",roomOutput);
btnLoyalty.addEventListener("click", loyalty);
btnFavorites.addEventListener("click", favorite);
   // for adventure booking
checkInAdventure.addEventListener("change", checkDateRoom);
checkOutAdventure.addEventListener("change", checkDateRoom);
fullNameAdventure.addEventListener("change", changeText);
nicAdventure.addEventListener("change", changeText);
nationalityAdventure.addEventListener("change", changeText);
cityAdventure.addEventListener("change", changeText);
mobileAdventure.addEventListener("change", changeText);
emailAdventure.addEventListener("change", changeText);
noOfSlAdults.addEventListener("change", people);
noOfSlChildren.addEventListener("change", people);
noOfForeignadultsAd.addEventListener("change", people);
noOfForeignChildrenAd.addEventListener("change", people);
guideChoice.forEach(item => item.addEventListener("change", guide));
numAdultsGuideForm.addEventListener("change", guideCosts);
numChildrenGuideForm.addEventListener("change",guideCosts);
arrivalTimeAdventure.addEventListener("change", time);
leavingTimeAdventure.addEventListener("change", time);
durationOfTheStayAdventure.addEventListener("change", time);
paymentMethodAdventure.forEach(item => item.addEventListener("change", paymentAd));
btnAdventure.addEventListener("click", adventure);
//Implement event handlers
function init(){
    roomChoice = "";
    costPerRoom = 0.00;
    numRooms = 0;
    roomCosts = costPerRoom*numRooms;
    noOfKids5 = 0;
    mealsCost = 0.00;
    extraBedCost = 0.00;
    extraBedValue = "";
    wifiAvailibility = "Not available";
    extraView = "";
    PromoOff = (roomCosts+mealsCost+extraBedCost)*5/100;
    payment = "";
    loyaltyPoints = 0;
    count = 0;
    overall = 0;
    orderId = 2023;
    overallLoyalty = 0;
    costRooms = roomCosts+mealsCost+extraBedCost-PromoOff;
    currentBookingRoom.innerText = ``;
    overallBookingRoom.innerText = ``;
    costCurrentRoom.innerText = `0`;
    costOverallRoom.innerText = `0`;
    wifiRoomTable.innerText = `${wifiAvailibility}`;
    promoCodeRoomTable.innerText = `Not typed`;
    // for adventure booking
    numSlAdults = 0;
    costSlAdults = 0.00;
    numSlChildren = 0;
    costSlChildren = 0.00;
    numForeignAdults = 0;
    costForeignAdults = 0.00;
    numForeignChildren = 0;
    costForeignChildrenAd = 0.00;
    chargeAdult = 0.00;
    chargeKid = 0.00;
    guideValue = "";
    adultsGuideNum = (numAdultsGuideForm.value);
    childrenGuideNum = (numChildrenGuideForm.value);
    childrenGuideCost = chargeKid*childrenGuideNum;
    adultsGuideCost = chargeAdult*adultsGuideNum;
    guideCost = adultsGuideCost+childrenGuideCost;
    adventureCost = costSlAdults+costSlChildren+costForeignAdults+costForeignChildrenAd+guideCost;
    costCurrentAdventure.innerText = `0`;
    costOverallAdventure.innerText = `0`;
    costPerSlAdultTable.innerText = `5000.00`;
    costPerSlChildTable.innerText = `2000.00`;
    costPerForeignAdultTable.innerText = `10000.00`;
    costPerForeignChildTable.innerText = `5000.00`;
    guidePerAdultTable.innerText = `1000.00`;
    guidePerKidTable.innerText = `500.00`;
}
function checkDateRoom(){
    let checkInDateRoom = checkInRoom.value;
    checkInRoomTable.innerText = `${checkInDateRoom}`;
    let checkOutDateRoom = checkOutRoom.value;
    checkOutRoomTable.innerText = `${checkOutDateRoom}`;
    //for adventures
    let checkInDateAdventure = checkInAdventure.value;
    checkInAdventureTable.innerText = `${checkInDateAdventure}`;
    let checkOutDateAdventure = checkOutAdventure.value;
    checkOutAdventureTable.innerText = `${checkOutDateAdventure}`;
}
function changeText(){
    let nameForm = fullNameRoom.value;
    fullNameRoomTable.innerText = `${nameForm}`;
    let nicForm = (nicRoom.value);
    nicRoomTable.innerText = `${nicForm}`;
    let nationalityForm = (nationalityRoom.value);
    nationalityRoomTable.innerText = `${nationalityForm}`;
    let cityForm = (cityRoom.value);
    cityRoomTable.innerText = `${cityForm}`;
    let mobileForm = (mobileRoom.value);
    mobileRoomTable.innerText = `${mobileForm}`;
    let emailForm = (emailRoom.value);
    emailRoomTable.innerText = `${emailForm}`;
    let slAdults = (noOfSlAdultsRoom.value);
    noOfSlAdultsRoomTable.innerText = `${slAdults}`;
    let slChildren = (noOfSlChildrenRoom.value);
    noOfSlChildrenRoomTable.innerText = `${slChildren}`;
    let foreignAdults = (noOfForeignAdultsRoom.value);
    noOfForeignAdultsRoomTable.innerText = `${foreignAdults}`;
    let foreignChildren = (noOfForeignChildrenRoom.value);
    noOfForeignChildrenRoomTable.innerText = `${foreignChildren}`;

    //for adventures
    let nameFormAd = fullNameAdventure.value;
    fullNameAdventureTable.innerText = `${nameFormAd}`;
    let nicFormAd = (nicAdventure.value);
    nicAdventureTable.innerText = `${nicFormAd}`;
    let nationalityFormAd = (nationalityAdventure.value);
    nationalityAdventureTable.innerText = `${nationalityFormAd}`;
    let cityFormAd = (cityAdventure.value);
    cityAdventureTable.innerText = `${cityFormAd}`;
    let mobileFormAd = (mobileAdventure.value);
    mobileAdventureTable.innerText = `${mobileFormAd}`;
    let emailFormAd = (emailAdventure.value);
    emailAdventureTable.innerText = `${emailFormAd}`;
}
function changeRoom(){
    if (this.value == "single"){
        roomChoice = "Single";
        costPerRoom = 25000.00;
      
    } else if (this.value == "double"){
        roomChoice = "Double";
        costPerRoom = 35000.00;
        
    } else {
        roomChoice = "Triple";
        costPerRoom = 40000.00;
    }
    numRooms = noOfRooms.value;
    roomCosts = costPerRoom*numRooms;
    costRooms = roomCosts+mealsCost+extraBedCost-PromoOff;
    choiceRoomTable.innerText = `${roomChoice}`;
    noOfRoomsTable.innerText = `${numRooms}`;
    costPerRoomTable.innerText = `${costPerRoom.toFixed(2)}`;
    totalRoomCostTable.innerText = `${roomCosts.toFixed(2)}`;
    promoOffTable.innerText = `${PromoOff.toFixed(2)}`;
    costCurrentRoom.innerText = `${costRooms.toFixed(2)}`;
    totalBillRoom.innerText = `${costRooms.toFixed(2)}`;
    currentBookingRoom.innerText = `1`;
}
function roomCost(){
    numRooms = noOfRooms.value;
    roomCosts = costPerRoom*numRooms;
    costRooms = roomCosts+mealsCost+extraBedCost-PromoOff;
    noOfRoomsTable.innerText = `${numRooms}`;
    costPerRoomTable.innerText = `${costPerRoom.toFixed(2)}`;
    totalRoomCostTable.innerText = `${roomCosts.toFixed(2)}`;
    promoOffTable.innerText = `${PromoOff.toFixed(2)}`;
    costCurrentRoom.innerText = `${costRooms.toFixed(2)}`;
    totalBillRoom.innerText = `${costRooms.toFixed(2)}`;
}
function kidsFive(){
    noOfKids5 = (noOfKids5Room.value);
    noOfKids5RoomTable.innerText =  `${noOfKids5}`;
    mealsCost = noOfKids5*5000;
    mealsCostTable.innerText =  `${mealsCost.toFixed(2)}`;
    costRooms = roomCosts+mealsCost+extraBedCost-PromoOff;
    promoOffTable.innerText = `${PromoOff.toFixed(2)}`;
    costCurrentRoom.innerText = `${costRooms.toFixed(2)}`;
    totalBillRoom.innerText = `${costRooms.toFixed(2)}`;
}
function time(){
    let arrivalTimeRoom1 = (arrivalTimeRoom.value);
    arrivalTimeRoomTable.innerText = `${arrivalTimeRoom1}`;
    let leavingTimeRoom1 = (leavingTimeRoom.value);
    leavingTimeRoomTable.innerText = `${leavingTimeRoom1}`;
    let durationRoom = (durationOfTheStayRoom.value);
    durationOfTheStayRoomTable.innerText = `${durationRoom}`;

    //for adventures
    let arrivalTimeAdventure1 = (arrivalTimeAdventure.value);
    arrivalTimeAdventureTable.innerText = `${arrivalTimeAdventure1}`;
    let leavingTimeAdventure1 = (leavingTimeAdventure.value);
    leavingTimeAdventureTable.innerText = `${leavingTimeAdventure1}`;
    let durationAdventure = (durationOfTheStayAdventure.value);
    durationOfTheStayAdventureTable.innerText = `${durationAdventure}`;
}
function extraBed(){
    if (this.value == "yes"){
        extraBedCost = 8000.00;
        extraBedValue = "Yes";
    } else{
        extraBedCost = 0.00;
        extraBedValue = "No";
    }
    extraBedRoomTable.innerText = `${extraBedValue}`;
    extraBedChargeTable.innerText = `${extraBedCost.toFixed(2)}`;
    costRooms = roomCosts+mealsCost+extraBedCost-PromoOff;
    promoOffTable.innerText = `${PromoOff.toFixed(2)}`;
    costCurrentRoom.innerText = `${costRooms.toFixed(2)}`;
    totalBillRoom.innerText = `${costRooms.toFixed(2)}`;
}
function wifi(){
    if (this.checked){
        wifiAvailibility = "Available";
    } else{
        wifiAvailibility = "Not available";
    }
    wifiRoomTable.innerText = `${wifiAvailibility}`;
}
function extra(){
    if (this.value == "poolView"){
        extraView = "Pool view";
    } else{
        extraView = "Garden view";
    }
    ViewTable.innerText = `${extraView}`;
}
function promo(){
    if (this.value == "Promo123"){
        PromoValue = "Valid";
        PromoOff = (roomCosts+mealsCost+extraBedCost)*5/100;
    } else if (this.value == ""){
        PromoValue = "Not typed"
        PromoOff = 0.00;
    }
     else{
        PromoValue = "Invalid";
        PromoOff = 0.00;
    }
    numRooms = noOfRooms.value;
    roomCosts = costPerRoom*numRooms;
    costRooms = roomCosts+mealsCost+extraBedCost-PromoOff;
    choiceRoomTable.innerText = `${roomChoice}`;
    noOfRoomsTable.innerText = `${numRooms}`;
    costPerRoomTable.innerText = `${costPerRoom.toFixed(2)}`;
    totalRoomCostTable.innerText = `${roomCosts.toFixed(2)}`;
    promoCodeRoomTable.innerText = `${PromoValue}`;
    promoOffTable.innerText = `${PromoOff.toFixed(2)}`;
    costCurrentRoom.innerText = `${costRooms.toFixed(2)}`;
    totalBillRoom.innerText = `${costRooms.toFixed(2)}`;
}
function pay(){
    if (this.value == "cash"){
        payment = "Cash";
    } else if (this.value == "card"){
        payment = "Card";
    } else{
        payment = "Cheque";
    }
    paymentMethodRoomTable.innerText = `${payment}`;
}
function roomOutput(){
    if (confirm(`Thank you for booking with Jetwing!!!\nYour order ID = ${orderId}\nType of rooms = ${roomChoice}\nCharge per room = Rs.${costPerRoom}\nNumber of rooms = ${numRooms}\nCost of total rooms = Rs.${roomCosts}\n--------------\nNumber of kids above 5 years of age = ${noOfKids5}\nMeals charge per kid above 5 years of age = Rs.5000\nTotal meals cost = Rs.${mealsCost}\n--------------\nExtra bed = ${extraBedValue}\nExtra bed charge = Rs.${extraBedCost}\n--------------\nPromo code = ${PromoValue}\nPromo off amount = Rs.${PromoOff}\n--------------\nYour total bill = Rs.${costRooms}\n--------------\nHave a nice day!!!`)){
          // increase overall booking count by 1
     count++;
     // increase overall booking cost
     overall += costRooms

     //Assigning order ID
     orderId++;
        outputRoom.innerText = `Thank you for booking with Jetwing!!!\nYour order ID = ${orderId}\nType of rooms = ${roomChoice}\nCharge per room = Rs.${costPerRoom}\nNumber of rooms = ${numRooms}\nCost of total rooms = Rs.${roomCosts}\n--------------\nNumber of kids above 5 years of age = ${noOfKids5}\nMeals charge per kid above 5 years of age = Rs.5000\nTotal meals cost = Rs.${mealsCost}\n--------------\nExtra bed = ${extraBedValue}\nExtra bed charge = Rs.${extraBedCost}\n--------------\nPromo code = ${PromoValue}\nPromo off amount = Rs.${PromoOff}\n--------------\nYour current total bill = Rs.${costRooms}\nYour overall booking bill = Rs.${overall}\n--------------\nHave a nice day!!!`;
       

    overallBookingRoom.innerText = `${count}`;
    costOverallRoom.innerText = `${overall.toFixed(2)}`;
    currentBookingRoom.innerText = ``;
    costCurrentRoom.innerText = `0`;
    if (numRooms > 3){
        loyaltyPoints = 20;
        overallLoyalty += loyaltyPoints;
         //empty array to store the loyalty points
        var loyalty = [];
        //Json object to store the loyalty points
        const jsonLoyalty = {"Number of rooms": numRooms, "Loyalty points": loyaltyPoints};
        // adding json object to loyalty array
        loyalty.push(jsonLoyalty);
        // adding loyalty array to local storage
        localStorage.setItem('Loyalty points', JSON.stringify(loyalty));

        console.log(localStorage);
    } else{
        loyaltyPoints = 0;
    }
    swal("Success!", "Your booking is reserved. Thank you!", "success");
    } else{
        outputRoom.innerText = `Please!!! click 'Ok' to book---`;
        swal("Sorry!", "Opps, something went wrong. Please try again.", "error");
    }
}
function loyalty(){
    outputLoyalty.innerText = `${overallLoyalty} points`;
}
function favorite(){
    if (confirm("Your order is added to favorites successfully click cancel to remove")){
    //array to store the order details
    var favorites = [];
    //json object to store the order details
    const jsonFavorite = {"fullname":fullNameRoom.value, "Email":emailRoom.value, "Type of rooms":roomChoice, "Cost per room":costPerRoom, "Number of rooms":numRooms, "Cost of total rooms":roomCosts, "Number of kids above 5 years of age":noOfKids5, "Total meals cost for kids above 5 years of age":mealsCost, "Extra bed charge":extraBedCost, "Promo off amount":PromoOff, "Cost of total current booking":costRooms};
    //adding json object to array
    favorites.push(jsonFavorite);
    //removing existing local storage details
    localStorage.removeItem(favorites);
    //adding favorites array to local storage
    localStorage.setItem('Add to favorite order details', JSON.stringify(favorites));
    swal("Success!", "Your order have been added to favorites. Thank you!", "success");
    } else{
        console.log("Unsuccessful!!!");
        swal("Sorry!", "Opps, something went wrong. Please try again.", "error");
    }
}
//function for adventure cost
function people(){
    numSlAdults = (noOfSlAdults.value);
    costSlAdults = numSlAdults*5000;

    numSlChildren = (noOfSlChildren.value);
    costSlChildren = numSlChildren*2000;

    numForeignAdults = (noOfForeignadultsAd.value);
    costForeignAdults = numForeignAdults*10000;

    numForeignChildren = (noOfForeignChildrenAd.value);
    costForeignChildrenAd = numForeignChildren*5000;

    
    adventureCost = costSlAdults+costSlChildren+costForeignAdults+costForeignChildrenAd+guideCost;
    noOfSlAdultsTable.innerText = `${numSlAdults}`;
    totalCostSlAdultsTable.innerText = `${costSlAdults.toFixed(2)}`;
    noOfSlChildrenTable.innerText = `${numSlChildren}`;
    totalCostSlChildrenTable.innerText = `${costSlChildren.toFixed(2)}`;
    noOfForeignAdultsTable.innerText = `${numForeignAdults}`;
    totalCostForeignAdultsTable.innerText = `${costForeignAdults.toFixed(2)}`;
    noOfForeignChildrenTable.innerText = `${numForeignChildren}`;
    totalCostForeignChildrenTable.innerText = `${costForeignChildrenAd.toFixed(2)}`;
    costCurrentAdventure.innerText = `${adventureCost.toFixed(2)}`;
    totalBillAdventure.innerText = `${adventureCost.toFixed(2)}`;
    currentBookingAdventure.innerText = `1`;
}
function guide(){
    if (this.value == "Yes"){
        chargeAdult = 1000;
        chargeKid = 500;
        guideValue = "Yes";
    } else {
        chargeAdult = 0;
        chargeKid = 0;
        guideValue = "No";
    }
    adultsGuideNum = (numAdultsGuideForm.value);
    adultsGuideCost = chargeAdult*adultsGuideNum;

    childrenGuideNum = (numChildrenGuideForm.value);
    childrenGuideCost = chargeKid*childrenGuideNum;

    guideCost = adultsGuideCost+childrenGuideCost;
    adventureCost = costSlAdults+costSlChildren+costForeignAdults+costForeignChildrenAd+guideCost;

    numAdultsGuide.innerText = `${adultsGuideNum}`;
    numChildrenGuide.innerText = `${childrenGuideNum}`;
    guideAdultCharge.innerText = `${adultsGuideCost.toFixed(2)}`;
    guideKidCharge.innerText = `${childrenGuideCost.toFixed(2)}`;
    costCurrentAdventure.innerText = `${adventureCost.toFixed(2)}`;
    totalBillAdventure.innerText = `${adventureCost.toFixed(2)}`;
}
function guideCosts(){
    adultsGuideNum = (numAdultsGuideForm.value);
    adultsGuideCost = chargeAdult*adultsGuideNum;

    childrenGuideNum = (numChildrenGuideForm.value);
    childrenGuideCost = chargeKid*childrenGuideNum;

    guideCost = adultsGuideCost+childrenGuideCost;
    adventureCost = costSlAdults+costSlChildren+costForeignAdults+costForeignChildrenAd+guideCost;

    numAdultsGuide.innerText = `${adultsGuideNum}`;
    numChildrenGuide.innerText = `${childrenGuideNum}`;
    guideAdultCharge.innerText = `${adultsGuideCost.toFixed(2)}`;
    guideKidCharge.innerText = `${childrenGuideCost.toFixed(2)}`;
    costCurrentAdventure.innerText = `${adventureCost.toFixed(2)}`;
    totalBillAdventure.innerText = `${adventureCost.toFixed(2)}`;
}
function paymentAd(){
    if (this.value == "Cash"){
        paymentAdv = "Cash";
    } else if (this.value == "Card"){
        paymentAdv = "Card";
    } else{
        paymentAdv = "Cheque";
    }
    paymentMethodAdventureTable.innerText = `${paymentAdv}`;
}
function adventure(){
    if (confirm(`Thank you for booking with us and enjoy your one hour adventure session with Jetwing\nNumber of local adults = ${numSlAdults}\nCharge for local adults = ${numSlAdults} X Rs.5000 : Rs.${costSlAdults}\nNumber of local children = ${numSlChildren}\nCharge for local children = ${numSlChildren} X Rs.2000 : Rs.${costSlChildren}\nNumber of foreign adults = ${numForeignAdults}\nCharge for foreign adults = ${numForeignAdults} X Rs.10000 : Rs.${costForeignAdults}\nNumber of foreign children = ${numForeignChildren}\nCharge for foreign children = ${numForeignChildren} X Rs.5000 : Rs.${costForeignChildrenAd}\n------------------------\nGuide for diving = ${guideValue}\nNumber of adults need guidance = ${adultsGuideNum}\nGuide charge for adults = Rs.1000 X Rs.${adultsGuideCost}\nNumber of Children need guidance = ${childrenGuideNum}\nGuide charge for Children = Rs.500 X Rs.${childrenGuideCost}\n------------------------\nYour total bill = Rs.${adventureCost}\n------------------------\nHave a nice day!!!`)){

    outAdventure.innerText = `Thank you for booking with us and enjoy your adventure with Jetwing\nNumber of local adults = ${numSlAdults}\nCharge for local adults = ${numSlAdults} X Rs.5000 : Rs.${costSlAdults}\nNumber of local children = ${numSlChildren}\nCharge for local children = ${numSlChildren} X Rs.2000 : Rs.${costSlChildren}\nNumber of foreign adults = ${numForeignAdults}\nCharge for foreign adults = ${numForeignAdults} X Rs.10000 : Rs.${costForeignAdults}\nNumber of foreign children = ${numForeignChildren}\nCharge for foreign children = ${numForeignChildren} X Rs.5000 : Rs.${costForeignChildrenAd}\n------------------------\nGuide for diving = ${guideValue}\nNumber of adults need guidance = ${adultsGuideNum}\nGuide charge for adults = Rs.1000 X Rs.${adultsGuideCost}\nNumber of Children need guidance = ${childrenGuideNum}\nGuide charge for Children = Rs.500 X Rs.${childrenGuideCost}\n------------------------\nYour total bill = Rs.${adventureCost}\n------------------------\nHave a nice day!!!`;
    swal("Success!", "Your booking is reserved. Thank you!", "success");
    costCurrentAdventure.innerText = `0`;
    costOverallAdventure.innerText = `0`;} 
    
    else{
        outAdventure.innerText = `Please!!! click 'ok' to book---`;
        swal("Sorry!", "Opps, something went wrong. Please try again.", "error");
    }
}