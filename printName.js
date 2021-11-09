//we want a script that we can type
//node printName.js [Testname]
//=>welcome to webDevCore [Testname]


const username = process.argv[2]

function printName(){
    console.log("welcome to webDevCore " + username+ "!");
}

printName();