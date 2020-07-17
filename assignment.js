// this function will convert feet into Mile
function feetToMile(feet) {

    // check if function have a negative value ?
    if (Math.sign(feet) == -1) {
        return "Please Provide a positive number"
    } else {
        // Formula divide the length value by 5280
        var result = feet / 5280;
        var finalResult = result.toFixed(2)
        return finalResult;
    }

}

// this function will give you total number to wood require
function woodCalculator(bed, table, chair) {
    // check if function have a negative value ?
    if (Math.sign(bed) == -1 || Math.sign(table) == -1 || Math.sign(chair) == -1) {
        return "Please Provide a positive number"
    } else {
        // Formula  bed require 10 qubic meter wood
        // table require 7 qubic meter wood
        // chair require 5 qubic meter wood
        var bedTotal = bed * 10;
        var tableTotal = table * 7;
        var chairTotal = bed * 5;
        var totalWoodrequire = bedTotal + tableTotal + chairTotal;
        return totalWoodrequire;
    }

}

// this function will give you total number to wood require
function brickCalculator(floor) {

    var upTotenFloor = 10
    var upTotweentyFloor = 20

    if (floor <= 10) {
        var totalBrick = floor * 15 * 1000;

    } else if (floor > 10 && floor <= 20) {
        floor = floor - upTotenFloor;
        totalBrick = (floor * 12 * 1000) + 150000;
    } else {
        floor = floor - upTotweentyFloor;
        totalBrick = (floor * 10 * 1000) + 270000;
    }
    return totalBrick;


}


// this function will give you total number to wood require

function tinyFiend(friend) {

    // Check whither this is a array or not
    if (Array.isArray(friend) === false) {
        return "This is not an array";
        // Check whither this is and empty or not ?
    } else if (friend === undefined || friend.length == 0) {
        return "Please write your Friend name";
    } else {
        // Take friend as smallest number
        var tinyFiend = friend [0];

        for (i = 1; i < friend.length; i++) {

            var currentFriend = friend[i];
            // compare is the anyother name which are less then tinyfriend
            if (currentFriend.length < tinyFiend.length) {
                tinyFiend = currentFriend;
            }

        }
        return tinyFiend;
    }

}


