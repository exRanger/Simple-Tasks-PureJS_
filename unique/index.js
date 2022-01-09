// 1st way
function getUniqueWords1(str){
    return [...new Set(str.split(' '))].join(' ')
} 
// 2st  way
 function getUniqueWords2(str){
    const obj = {} 
    str.split(' ').forEach((item, index) => {
       obj[item] = index
     })
     return Object.keys(obj).join(' ')
 }
 // 3rd way
 function getUniqueWords3(str){
   let temp = []
   str.split(' ').forEach((item, index) => {
     if(!temp.includes(item)){
       temp.push(item)
     }
   })
   return temp.join(' ')
 }
 console.log(getUniqueWords1("easy come easy go")); // come go
 console.log(getUniqueWords2("easy come easy go")); // come go
 console.log(getUniqueWords3("easy come easy go")); // come go
