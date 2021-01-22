//kilometer to meter convertion code 
function kilometerToMeter(kilometer) {

    if (kilometer < 0) {                                //exceptiona condition here
        console.log("its an error input, kilometer cannot be negetive");
    } else {

        var meter = kilometer * 1000;                   //km to m convertion here
        return meter;
    }
}

var result1 = kilometerToMeter(6);                       //function cal for km to m
//console.log(result1);


//budget calculator code 
function budgetCalculator(wactch, mobile, laptop) {
    if (wactch < 0 || mobile < 0 || laptop < 0) {          // exceptional condition as item cannot be nagetive but can be 0 or higher
        console.log("item cannot be nagetive")
    } else {
        total = wactch * 50 + mobile * 100 + laptop * 500;  //calculate total cost
        return total;
    }
}

var result2 = budgetCalculator(2, 3, 3);                     //function call for budgetCalculator
//console.log(result2);

//hotel cost code 
function hotelCost(days) {
    var fare = 0;
    if (days < 0) {                              
        console.log("days or time cannot be negetive")     //days exceptional as it can not be nagetive but zero
    } else if (days <= 10) {                               //for 10 or below days
        fare = days * 100;
    } else if (days <= 20) {                              //for days betweeen 11 to 20
        var remain = days - 10;
        fare = remain * 80 + 10 * 100;
    } else {
        var remain = days - 20;                           //for days from 21 to higher 
        fare = remain * 50 + 10 * 100 + 10 * 80;
    }
    return fare;

}
var result3 = hotelCost(4);                               //function call for hotel cost
//console.log(result3);


//megaFriend finding largest string code 

function megaFriend(arr) {
    var max = "";
    if (arr.length === 0 || !Array.isArray(arr)) {          //check if array length is zero or it is not an array
        console.log("array is empty or it is not an array type")
    } else {
        for (var i = 0; i < arr.length; i++) {
            if (arr[i].length > max.length) {                 //condition to find the maximum lengths string 
                max = arr[i];
            }
        }

        return max;
    }
}

var arr = ["johnny", "rony", "nadia", "any", "ehan", "ilan", "sahiaer", "donmhrt", "alpha"];
//var arr = 10;                                                 //declire the array of string
var result4 = megaFriend(arr);                                  //function call space
//console.log(result4);
