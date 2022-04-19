function myfunction1() {
    let n1 = document.myform.logemail1.value;
    let p1 = document.myform.logpass1.value;

    if (n1 == '' || n1 == null) {
        alert("Enter your College ID");
        return false;
    }
    // EDIT THIS CONDITION
    else if (p1.length < 5) {                    
        alert("Enter your Password");
        return false;
    }
    else {
        return true;
    }
}

function myfunction2() {
    let n2 = document.myform.logemail2.value;
    let q2 = document.myform.logname2.value;

    if (q2 == '' || q2 == null) {
        alert("Enter your Name");
        return false;
    }
    else if (n2 == '' || n2 == null) {
        alert("Enter your College ID");
        return false;
    }
    else {
        d1 = q2.split(" ");
        d2 = n2.substring(5);
        str = "Hi " + d1[0] + "! Contact your correspondent senior (B4200" + d2 +") and acquire your password.";
        var modal = document.getElementById("myModal");
        var onoff = document.getElementById("on");
        var img = document.getElementById("myImg");
        var captionText = document.getElementById("caption");
        img.onclick = function(){
            onoff.style.display = "none";
            modal.style.display = "block";
            captionText.innerHTML = str;
        }
        var span = document.getElementsByClassName("close")[0];
        span.onclick = function() { 
            onoff.style.display = "block";
            modal.style.display = "none";
        }
        return true;
    }
}

function alert1() {
    alert("L O L");
}



