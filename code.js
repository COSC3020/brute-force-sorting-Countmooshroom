function permutationSort(a) {
    var x = getPerms(a);
    var done = false;
    var i = 0;
    while (!done) {
        done = isSorted(x[i++]);
    }
    console.log("I tried " + i + " permutations to find the sorted list:");
    console.log(x[--i]);
}

function isSorted(a) {
    for (let k = 0; k < a.length - 1; k++) {
        if (a[k] > a[k + 1]) { return false; }
    }
    return true;
}

//This function is adapted from https://www.geeksforgeeks.org/generate-all-the-permutation-of-a-list-in-python/
function getPerms(a) {
    //Check basic cases
    if (a.length == 0) { return []; }
    if (a.length == 1) { return [a]; }
 
    //Find all permutations
    var l = [];
    for (let i = 0; i < a.length; i++) {
        var m = a[i];
        var remList = [...a.slice(0, i), ...a.slice(i + 1)];
        var perms = getPerms(remList);

        for (let j = 0; j < perms.length; j++) {
            l.push([m, ...perms[j]]);
        }
    }
    return l;
}


permutationSort([3, 2, 5, 4, 1]);