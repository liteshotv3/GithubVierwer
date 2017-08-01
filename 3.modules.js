/**************************REVEALING MODULE PATTERN****************************/
//common approach used in angular
var createWorker = function () {

    //think of this as private implementation details
    var task1 = function () { //call task1 job1 to avoid confusion
        workCount++;
        console.log("Task1", workCount);
    };

    var task2 = function () { //call task2 job2 to avoid confusion
        workCount++;
        console.log("Task2", workCount);
    };

    //you don't have to expose this if you dont want, just keep this as an internal implementation detail
    //we use them to complete task1 and 2 but we don't need to expose it, so they can't be modified
    var workCount = 0;

    //private implementation up to this line

    //this is how we expose these functions as methods that can be envoked as worker.job1
    //we use the object-literal syntax: { item1: item2 }
    return {
        job1: task1,
        job2: task2
    };
    //when you return these object you are defining the public api

};

//start here
//client here gets a worker by envoking a funciton createWorker
var worker = createWorker();

//once you have worker you can ask it to invoke jobs, not important which
worker.job1();
worker.job2();
worker.job2();
worker.job2();
//worker.task1(); //won't work! not exposed

//we are creating all our variables globally, this should be avoided, look at 4.IIFE to see how to avoid it