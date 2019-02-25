var exercise = {};

exercise.countRecords = function(data){
    return 'number of records:' + chicago.data.length; 
};

exercise.countDistrictCrimes = function(data,district){
     var counter = 0;
     var countdistrict = function(item){
         if(item[19] === district){
             counter++
         };
     };
    chicago.data.forEach(countdistrict);
    return 'number of crimes in district 018:' + counter;
};

exercise.countPrimaryType = function(data,primaryType){
    var counter = 0;
    var counttype = function(item){
        if(item[13] === primaryType){
            counter++
        };
    };
    chicago.data.forEach(counttype);
    return 'number of crimes of theft:' + counter;
};

exercise.countLocation = function(data,location){
    var counter = 0;
    var countloc = function(item){
        if(item[15] === location){
            counter++
        };
    };
    chicago.data.forEach(countloc);
    return('number of crimes on street:' + counter); 
};


exercise.buildLatLngPoint = function(crime){
    var point = {};    
    point.latitude = crime[26];
    point.longitude = crime[28];
    return point;    
};




