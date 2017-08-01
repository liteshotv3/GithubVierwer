/**********************************Immediately invoked function express (IIFE) ***************************/
//pronounced "iffy"
//This is code from previous example with comments stripped out,
//In order to avoid global variables we have encapsulated everything in the function program()
//That still leaves us with the global variable program, so instead we will
//COMMENT OUT THE PROGRAM DECLARATION
//and make a anonymous self invoking function, IIFE
//syntax of iffe ( function() { do stuff }() )
//must have the whole thing in parenthesis

//var program = function() {
(function () {
        var createWorker = function () {

            var task1 = function () {
                workCount++;
                console.log("Task1", workCount);
            };

            var task2 = function () {
                workCount++;
                console.log("Task2", workCount);
            };

            var workCount = 0;

            return {
                job1: task1,
                job2: task2
            };
        };

        var worker = createWorker();

        worker.job1();
        worker.job2();
        worker.job2();
        worker.job2();

    })();

//as a result we have avoided all global variables