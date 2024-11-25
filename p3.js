const input = "George Raymond Richard Martin";

const arr = input.split(' ')
                      .map(word => word[0])
                      .reduce((sum, alpha) => sum + alpha, ' ');

console.log(arr);

