"use strict";

const region1 = [1540, 1130, 1580, 1105];
const region2 = [2010, 1168, 2305, 4102];
const region3 = [2450, 1847, 2710, 2391];
const region4 = [1845, 1491, 1284, 1575];
const region5 = [2120, 1767, 1599, 3888];

//4.[START] - Quarterly Sales Data
let quarter_sum =[];

for(let i=0; i<4; i++){
    
    quarter_sum[i]=region1[i]+region2[i]+region3[i]+region4[i]+region5[i];
}

const Quarter = `<h2>Sales by Quarter</h2>
                 Q1 : $${quarter_sum[0]}<br>
                 Q2 : $${quarter_sum[1]}<br>
                 Q3 : $${quarter_sum[2]}<br>
                 Q4 : $${quarter_sum[3]}<br>
                 `;
                 
document.write(Quarter);
//[END]

//5.[START] - Regional Sales Data
function sum_region(arr){
    
    let arr_val = 0;
    
     for(let i=0; i< arr.length; i++)
     {
         arr_val += arr[i];
     }
     return arr_val;
}

const region1_val = sum_region(region1);
const region2_val = sum_region(region2);
const region3_val = sum_region(region3);
const region4_val = sum_region(region4);
const region5_val = sum_region(region5);


const Region = `<h2>Sales by Region</h2>
                    Region1 : $${region1_val}<br>
                    Region2 : $${region2_val}<br>
                    Region3 : $${region3_val}<br>
                    Region4 : $${region4_val}<br>
                    Region5 : $${region5_val}<br><br>
                `;
document.write(Region);
//[END]

const TotalSales = region1_val+ region2_val+ region3_val+ region4_val+ region5_val;

const TotSal = `<h3 style="color:red;">Total Sales</h3>
                $${TotalSales}
                <br><br>`;
                
document.write(TotSal);
