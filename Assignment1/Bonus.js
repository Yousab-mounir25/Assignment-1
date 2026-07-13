
function createCounter(init) {
    let num = init;
    const counter = {
        increment: function(){
            num+=1
            return num
        },
        reset : function(){
            num = init
            return num
        },
        decrement:function(){
            num-=1
            return num
        }
    }
    return counter;
};

const counter = createCounter(5)
console.log(counter.increment());
console.log(counter.reset());
console.log(counter.decrement());

console.log("-----------------------------------------------")

const counter2 = createCounter(0);
console.log(counter2.increment()); 
console.log(counter2.increment()); 
console.log(counter2.decrement()); 
console.log(counter2.reset()); 
console.log(counter2.reset()); 

