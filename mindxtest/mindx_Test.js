//bai1
console.log("bài 1")
function findOppositeNumber(n,inputNumber) {
    if (inputNumber<n/2)
    return inputNumber+(n/2)
    else return inputNumber-(n/2)
}

console.log(findOppositeNumber(12,4))

//bai2
console.log("bài 2")
function merge2String(s1,s2) {
    let result="";
    for (let i = 0; i < s1.length||i<s2.length; i++) {
        if (i<s1.length ){
            result+=s1[i];
        }
        if (i<s2.length) {
            result+=s2[i];
        }
        
    }
    return result;
}

console.log(merge2String("abc","0123"));


//bai3
localStorage.setItem("dem",3)
function game(){

    let random_number=Math.floor(Math.random()*10)+1;
    console.log(random_number);
    let button=document.getElementById("button").addEventListener("click",function(){
        let dm=localStorage.dem;
        if (dm != 0) {
            let input = document.getElementById("input").value;
            dm -= 1;
            localStorage.setItem("dem", dm)
            if (input > random_number) {
                alert("số nhỏ hơn")
            } else
                if (input < random_number) {
                    alert("số lớn hơn")
                }
            else if(input==random_number){
                localStorage.setItem("dem", 0)
                alert("chính xác")
            }
        }else{
            alert("bạn đã hết lượt chơi")
        }
    })
}
game()