let arr911:[string,number] = ["abc",123]

console.log(arr1[1])

function asyncFunction1():Promise<any>{

	return new Promise<any>((resolve,reject)=>{
		setTimeout(()=>{
			resolve("123")
		},2000)

	})

}
