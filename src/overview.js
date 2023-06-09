function list_all_30(ADDRESS) {
    document.getElementById("type").innerHTML = ""

    var cpn = "";
    const igr = new XMLHttpRequest();
    igr.open("GET", ADDRESS);
    const DONE = 4;
    const suc = 200;
    igr.onreadystatechange = function() {
        if (this.readyState == DONE &&
            this.status == suc) {
            var myObj = JSON.parse(this.responseText);
            myObj.sort(function(a, b) {
             
            });
            var x = 0;
            cpn += "<table id=\'memberTable\'>"
            cpn += "<tr class = \"row\">";
            for (x = 0; x < 5; x++) {
                cpn += "<td  style=\"background-color: #333;color: #fff;text-align: center;\">" ;
                cpn += header[x];
                cpn += "</td>"
            }
            cpn += "</tr>";

            for (x in myObj) {
                order = parseInt(x, 10) + 1;

                cpn += "<tr class = \"row\" id=\"row" + x + "\"" + " style=\"background-color: " + color + "\"" + "><td>" + order + "</td>";
                cpn += "<td>" + myObj[x].date_time.toString().slice(0, 10) + "</td>" + "<td>" + myObj[x].date_time.toString().slice(11, 23) + "</td>";
                cpn += "<td>" + Object.keys(myObj[x].data) + "</td>" + "<td>" + Object.values(myObj[x].data) + "</td>";
                cpn += "</td><tr>";

                if (order === 30) break;
            }
            cpn += "</table>" 
            document.getElementById("table").innerHTML = cpn;
        }
    };
    igr.send();
}
list_all_30('https://webapi19sa-1.course.tamk.cloud/v1/weather')
