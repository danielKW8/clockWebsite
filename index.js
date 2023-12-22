function showTime(){
    const now = new Date();
    const day = now.getDay();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const year = now.getFullYear();
    const month = now.getMonth() + 1;
    const date = now.getDate();
    const seconds = now.getSeconds();
    var dayWord = "";
    var monthWord = "";
    var timeStr = "";
    var dateStr = "";
    var hourStr = "";
    var minuteStr = "";
    var secondStr = "";
    var amorpm = "";

    switch(day){
        case 1:
            dayWord = "Monday";
            break;
        case 2:
            dayWord = "Tuesday";
            break;
        case 3:
            dayWord = "Wednesday";
            break;
        case 4:
            dayWord = "Thursday";
            break;
        case 5:
            dayWord = "Friday";
            break;
        case 6:
            dayWord = "Saturday";
            break;
        case 7:
            dayWord = "Sunday";
            break;
        default:
            dayWord = "Day";
            break;
    }

    switch(month){
        case 1:
            monthWord = "January"
            break;
        case 2:
            monthWord = "February"
            break;
        case 3:
            monthWord = "March"
            break;
        case 4:
            monthWord = "April"
            break;
        case 5:
            monthWord = "May"
            break;
        case 6:
            monthWord = "June"
            break;
        case 7:
            monthWord = "July"
            break;
        case 8:
            monthWord = "August"
            break;
        case 9:
            monthWord = "September"
            break;
        case 10:
            monthWord = "October"
            break;
        case 11:
            monthWord = "November"
            break;
        case 12:
            monthWord = "December"
            break;
        default:
            monthWord = "Month"
            break;
    }

    if(hours >= 12){
        amorpm = "PM";
    }
    else{
        amorpm = "AM";
    }

    if(minutes < 10){
        minuteStr = (`0${minutes}`);
    }
    else{
        minuteStr = (`${minutes}`);
    }

    if(hours < 10){
        hourStr = (`0${hours}`);
    }
    else{
        hourStr = (`${hours}`);
    }

    if(date < 10 ){
        dateStr = (`0${date}`);
    }
    else{
        dateStr = (`${date}`);
    }

    if(seconds < 10){
        secondStr = (`:0${seconds}`)
    }
    else{
        secondStr = (`:${seconds}`)
    }

    timeStr = (`${hourStr}:${minuteStr}`);
    dateStr = (`${dayWord}, ${dateStr} ${monthWord} ${year}`);
    amorpmSeconds = (`${secondStr}\n${amorpm}`)

    console.log(timeStr);
    console.log(dateStr);
    console.log(secondStr)


    document.getElementById("time").textContent = timeStr
    document.getElementById("date").textContent = dateStr
    document.getElementById("adds").textContent = amorpm
    document.getElementById("seconds").textContent = secondStr

    var state;
    if (hours >= 5 && hours <= 7){
        state = "dawn"
        document.body.style.backgroundImage = "url('dawn.jpg')";
        document.body.style.color = "#C2C2F0"
    } 
    if (hours > 7 && hours <= 13){
        state = "noon"
        document.body.style.backgroundImage = "url('noon.jpg')";
        document.body.style.color ="#350B45"
        
    } 
    if (hours >  13 && hours <= 16){
        state = "afternoon"
        document.body.style.backgroundImage = "url('afternoon.jpg')";
        document.body.style.color = "#B76E79"
        
    } 

    if(hours > 16 && hours <= 19){
        state = "afternoon2"
        document.body.style.backgroundImage = "url('afternoon2.jpg')"
        document.body.style.color = "#EFA3A3"
    }
    if (hours > 19 || hours <= 4){
        state = "night"
        document.body.style.backgroundImage = "url('night.jpg')";
        document.body.style.color = "#a2a2d2"
    } 

    console.log(state)
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundPosition = "center center";
    document.body.style.backgroundAttachment = "fixed"; // Optional, for a fixed background
    
    document.documentElement.style.height = "100%";
    document.body.style.height = "100%";
    document.body.style.margin = "0";
    document.body.style.padding = "0";
    
}
setInterval(showTime, 1000);
