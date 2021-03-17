"use scrict";

window.addEventListener('load', Initialise)

var result = document.getElementsByName("result");

function Initialise()
{
   
    var button = document.getElementById("submit");
    var user = document.getElementById("date");
var format = document.getElementById("format");
var type = document.getElementById("type");
var date = document.getElementById("date");
var pokemon1 = document.getElementById("pokemon1");
var pokemon2 = document.getElementById("pokemon2");
var pokemon3 = document.getElementById("pokemon3");
var pokemon4 = document.getElementById("pokemon4");
var pokemon5 = document.getElementById("pokemon5");
var pokemon6 = document.getElementById("pokemon6");
    button.addEventListener('click', Format);
}

function FormatDate()
{
    var d = new Date();
    var suffix;
    var MonthAsString;
    switch(d.getMonth())
    {
        case 0: MonthAsString = "January"
            break;
        case 1: MonthAsString = "February"
            break;
        case 2: MonthAsString = "March"
            break;
        case 3: MonthAsString = "April"
            break;
        case 4: MonthAsString = "May"
            break;
        case 5: MonthAsString = "June"
            break;
        case 6: MonthAsString = "July"
            break;
        case 7: MonthAsString = "August"
            break;
        case 8: MonthAsString = "September"
            break;
        case 9: MonthAsString = "October"
            break;
        case 10: MonthAsString = "November"
            break;
        case 11: MonthAsString = "December"
            break;
    }
    switch(d.getDate())
    {
        case 1: suffix = "st"
            break;
        case 2: suffix = "nd"
            break;
        case 3: suffix = "d"
            break;
        case 21: suffix = "st"
            break;
        case 22: suffix = "nd"
            break;
        case 23: suffix = "d"
            break;
        case 31: suffix = "st"
            break;
        default: suffix = "th"
            break;
    }
    var totalTime = MonthAsString + " " + d.getDate() + suffix;
    
    return totalTime;
}

function Format()
{
   var formattedDate = FormatDate();
    format.innerHTML = "**" + user.value + "** has challenged the **" + type.value + "** on **" + formattedDate +"**" +"<br/>" + "-----------------------------------------------------------------------" + "<br/>" + "-" + pokemon1.value +"<br/>" + "-" + pokemon2.value + "<br/>" + "-" + pokemon3.value + "<br/>" + "-" + pokemon4.value + "<br/>" + "-" + pokemon5.value + "<br/>" + "-" + pokemon6.value + "<br>" + "-----------------------------------------------------------------------";
    for(i = 0; i < result.length; i++)
    {
        if(result[i].checked)
        {
            if(result[i].value === "win")
            {
                format.innerHTML += "<br>" + "**[W]** has won against the **" + type.value + "**" + " on **" + formattedDate + "**";
            }   
        } 
    }
}