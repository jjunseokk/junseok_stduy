$.getJSON("https://api.openweathermap.org/data/2.5/weather?lat=37.5666805&lon=126.9784147&appid=1255e4aac90af2ff4a1905e43962ab4b&units=metric", function(result){
    
// 현재온도
    $(".ctemp").append(result.main.temp);
    $(".lowtemp").append(result.main.temp_min);
    $(".hightemp").append(result.main.temp_max);

    // 현재온도 아이콘
    let wiconUrl = '<img src="http://openweathermap.org/img/wn/'+result.weather[0].icon+'.png" alt="'+result.weather[0].description+'">';
    $(".icon").html(wiconUrl);


    // 햔재시간
    let ct = result.dt;

    function convertTime(t){
        let ot = new Date(t*1000);
        
        let hr = ot.getHours();
        let m = ot.getMinutes();
        let s = ot.getSeconds();

        return hr+ ":" + m + ":" + s;
    }


    let currentTime = convertTime(ct)
    $(".time").append(currentTime);
});

$.getJSON("https://api.openweathermap.org/data/2.5/forecast?lat=37.5666805&lon=126.9784147&appid=1255e4aac90af2ff4a1905e43962ab4b&units=metric",function(result){
    
for(let i=0; i<39; i++){
    let ctime = result.list[i].dt;
    let ctemp = result.list[i].main.temp;

    function convertTime(t){
        let ot = new Date(t*1000);
        
        let dt = ot.getDate();
        let hr = ot.getHours();
        let m = ot.getMinutes();
        let s = ot.getSeconds();

        return dt+ "일" + hr + ":" + m + ":" + s;
    }
    let currentTime = convertTime(ctime);
    let tableHtml = '<tr>' +
                        '<td>'+currentTime+'</td>'+
                        '<td>'+ctemp+'</td>'+
                    '</tr>';
    
    $("tbody").append(tableHtml);
};
    


});