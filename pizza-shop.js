const EventEmitter=require('node:events')
class pizaShop extends EventEmitter{
    constructor(){
        super();
        this.orderNumber=0
    }
    order(size,topings){
        this.orderNumber++;
        this.emit('order',size,topings);
    }
    displayOrderNumber(){
        console.log(`Current order number:${this.orderNumber}`);
    }
}
module.exports=pizaShop