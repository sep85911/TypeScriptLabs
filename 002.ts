let arr1:[string,number] = ["abc",123]

console.log(arr1[1])

function asyncFunction():Promise<any>{

	return new Promise<any>((resolve,reject)=>{
		setTimeout(()=>{
			resolve("123")
		},2000)

	})

}

