// count the name thats contain "A" or "a"
let arr=["Aman","chunnu","munnu","nrupul","pulkit","Ankit","Naman"]
let count=0;
for( let i=0;i<=arr.length-1;i++){

  for( let j=0; j<=arr[i].length-1;j++){
    if(arr[i][j]=="A"||arr[i][j]=="a"){
      count++;
      break;
    }
  }
}
console.log(count)