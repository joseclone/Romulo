
class Node {
  constructor(value, next){
    this.value = value
    this.next = next
  }
}

class LinkedQueue {
  constructor (){
    this._front = null
    this._tail = null
    this._size = 0
  }

  enqueue (value){
    const node = new Node (value, null)

    if (this._size === 0){
      this._front = node
      this._tail = node
    } else {
      this._tail.next = node
      this._tail = node
    }

    this._size++
    
    return value
  }

  dequeue (value){
    const node = new Node (value, null)

    if (this._size === 0){
      return "Fila Vazia"
    } else {
      const value = this._front.value
      this._front = this._front.next
      this._size--
    }
    
    return value
  }

  size() {
    return this._size;
  }  

  front(){
    if (this.isEmpty()){
      return "Fila Vazia"
    }
    return this._front.value
  }

  tail(){
    if (this.isEmpty()){
      return "Fila Vazia"
    }

    return this._tail.value
  }

  isEmpty(){
    return this._size === 0
  }

  print() {
    let temp = this._front
    let lista = []
    while (temp !== null){
      lista.push(temp.value)
      temp = temp.next
    }
    return lista
  }
}

export {LinkedQueue}  