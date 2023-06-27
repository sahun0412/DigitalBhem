
var daysDiff = "";
function bookClick() {

    document.getElementById("lblName").innerHTML = document.getElementById("txtFname").value;
    document.getElementById("lblName").innerHTML += document.getElementById("txtLname").value;
    document.getElementById("lblMobile").innerHTML = document.getElementById("txtMob").value;
    document.getElementById("lblEml").innerHTML = document.getElementById("txtEml").value;
    document.getElementById("lblTotalPrsn").innerHTML = document.getElementById("totalPrsn").value;




    var rmName = "";
    var rmCost = "";

    var amName = "";
    var amCost = "";




    var optDeluxe = document.getElementById("rmDeluxe");
    var optSuite = document.getElementById("rmSuite");

    

   



    if (optDeluxe.checked) {
        rmName = optDeluxe.value;
        rmCost = 2500;
    }

    if (optSuite.checked) {
        rmName = optSuite.value;
        rmCost = 4000;
    }
    document.getElementById("lblRmTyp").innerHTML = rmName;
    document.getElementById("lblRmCost").innerHTML = rmCost;



    var optAC = document.getElementById("ac");
    var optVault = document.getElementById("vault");

    if (optAC.checked) {
        amName += optAC.value;
        amCost = 1000;

        rmCost += amCost;
    }

    if (optVault.checked) {
        amName += optVault.value;
        amCost = 300;

        rmCost += amCost;
    }

    document.getElementById("lblAmName").innerHTML = amName;
    document.getElementById("lblAmCost").innerHTML = amCost;


    document.getElementById("lblChckInDate").innerHTML = document.getElementById("checkInDate").value;

    document.getElementById("lblChckOutDate").innerHTML = document.getElementById("checkOutDate").value;

    var checkIdate = new Date(document.getElementById('checkInDate').value);
    var checkOdate = new Date(document.getElementById('checkOutDate').value);
    var timeDiff = checkOdate.getTime() - checkIdate.getTime();
    var daysDiff = timeDiff / (1000 * 3600 * 24);

    //1s=1000ms, 1hr=3600s, 24hrs/day




    document.getElementById("lblTotalDays").innerHTML = daysDiff;



   

    document.getElementById("lblAdvAmt").innerHTML = document.getElementById("advAmt").value;

    var total = 0;
    var tPrsn = parseInt(document.getElementById("totalPrsn").value);
    var tDays = document.getElementById("totalDays").value;

    total += rmCost * tDays;
    if (tPrsn > 2) {
        tPrsn = (tPrsn - 2) * 1000;
      }
      
      document.getElementById("lblTotalAmt").innerHTML = `&#8377; ${((rmCost - parseFloat(document.getElementById("advAmt").value)) * daysDiff)}`;
      document.getElementById("lblBalAmt").innerHTML = `&#8377; ${((rmCost - parseFloat(document.getElementById("advAmt").value)) * daysDiff) }`.bold().fontcolor(`green`);




}

var daysDiff = "";
function getDate() {

    var checkIdate = new Date(document.getElementById('checkInDate').value);
    var checkOdate = new Date(document.getElementById('checkOutDate').value);
    var timeDiff = checkOdate.getTime() - checkIdate.getTime();
    var daysDiff = timeDiff / (1000 * 3600 * 24);
    document.getElementById("totalDays").innerHTML = daysDiff;
}



function checkAdvanceAmount() {
    var advAmtInput = document.getElementById("advAmt");
    var bookButton = document.getElementById("book");
    var advAmt = parseFloat(advAmtInput.value);
    
    if (advAmt >= 1000) {
      bookButton.disabled = false; // Enable the "Book" button
      document.getElementById("advAlert").innerHTML = "";
    } else {
      bookButton.disabled = true; // Disable the "Book" button
    }
  }
  
  