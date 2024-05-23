
function asyncFunction1():Promise<any>{

	return new Promise((resolve,reject)=>{
		setTimeout(()=>{
			resolve(123)
		},1000)

	})
}

const a = asyncFunction1()

a.then((res2)=>{
	console.log(res2)
}).catch((err)=>{
	console.log(err)
})