function insertionSortReverse(array) {
    for(var i = array.length - 1; i >= 0; i--) {
        var val = array[i];
        var j;
        for(j = i; j < array.length && array[j+1] < val; j++) {
          array[j] = array[j+1];
        }
        array[j] = val;
    }
    return array;
}

console.log(insertionSortReverse([34,-12,93,-46,11,24,75,94,98]));

/*
Sources Used: 
Classmate - Ziyu Wang 
TA - Ali Torabi
*/
