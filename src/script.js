const header = ["Number","Date","Time","Type","Value"];
const method_array = ["light","temperature","rain","wind_speed","wind_direction","humidity_in","humidity_out"]
const color = "#ffffff";
Chart.defaults.global.defaultFontColor = "#fff";
function min_max_bar(min,max,value){
    let txt = "";
    
    txt += "<div class=\"minmaxbar\">";   
    txt += "<h3 id=\"title_bar\">Data Ruler</h3>"; 
    txt +="<div class=\"valuetext\">"+"Min: "+parseFloat(min).toFixed(2)+"</div>"
    
    txt +="<div class=\"seekbar\" data-seekbar-value=\""+(((parseFloat(value,10)-parseFloat(min,10))/(parseFloat(max,10)-parseFloat(min,10)))*100).toString()+"\"></div>";
    txt +="<div class=\"valuetext\">"+"Max: "+parseFloat(max).toFixed(2)+"</div>"    
 
    txt += "</div>";
    
    document.getElementById("minmaxbar").innerHTML = txt;
    
}

function row_tag(x){

    if (document.getElementById("row"+x).style.backgroundColor === "rgb(255, 211, 131)"){
        document.getElementById("row"+x).style.backgroundColor = "rgb(255, 255, 255)"
    } else document.getElementById("row"+x).style.backgroundColor = "rgb(255, 211, 131)"
}

// function Using to get whole of elements 
function reset() {
	var elements = document.getElementsByClassName('row');
	for(var i = 0; i < elements.length; i++){
		elements[i].style.backgroundColor = "rgb(255, 255, 255)";
	}
}

function show_help(){
    let txt = "";
    txt += '<img class = "tuto" src="./style/image/helpMenu.svg" alt="logo"></img>'
    document.getElementById("table").innerHTML = txt;
}
function show_info(){
    let txt = "";
    txt += '<img class = "tuto" src="./style/image/info.svg" alt="logo"></img>'
    txt += '<img class = "tuto" src="./img/tier10.png" alt="logo"></img>'
    txt +=  '<div class="license"><h1>LINCENSE </h1><ul><li>Background Images: https://cdn.budgetyourtrip.com/images/photos/headerphotos/large/finland_tampere.jpg</li><li></li><li>All of icons which I used in my website also be made by myself(By Picsart)</li><li>Copyright (c) 2023 Nhan Tran</li><li>The MIT License allows you to use, modify, distribute, and even sell the software for free, as long as you include the copyright notice and license text in all copies of the software. The license also states that the software is provided "as is" without any warranty, and that the authors or copyright holders will not be held liable for any claims or damages arising from the use of the software. In other words, you can use the software at your own risk, and the authors or copyright holders are not responsible for any problems that may occur.</li></ul></div>'

    document.getElementById("table").innerHTML = txt;
    const lic =document.querySelector(".license");
    // make style for license
    lic.style.backgroundColor="white";
    lic.style.color="black";
}
