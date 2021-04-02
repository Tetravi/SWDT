function count(arr, target){
    var count = 0;
    for (var i = 0; i < arr.length; i++)
        for (var j = i + 1; j < arr.length; j++)
            if (arr[i] + arr[j] == target)
                count++;
    return count;
}

var arr = [1, 3, 6, 2, 2, 0, 4, 5];
var target = 5;
console.log(count(arr, target));