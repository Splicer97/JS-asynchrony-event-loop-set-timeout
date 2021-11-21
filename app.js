console.log("start")

setTimeout(function () {
	console.log("inside 2 sec timeout")
}, 2000)
setTimeout(function () {
	console.log("inside 0 sec timeout")
}, 0)
//несмотря на то, что стоит задержка 0 секунд, в стакане асинхронные функции выполняются только после синхронных

console.log("end")

//start
//end
//inside 0 sec timeout
//inside 2 sec timeout