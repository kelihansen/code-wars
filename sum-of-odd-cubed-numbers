// solution for https://www.codewars.com/kata/sum-of-odd-cubed-numbers

function cubeOdd(arr) {
    const cubes = arr.map(x => Math.pow(x, 3));
    const odds = cubes.filter(x => x % 2);
    if (cubes.some(isNaN) || !odds.length) return;
    return odds.reduce((a, b) => a + b);
}

/* What a poorly written challenge. I both passed and failed with this answer. The writer neglected to say that the function should return zero if there aren't any odd numbers. Mine returns 'undefined' in that case, and that makes more sense to me. */