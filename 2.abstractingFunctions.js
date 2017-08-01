
var work = function(){
    console.log("Working Hard!");
    return "didn't work, just returned result";
};

work();

var doWork = function(anotherFunction){
    anotherFunction();
};

//This passes a function and doWork tells then executes that function
doWork(work);

//This would only pass the result of return value of work into doWork()
//doWork(work());
console.log(work());

//We create a function to envoke work() instead of simply invoking work ourselves to provide abstraction
//doWork() can have retry logic for example:

var doWork2 = function(anotherFunction){
    console.log("Starting work");

    try {
        anotherFunction();
    }
    catch(ex){
        console.log(ex);
    }

    console.log('ending work');
};

doWork2(work);