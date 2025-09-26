function removeDuplicate(arr: number[]) {
    return arr.filter((item, index) => !arr.includes(item, index + 1))
}

function secondLargest(arr: number[]) {
    arr.sort((a, b) => b - a);
    return removeDuplicate(arr)[1]
}

console.log(secondLargest([2, 3, 4, 6, 6]))