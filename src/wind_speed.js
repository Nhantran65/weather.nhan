function list_wind(ADDRESS){
    document.getElementById("type").innerHTML = ""
    
    var txt = "";
    const xhr = new XMLHttpRequest();
    xhr.open("GET", ADDRESS);
    const DONE = 4;
    const SUCCESS = 200;
    xhr.onreadystatechange = function() {
        if (this.readyState == DONE &&
            this.status == SUCCESS) {
            var myObj = JSON.parse(this.responseText);
            var x = 0;
            
           

            //Bar graph
            txt += "<div class=\"card\" style=\"background-color: #333;\">";   
            txt += "<canvas id=\"wind_chart\"></canvas>";
            txt += "</div>";

            //slice
            txt += "<div class = \"bar_container\" id = \"minmaxbar\"></div>"

            //table
            txt += "<table id=\'memberTable\'>"
            
            txt += "<tr class = \"row\">";
            for (x = 0; x < 5; x++){
                txt += "<td  style=\"background-color: #333;color: #fff;text-align: center;\">" ;
                txt += header[x];
                txt += "</td>"
            }
            txt += "</tr>";
            x = 0;
            for (x in myObj) {
                    txt += "<tr class=\"row\" id=\"row"+x+"\""+ "onClick=\'row_tag("+x+")\' style=\"background-color: "+color+"\"><td>" + parseInt(parseInt(x,10) + 1,10)  +"</td>";
                    txt += "<td>" + myObj[x].date_time.toString().slice(0,10) + "</td>" + "<td>" + myObj[x].date_time.toString().slice(11,23) + "</td>";
                    txt += "<td> wind_speed </td>"+"<td>"+parseFloat(myObj[x].wind_speed)+"</td>";
                    txt +="</td></tr>";
                }
            txt += "</table>" 
            document.getElementById("table").innerHTML = txt;


            var ctx_bar = document.getElementById('wind_chart');

            var gradientStroke_wind = ctx_bar.getContext("2d").createLinearGradient(0, 0, 0, 500);
            gradientStroke_wind.addColorStop(0.4, "#fff");
            gradientStroke_wind.addColorStop(1, "transparent");

            
            //Sort temperature
            let max = 0, min = myObj[0].wind_speed;
            let date = [];
            let value = [];
            for (x in myObj) {
                    date[x] = myObj[x].date_time.toString().slice(0,10) + " " + myObj[x].date_time.toString().slice(11,19);
                    value[x] = myObj[x].wind_speed;
                    if (parseFloat(myObj[x].wind_speed)>=max) max = parseFloat(myObj[x].wind_speed);
                    if (parseFloat(myObj[x].wind_speed)<=min) min = parseFloat(myObj[x].wind_speed);
            }

            min_max_bar(min,max,parseFloat(myObj[x].wind_speed))
            seekbar()
            document.getElementById("hoverNow").innerText = "Now: " + parseFloat(value[x]).toFixed(2);
            //document.getElementById("checking").innerHTML = date;
            //Create new chart
            let chart = new Chart(document.getElementById("wind_chart"), {
                    type: 'bar',
                    data: {
                    labels: date,   
                    datasets: [
                {
                    label: "wind (mm)",
                    backgroundColor: gradientStroke_wind,
                    hoverBackgroundColor: "#6987FF",
                    data: value
                }
                ],
                    borderWidth: 0,
                },
                    options: {
                        onClick:  function(evt) {   
                            var element = chart.getElementAtEvent(evt);
                            if(element.length > 0)
                            {
                            const firstPoint = element[0];
                            var label = chart.data.labels[firstPoint._index];
                            for (x in date) {
                                if (label == date[x]){
                                    row_tag(x);
                                    break;
                                }
                                
                            }                        
                            }
                        },    
                    cornerRadius: 12,
                    legend: { display: false },
                    scales: {
                    yAxes: [{
                    ticks: {
                    fontColor: "#fff",
                    fontStyle: "bold",
                    beginAtZero: true,
                    maxTicksLimit: 5,
                    padding: 20
                },
                    gridLines: {
                    drawTicks: false,
                    display: false, 
                }
                }],
                    xAxes: [{
                    gridLines: {
                    drawTicks: false,
                    display: false,
                },
                    ticks: {
                    padding: 20,
                    fontColor: "#fff",
                    fontStyle: "bold"
                }
                }]
                }

                }
              });
        }
    };
    xhr.send();
}
