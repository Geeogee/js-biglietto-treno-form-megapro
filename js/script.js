var generateBtn = document.getElementById("btn-generate");
var cancelBtn = document.getElementById("btn-cancel");

generateBtn.addEventListener("click", function() {
    var userFullname = document.getElementById("name").value;
    var distanceKM = document.getElementById("distance").value;
    var age = document.getElementById("age").value;
    var errorsDiv = document.getElementById("errors");
    errorsDiv.innerHTML = "";

    var valuesToCheck = [userFullname, distanceKM, age];
    var emptyStrings = false;
    var errors = [];

    // Check if there are invalid values, trigger the emptyStrings variable
    // and add the index in another array called errors
    for(var i=0; i<valuesToCheck.length; i++) {
        if(valuesToCheck[i] == "") {
            emptyStrings = true;
            errors.push(i);
        }
    }
    // 0 = name | 1 = distance | 2 = age  
    // Check the errors array that contents the index of invalid fields
    // and generates text, so you know which field 
    // has an invalid value
    for(var i=0; i<errors.length; i++) {
        if(errors[i] == 0) {
            errorsDiv.innerHTML += "Il campo <strong> Nome e Cognome </strong> non &egrave; stato correttamente compilato! <br>"
        } else if (errors[i] == 1) {
            errorsDiv.innerHTML += "Il campo <strong> Distanza </strong> non &egrave stato correttamente compilato! <br>"
        } else {
            errorsDiv.innerHTML += "Il campo <strong> Et&agrave; </strong> non &egrave; stato correttamente compilato! <br>"
        }
    }

    if(!emptyStrings) {
        var basePrice = 0.21;
        var discount = 0;
        var totalPrice = 0;
        var discountStr;
        var car = Math.floor(Math.random() * 10) + 1;
        var codeCP = Math.floor(Math.random() * 9999) + 90000;

        if(distanceKM > 0) {
            totalPrice = basePrice * distanceKM;
            if(age == 1) {
                discount = totalPrice * .2;
                discountStr = "Minorenne";
            } else if(age == 3) {
                discount = totalPrice * .4; 
                discountStr = "Over 65";
            } else {
                discountStr = "Maggiorenne";
            }

            totalPrice -= discount;
            console.log(totalPrice);

            document.getElementById("username").innerHTML = userFullname;
            document.getElementById("discount").innerHTML = "Sconto " + discountStr;
            document.getElementById("car").innerHTML = car;
            document.getElementById("code").innerHTML = codeCP;
            document.getElementById("ticket-price").innerHTML = " &euro; " + totalPrice.toFixed(2);
        } else {
            errorsDiv.innerHTML += "La distanza da percorrere deve essere di almeno 1km!"
        }
    }
});

cancelBtn.addEventListener("click", function() {
    var userFullname = document.getElementById("name");
    var distanceKM = document.getElementById("distance");
    var age = document.getElementById("age");

    userFullname.value = "";
    distanceKM.value = "";
    age.value = "";
});