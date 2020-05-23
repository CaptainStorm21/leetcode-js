// You are climbing a stair case. It takes n steps to reach to the top.
//
// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?


/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    var f1 = 2;
    var f2 = 1;
    if(n == 1) {
        return f2;
    } else if(n == 2) {
        return f1;
    }

    var fn;
    for(var i = 3; i <= n; i++) {
        fn = f1 + f2;
        f2 = f1;
        f1 = fn;
    }
    return fn;
};

// steps 1 ways 1 [1]
// steps 2 ways 2 [1,1] [2,2]
// steps 3 ways 1 [1,2] [2,1] [1,1,1]
// steps 4 ways 5 [1,1,2] [2,2] [1,2,1] [2,1,1] [1 1 1 1]




function climbstair(n){
  if (n <= 3) return n;
  
  let ways = [0, 1, 2, 3];
  
  for (let i=4; i<=n; i++){
    ways.push(ways[i-1] + ways [i-2]);
   
  }
  return ways.pop()
}

console.log(climbstair(9))
//55
