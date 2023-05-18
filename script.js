function letterCombinations(input_digit) {
  //Complete the function
	   
    if(input_digit == ""){
        return [];
    }
    let table = [ '0','1','abc','def','ghi','jkl','mno','pqrs','tuv','wxyz'];
     
    let res =[];
    let que = [''];
     
    while(que.length>0){
        let str = que[0];
        que.shift();
         
        if(str.length == input_digit.length){
            res.push(str); // if all digits are replaced with char push to result
        } else{
//             get the current number from the digits i.e if str.length = 2 , digits =123 s= 3
            let s= Number(input_digit.charAt(str.length));
            let value = table[s]; 
			
             
            for(i=0;i<value.length;i++){
                que.push(str+value.charAt(i));
            }
        }
    }
     
    return res;
     
}