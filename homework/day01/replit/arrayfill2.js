// 핸드폰 번호가 담긴 문자열 phone이 주어질 때,
// 뒤의 4자리를 "*"로 바꿔서 리턴해주세요.

function inde(num){
    let a = num[7]
    return a
}


function solution(phone) {
    let arr = phone.split(inde(phone));
    // 여기에서 작성해주세요.
    arr = arr[0] + arr[1].fill("*")
    return arr
    
  }

  console.log("결과", solution('01012345678')); // "0101234****"
  