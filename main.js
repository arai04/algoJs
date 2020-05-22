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


//array

//行列
//２つの二次元配列の要素を加算し
//空の二次元配列に格納する
const array1 = [
  [1,3,5],
  [7,9,11]
];
const array2 = [
  [2,4,6],
  [8,10,12]
];
const array3 = [];
const arrayTmp = [] ;

const getSum = (row) => {
  for(let col = 0 ; col < array1[row].length ; col ++){
    const sum = array1[row][col] + array2[row][col] ;
    arrayTmp.push(sum);
  }
  const removedArray = arrayTmp.splice(0,arrayTmp.length);
  array3.push(removedArray);
}
for ( let i = 0 ; i < array1.length ; i ++ ){
  getSum(i);
}
console.log(array3);
