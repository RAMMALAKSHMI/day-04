var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all");
request.send();
request.onload=function(){
    var result = JSON.parse(request.response);
    for(i=0;i<result.length;i++){
        console.log("FLAG:",result[i].flags);
        console.log("NAME:",result[i].name.common);
        console.log("REGION:",result[i].region);
        console.log("SUBREGION:",result[i].subregion);
        console.log("POPULATION:",result[i].population);
    }
}