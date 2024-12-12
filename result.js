import React from "react";
function Result({secretNum,term})
{
    let result;
    if(term)
    {if(term>secretNum)
        {
            result="Higher";
        }
        else if(term<secretNum)
        {
            result = "lower";
        }
        else if(term == secretNum)
        {
            result="oh! yeah ! you guessed correct number";
        }
        else{
            result="Enter Valid Input";
        }}
    
    return<h3>You guessed:{result}</h3>
}
export default Result;