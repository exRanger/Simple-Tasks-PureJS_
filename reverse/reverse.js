
const log = { console }

function reverseBits(number){
  
  if(number === Math.pow(2,53)-1){
     return Number.MAX_SAFE_INTEGER
     }
  //reworking...  
  return  parseInt(+ number.toString(2).split('').reverse().join(''), 2)
}

log(reverseBits(417))
log(reverseBits(267))
log(reverseBits(0))
log(reverseBits(2017))
log(reverseBits(1023))
log(reverseBits(1024))
log(reverseBits(Number.MAX_SAFE_INTEGER))

