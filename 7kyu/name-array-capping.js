function capMe(names) {
    let result = [];
    for (i = 0; i < names.length; i++) {
        names[i] = names[i].toLowerCase();
        names[i] = names[i][0].toUpperCase()+names[i].slice(1);
        result.push(names[i]);
    }
    return result;
}