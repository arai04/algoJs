"use strict";
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


