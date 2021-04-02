function filter_list(l) {
    return l.filter(x => typeof x === 'number');
}

console.log(filter_list([2, 0, 10, 'c', 'e', 5]))