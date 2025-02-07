const queue = []

function enqueue(value){
	queue.push(value)
}

function dequeue(value){
	return queue.shift(value)
}

function front(){
	if(queue.length === 0){
	   return null
	}
	return queue[0]
}

function size(){
	return queue.length
}

function isEmpty(){
	return queue.length === 0
}

function printQueue(){
	console.log(queue)
}

function rear(){
    return isEmpty()? null: queue[size()-1]
}
export {enqueue, dequeue, front, size, isEmpty, printQueue, rear, queue}