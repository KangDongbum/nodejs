const fs = require('fs').promises;
// 				저장할 파일명  저장할 데이터
fs.writeFile('./writeme.txt','글 입력')
	.then(() => {
		console.log("파일 쓰기 성공");
		return fs.readFile('./writeme.txt');
	})
	.then((data) =>{
		console.log(data.toString());
	})
	.catch((err) =>{
		console.error(err);
	});
/*	//writeFile 용량이 크면 실행이 안될수도 있다.
fs.readFile('./writeme.txt')
	.then((data)=>{
		console.log(data.toString());
	})
	.catch((err) =>{
		console.error(err);
	});
*/