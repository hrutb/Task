//1.wap to find area of triangle when three sides are given using herons formula  
   let area , a,b, c, s 
   a=2.20,b =1.40,c=3.33

   s = (a + b+ c )/2  ///semi-perimeter 
   //console.log(`s: ${s}`);
   
   area = Math.sqrt(s*(s-a)*(s-b)*(s-c)) 
   if(area>0) {
   //  console.log(`Area of triangle :${area}` ) 
   } 



//2.wap to solve this :      (1/x+y) 
   //                      (a+b)
   //                    ---------
   //                      (x+y)
      let d=3
      let e=4
      let x=5
      let y=3 

      let numerator = d + e  
      let denom= x + y    //store in variables
      let result = Math.pow(numerator,1/denom)/ denom
      console.log(`Result 2 : ${result}`);



//3.wap to solve this:  
   //                                 (x/y)
   //                         (m+n+p)
   //                      ------------  
   //                     ((a+b+c)/(m+n))

      let m=3 
      let n=4 
      let p=3 
      let k=2 
      let l=5
      let a1 = 2.3
      let b1= 3.3 
      let c1=4

      let nume = Math.sqrt(m+n+p)
      let denome = (a1+b1+c1)/(m+n)
      
      let result1 = Math.pow(nume ,k/l) /denome
      console.log(`Result 3: ${result1}`);



//4. wap to solve this equation 
   //                                 (1/m) 
   //                            ( 1 )  
   //                            ----- 
   //                              k
      let m1= 2.3 
      let k1 = 3.3 

         let result4 = Math.pow(1/k,  1/m)  
                     console.log(`Result4 : ${result4}`);
                     



//5. wap for simple interest  
   //          si=  p r t /100  
   //    t = time , r =         
      let p1 =200 
      let r  =0.05 
      let t  =3 

      let simpleInt =  p1*r*t/100
      console.log(`Simple Interest : ${simpleInt}`);
      


//6.wap to find the mean and standard deviationn of 5 integers 
  //(10,20,30,40,50)
   let sum = [3,4,5,6,7]

   let mean = sum.reduce((s, value)=> s + value,0) 
   console.log(`Mean of integers : ${mean}`);

     // Standard Deviation 
            //
                  //   x1= 3
                  //   x1 = Math.pow(x1 - mean,2)
                  //   x2 = 4 
                  //   x2 = Math.pow(x2- mean,2)
                  //   x3 = 5
                  //   x2 = Math.pow(x2- mean,2)








//7.wap to find distance between  two points  in cartesian coordinate system   x1-x2 + y1-y2
      let x1=4.5
      let x2 =5.4 
      let y1= 3
      let y2 = 3

      let distance = Math.sqrt(Math.pow(x1-x2, 2) + Math.pow(y1-y2,2))
      console.log(distance);
       

//wap to solve this equation 
   //               -b+b-4ac
   //         u = -------------
   //                  2a
   
      let B=4 
      let A=5.6
      let C = 6.5
   
      let numerator1 = Math.sqrt(Math.pow(B ,2)-4 * A * C) 
      console.log(`Numerator1 : ${numerator1}`)

      let u = (-b+numerator1)/2*A

      console.log(`Result8:${u}`);






