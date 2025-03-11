function evenLast(numbers) {
    let integersSum = 0;
    if (numbers.length === 0) {
        return 0;
    }
    for (let i = 0; i < numbers.length; i++) {
        if (i % 2 === 0) {
            integersSum += numbers[i];
        }
    }
    return integersSum*numbers[numbers.length-1]
}