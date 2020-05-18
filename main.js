"use strict";

//function

//素数判定                                                                                                                                                                    
const isPrime = n => {
  if (n < 2) return false;
  if (n === 2) return true;
  if (n % 2 === 0) return false;
  for (let i = 2; i < n; i++){
    if (n % i === 0) return false;
  }
  return true;
}
//素数列挙
const limitPrimes = limit => {                                                                                                                                                
  for (let i =2; i < limit; i++){
    if(isPrime(i)) console.log(i);
  }
}




//prototype

//x座標y座標　2点間の距離
class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  distanceTo(other) {
    const diffX2 = (this.x - other.x) ** 2;
    const diffY2 = (this.y - other.y) ** 2;
    const distance = Math.sqrt(diffX2 + diffY2);
    return distance;
  }
}
