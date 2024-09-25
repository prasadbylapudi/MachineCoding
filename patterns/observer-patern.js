// https://codesandbox.io/embed/quizzical-sinoussi-md8k5


class Observable {
  constructor() {
    this.observers = [];
  }

  subscribe(f) {
    console.log("subscibing:",f)
    this.observers.push(f);
    console.log("observers are: ",this.observers)
  }

  unsubscribe(f) {
    this.observers = this.observers.filter(subscriber => subscriber !== f);
  }

  notify(data) {
    console.log("received data is:",data)
    // this.observers.forEach(observer => observer(data));
    this.observers.forEach((observer)=>{
      console.log("observer is:",observer)
      observer(data);
    })
  }
}

export default new Observable();
