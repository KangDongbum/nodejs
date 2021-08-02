const bcrypt = require('bcrypt');
/**
*
*
*/
(async function (){
	const data ='abcd1234';
	const hash = await bcrypt.hash(data, 10);
	console.log(data, hash);
	
	const passwd= "abcd1234";
	const match = await bcrypt.compare(passwd, hash);
	if(match){
		console.log("비밀번호 일치");
	}else{
		console.log("비밀번호 불일치");	
	}
	
})();
	
	