function root(num){
    var total = 0;
    if(num < 10) return num;
    else{
        num.toString().split("").forEach( function(value){
            var temp = parseInt(value);
            return total += temp;
        });
        return root(total);
    }
}

console.log(root(211));