// 2) Using a for loop print out 1 - 10 to the console

for (var i = 1; i <= 10; i++){
    console.log(i)
}

// 3) Write a while loop with true as the conditional WARNING: 
//This will cause an infinite loop condition so be mindful that you don't save your file if you 're using live server, 
//otherwise don't execute your JS until you complete step 5

var warning = true
while(warning){
    if (warning = false){
        break;
    }
    console.log(warning)
}

// 4) In the code block of your while loop write a break statement to terminate the loop NOTE: it is ok to save or execute your JavaScript now

// 5) Write a for loop that starts at 99 and DECREMENTS down to 1

for (var i = 99; i >=1; i--) {
    if (i !== 1)
    console.log(i + "bottles of beer on the wall. Take one down pass it around.");

    if (i === 1)
    console.log(i + "bottles of beer on the wall. Take one down pass it around.");
}

// 6) In the code block of the for loop console log the concatenation of your iterator 
//(typically "i") and " bottles of beer on the wall. Take one down pass it around." 
//NOTE: should write "99 bottles of beer on the wall. Take one down pass it around." 
//=> "1 bottles of beer on the wall. Take one down pass it around." 
//BONUS: Format it to where it is "1 bottle" instead of "1 bottles"



// 7) Create a variable named bools set it to the array [true, true, false, true, false, true, true, true]

var bools = [true, true, false, true, false, true, true, true]
for (var i = 0; i < bools.length; i++)
{
    if (bools[i] === true)
    {
    console.log(bools[i]);
    }
}


// 8) Write a for loop that iterates through every element of the bools array and writes the 
//element out to the console if it is "true" NOTE: Should output "true" 6 times 
//HINT: bools.length, use an if statement inside the for loop code block to check for true


// 9) Create a variable named str set it to the string "apples"

var str = "apples"
for (var i = 0; i < str.length; i++)
{
    if (str[i] === 'a')
    {
        console.log(str[i]);
    }
    else if (str[i] === 'e')
    {
        console.log(str[i]);
    }

}

// 10) Loop through each character of the str string. Console log all the vowel characters. NOTE: a, e, i, o, u
// HINT: str.length, use an if statement to check it the character is a vowel, if so log it to the console