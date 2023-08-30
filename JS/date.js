function Update() {

    var date = new Date();

    var id = document.getElementById("date");
    
    const f = new Intl.DateTimeFormat("hu-hu", {
        dataStyle: "full"
    })
    
    id.innerHTML = "" + date.toLocaleString();
}

setInterval(Update, 1);

    

