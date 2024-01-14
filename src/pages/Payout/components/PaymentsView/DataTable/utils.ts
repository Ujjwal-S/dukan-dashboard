export function assemblePages(curr:number, total:number) {
    console.log(curr, total)
    const firstHalf = (curr <= total / 2) ? true: false;
    const numbers = []
    
    if (firstHalf) {
        if (curr !== 1) numbers.push(curr); 
        numbers.push(1);  numbers.push(total);
    
        for (let i = 2; i <= total; ++i) {
            if (numbers.length === 10) break;
            if (i === curr) continue;
            if (numbers.find(n => n == i)) continue
            numbers.push(i);
        }
        numbers.sort(function(a, b) {
          return a - b;
        });
        const result = [numbers.slice(0, numbers.length-1), [total]]
        return result
    } else {
        numbers.push(curr); numbers.push(1);
        for (let i = total; i > 0; --i) {
            if (numbers.length === 10) break;
            if (i == curr) continue;
            numbers.push(i);
        }
        numbers.sort(function(a, b) {
          return a - b;
        });
        const result = [[1], numbers.slice(1, numbers.length)]
        return result;
    }
    
}
