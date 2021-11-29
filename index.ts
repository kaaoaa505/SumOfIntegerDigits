function solve(n: number): number {
    let data = n.toString();
    let sum = 0;
    for(let i = 0; i < data.length; i++){
        sum += parseInt(data.charAt(i));
    }
    return sum;
}

let n = 29;
console.log(solve(n)); // 11

n = 111;
console.log(solve(n)); // 3

n = 123;
console.log(solve(n)); // 6