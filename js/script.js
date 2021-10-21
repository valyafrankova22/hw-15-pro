function funcArr( arr ) {
    const localArr = [];
    if (arr.length === 0) return `error`;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= 0) localArr.push(arr[i]);
        }

    return localArr.length === 0 ? null : localArr;
}

console.log (funcArr([-1, 3, -5, 0, 9]));
console.log (funcArr([]));
console.log (funcArr([-2, -4, -6]));