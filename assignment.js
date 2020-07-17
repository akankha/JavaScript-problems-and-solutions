
// this function will convert feet into Mile
function  feetToMile(feet) {

        // check if function have a value ?
        if (Math.sign(feet)==-1){
            return "Please Provide a positive number"
        }else{
            // Formula divide the length value by 5280
            var result = feet/5280;
            var finalResult = result.toFixed(2)
            return (finalResult)
        }

    }

