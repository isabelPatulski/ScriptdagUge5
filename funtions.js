function sayHi() {
    //console.log er den måde vi i starten bruger til at få noget ud (altså som sout)
    console.log("Hi class")
}

function add(n1, n2){
    return n1 +n2;
}

const sub = function(n1,n2){
    return n1 - n2
}

const cb = function(n1,n2, callback){
    return "Result from the two numbers: "+n1+"+"+n2+"="+callback(n1,n2);
};
//Opgave 1
//Hvad vil følgende printe?
//a) Kommer til at printe 3 da den tager add funktionen og får to argumenter 1 og 2.
console.log( add(1,2) );
//b) Den får ikke nogle argumenter så den vil printe hele funktionens tekst: function add(n1, n2){
//     return n1 +n2;
console.log( add );
//c) Her vil den printe 3, da den lægger 1 og 2 sammen og ignorere det sidste tal da den kun skal bruge to
console.log( add(1,2,3) );
//d)
console.log( add(1) );
//e) den vil printe stringsne fra cb, indsætte 3 og 3 og til sidst vil den bruge funtionen add og lægge dem sammen;
// "Result from the two numbers: "+3+"+"+3+"="+6;
console.log( cb(3,3,add) );
//f) Her vil der komme en fejl fordi man tager "()" med når man kalder funktionen og så skal man sætte nye argumenter ind
console.log(cb(3,3,add()));
//g)Her vil den printe "Result from the two numbers: "+3+"+"+hh+"="+3hh;
console.log(cb(3,"hh",add));

//Opgave 2
//Rewrite the Callback function expression (cb)  to make a check for all its three required arguments,
// and throw an Error if any of the arguments do not match
const cb = function(n1,n2, callback){
    try {
        if (n1  = null, n2 = null, callback = null)
            throw new Error('One or more arguments are missing!')
    } catch (e) {
        console.error(e.name + ': ' + e.message)
        return 0;
    }
    return "Result from the two numbers: "+n1+"+"+n2+"="+callback(n1,n2);
};

//Opgave 3
//Write a mul(n1, n2) function (inspired by add and sub) and use it as the callback for the cb function
function mul(n1, n2){
    return n1 * n2;
}
console.log(cb(2,4, mul()))

//Call cb, this time with an anonymous function that divides the first argument with the second
const div = function (n1, n2) {return n1 / n2};
console.log(cb(5,5, div()))

