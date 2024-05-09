

function arrayMadness(ary,ary1) {
    let sum=0;
    let sum1=0;
    for(i=0;i<ary.length;i++){
sum+=ary[i];}
    for(i=0;i<ary1.length;i++){
sum1+=ary1[i];
    }
    
    return console.log(sum>sum1);
    
}
let ary=[4, 5, 6,2,7];
let ary1=[1, 2, 3];
arrayMadness(ary,ary1);