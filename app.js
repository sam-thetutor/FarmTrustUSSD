const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/',(req,res)=>{
    res.send("working")
})

app.post('/ussd', (req, res) => {
    // Read the variables sent via POST from our API
    const {
        sessionId,
        serviceCode,
        phoneNumber,
        text,
    } = req.body;

    let response = '';

    if (text == '') {
        // This is the first request. Note how we start the response with CON
        response = `CON Welcome to Farm Trust. What do you want to Know about Farming?
        1. Best Crops to grow in Uganda.
        2. Agricultural Inputs.
        3. About Farm Trust.
        4. Other`;
    } else if ( text == '1') {
        // Business logic for first level response
        response = `CON Which crops do you want to grow?
        1. Beans
        2. Maize
        3. Groundnuts
        4. Rice
        5. Others`;
    } else if ( text == '2') {
        response = `CON Which inputs do you want to learn about and use?
        1. Urea
        2. NPK
        3. DAP
        4. CAN`;
    }else if(text == '3'){
        response = `END 
        Farm Trust is a Farmers assistant in Uganda. We give you precise curated advise to 
        make informed decisions on your farming so that you can maximise the yield. We are here to assist you.
  `;
    } else if (text == '4') {
        response = `END It is always an honour to know about assist you with your needs instantly, 
        reach out to us on +256700988025 with your inquiries and we shall respond as soon as possible.
        `;
    }else if (text == '1*1') {
        response = `END 
        Beans are one of the best crops grown accross the equatorial regions in Uganda. Their unique
        capacity to provide a number of advantages such as soup gives them a unique demand all throught the year.
        With the right farming methods, the yield can give up to 18% increase in production and drastic increase
        in profit margins.
        `;
    }else if (text == '1*2') {
        response = `END
        Maize is one of the best crops to grow . It takes three months to grow and 
        requires minimum supervision yet it brings good yields. With Steady rainfalls, Expect a profit margin almost 
        tripple to five times the input. Yet, with persistent sunshine, the yield is not as good. When taken good care 
        of, expect a yield even up to 10x. You need to prepare the land, aquire fertilisers, apply pesticides and 
        more to make this a reality.
        `;
    }else if (text == '1*3') {
        response = `END 
         Groundnuts are one of the most consumed cereals in Uganda. With a population of over fifty million people,
         growing such a crop not only brings great diet benefits but also great profit returns. To have this kind 
         of yield, grow ground nuts in the season with the right fertiliser and pesticides and monitor any inconsistencies
         to have immediate mitigation mechanisms throught your season.
        `;
    }else if (text == '1*4') {
        response = `END
        Rice growing though highly profitable, without great care can turn cause a loss to a farmer. So taking 
        great caution on the water table of the area where you are growing, deliberately and consistently 
        putting bird scare crows to prevent birds that can eat a signifcant amount during growth and deploying 
        other great farming practices can bring profits back to the farmer in fifty or more folds.
        `;
    }else if (text == '1*5') {
        response = `END
        Farm Trust is dedicated in helping the Farmer make informed decissons throught the farming journey.
        Call us directly on +256700988025 for any other inquiries.
        `;
    }
    // else if (/^(1|2|3)\*(1|2|3|4|5)$/.test(text)) {
    //     console.log(text)
    //     response = `CON Enter your Quantity in kgs`;
    // }
    // else if(/^(1|2|3)\*(1|2|3|4|5)\*\d+\*(1|2|3|4)$/.test(text)
    // ){
    //     response = `CON Choose your Delivery district
    //     1. Kapchorwa
    //     2. Mpigi
    //     3. Nebbi 
    //     4. Lira`;
    // }
    // else if(/^(1|2|3)\*(1|2|3|4|5)\*\d+$/.test(text)){
    //     response = `CON Choose from a pool of our Authentic Suppliers.

    //     1. MUKASA SUPPLIERS
    //     2. OMULIMI STORES
    //     3. LETS FARM SHOP
    //     4. MOMO AGRO`;
    // }else if(/^(1|2|3)\*(1|2|3|4|5)\*\d+\*(1|2|3|4)\*1$/.test(text)){
    //     response = `CON Choose your Delivery point
    //     1. Kapchorwa Taxi Park
    //     2. Kapchorwa Bus Park`;
    // }
    // else if(/^(1|2|3)\*(1|2|3|4|5)\*\d+\*(1|2|3|4)\*2$/.test(text)){
    //     response = `CON Choose your Delivery point
    //     1. Mpigi Taxi Park`;
    // }else if(/^(1|2|3)\*(1|2|3|4|5)\*\d+\*(1|2|3|4)\*3$/.test(text)){
    //     response = `CON Choose your Delivery point
    //     1. Nebbi Taxi Park
    //     2. Nebbi Bus Park`;
    // }else if(/^(1|2|3)\*(1|2|3|4|5)\*\d+\*(1|2|3|4)\*4$/.test(text)){
    //     response = `CON Choose your Delivery point
    //     1. Lira Taxi Park
    //     2. Lira Bus Park`;
    // }else if(/^(1|2|3)\*(1|2|3|4|5)\*\d+\*(1|2|3|4)\*(1|2|3|4)\*(1|2)$/.test(text)){
    //     response = `CON Proceed to Make payment of sh.340000
    //     1. Pay
    //     2. Pay with another number`;
    // }else if(/^(1|2|3)\*(1|2|3|4|5)\*\d+\*(1|2|3|4)\*(1|2|3|4)\*(1|2)\*2$/.test(text)){
    //     response = `CON Enter Phone number`
    // }else if(/^(1|2|3)\*(1|2|3|4|5)\*\d+\*(1|2|3|4)\*(1|2|3|4)\*(1|2)\*1$/.test(text)){
    //     response = `END Thank you for ordering with us. Your order is being processed.
    //     For any inquiries, contact +256703806580.`
    // }
    // else if(/^(1|2|3)\*(1|2|3|4|5)\*\d+\*(1|2|3|4)\*(1|2|3|4)\*(1|2)\*2\d+$/.test(text)){
    //     response = `END Thank you for ordering with us. Your order is being processed.
    //     For any inquiries, contact +256703806580.`
    // }

    else{
        response =`END Sorry, What you are searching for is not available. Contact Farm Trust directly on +256700988025!`;
    }


    // Send the response back to the API
    res.set('Content-Type: text/plain');
    res.send(response);
});

const PORT= 6008 || process.env.PORT
app.listen(PORT,(req,res)=>{
console.log(`App listening on ${PORT}`)
})

// "use strict";

// const express = require("express");
// const app = express();

// app.listen(3000, err => {
//     if(err) {
//         console.log("There was a problem", err);
//         return;
//     }
//     console.log("listening on port 3000");
// });