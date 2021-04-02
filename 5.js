function meeting(s) {
    let string = s.toUpperCase().split(';')
        .map(x => x.split(':').reverse().join(', ')).sort().join(')(')
    return '(' + string + ')'
}

s = "Fired:Corwill;Wilfred:Corwill;Barney:TornBull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill";
console.log(meeting(s));