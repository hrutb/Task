//wap to convert mm into meter,feet,inch,cm 

    let mm = 1000 
    let meter = mm/1000 
    console.log(`mm to meter : ${meter} meter`);

    let feet =mm/304.8 
    console.log(`mm to feet :${feet} ft`);

    let inch = mm/25.4
    console.log(`mm to inch : ${inch} in`);

    let cm = mm/10
    console.log(`mm to centimeter: ${cm} cm`);
 
//wap for area of circle 
    let area  
    let r=3 

    area= 3.14*r*r 
    console.log(`Area of circle will be  : ${area}`);

//wap for area of triangle 

    let base = 2.34 
    let height = 3.33
    
    let area2 = 0.5*base*height 
    console.log(area2);


//wap for convert seconds int ohours ,minutes and second 
    let seconds = 3450;
    let hour = Math.floor(seconds/3600)
    let minutes =Math.floor(seconds % 3600 / 60) 
    let seconds2 =seconds %60

    console.log(`Seconds: ${hour}: ${minutes}: ${seconds}`);

//wap for swap two numbers use third variables 
    let a= 20 
    let b = 30 
    let temp 
    console.log(`before swap a :${a}, b :${b}`);

    temp = a 
    a = b 
    b= temp 
    console.log(`after swap a :${a}, b :${b}`);


//wap for swap two numbers     
    let a1 =30 
    let b1= 50 
    console.log(`before swap a :${a1}, b :${b1}`);
    a1 = a1 + b1 
    b1 = a1 - b1 
    a1 = a1 - b1 

    console.log(`after swap a :${a1}, b :${b1}`);

//wap to convert days into year,month,week   

    let days =3652 
      let year = days/365 
      let month = days/30 
      let week = days /7 
      let day = days/1   

    console.log(`Days : ${year}: ${month}:${week}: ${day}`); 

    
    


