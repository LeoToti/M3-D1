/**
 * /*
 *
 * 1)
 * Create a function to calculate the sum of the two given integers. If the two values are same, then returns triple their sum.
 *
 * @format
 */

let sum = function (a, b) {
  let summy = 0;
  if (a != b) {
    summy = a + b;
  } else if (a == b) {
    summy = (a + b) * 3;
  }
  return summy;
};

console.log(sum(4, 5));

/*
2)
Create a function to check two given numbers and return true if one of the number is 50 or if their sum is 50.
*/

let cinquanta = function (a, b) {
  if (a + b == 50 || a == 50 || b == 50) {
    return true;
  } else {
    return false;
  }
};

console.log(cinquanta(40, 30));

/*
3)
Create a function to remove a character at the specified position of a given string and return the new string.
*/

let removeChar = function (string, index) {
  var str = string;
  str = str.slice(0, index) + str.slice(index + 1);
  return str;
};
console.log(removeChar("ciao come stai?", 2));

/*

4)
 Create a function to find the largest of three given integers.
*/

let findBig = function (a, b, c) {
  if (a > b && a > c) {
    return a;
  } else if (b > a && b > c) {
    return b;
  } else if (c > b && c > a) {
    return c;
  }
};

console.log(findBig(5, 16, 8));

/*
5)
Create a function to check whether two numbers are in range 40..60 or in the range 70..100 inclusive.
*/

let checkRange = function (a, b) {
  rangeA = "";

  if ((a >= 40 && a <= 60) || (a >= 70 && a <= 100)) {
    rangeA = `${a} e ${b} is in range`;
    return rangeA;
  } else if ((b >= 40 && b <= 60) || (b >= 70 && b <= 100)) {
    rangeB = `${b} is in range tra 70 e 100`;
  }
};

console.log(checkRange(50, 73));

/*
6) 

Create a function to create a new string of specified copies (positive number) of a given string.
*/

let repString = function (string, index) {
  if (index > 0) {
    return string.repeat(index);
  } else {
    return `insert a positive number`;
  }
};

console.log(repString("ciao ", 3));

/*

7)
Create a function to display the city name if the string begins with "Los" or "New" otherwise return blank.
*/

let cityCheck = function (city) {
  let str = city.slice(0, 3).toLowerCase();
  if (str == "los" || str == "new") {
    return city;
  } else {
    return "blank";
  }
};

console.log(cityCheck("New York"));

/*
8)
Create a function to calculate the sum of three elements of a given array of integers of length 3.
*/

let sumThree = function (array) {
  let sum = 0;

  if (array.length < 4) {
    for (i = 0; i < array.length; i++) {
      sum += array[i];
    }

    return sum;
  } else {
    return "the array has more than 3 elements";
  }
};

console.log(sumThree([10, 5, 6]));

/*

9)
Create a function to test whether an array of integers of length 2 contains 1 or a 3. 
*/

let arrayLength = function (array) {
  if (array.indexOf(1) != -1 || array.indexOf(3) != -1) {
    return true;
  } else {
    return false;
  }
};

console.log(arrayLength([10, 3]));

/*

10)

Create a function to test whether an array of integers of length 2 does not contain 1 or a 3



11)

Create a function to find the longest string from a given array of strings.

12)

Create a function to find the types of a given angle.

Types of angles:
    Acute angle: An angle between 0 and 90 degrees.
    Right angle: An 90 degree angle.
    btuse angle: An angle between 90 and 180 degrees.
    Straight angle: A 180 degree angle.

13)

Create a function to find the index of the greatest element of a given array of integers

14)

Create a function to get the largest even number from an array of integers.

15)

Create a function to check from two given integers, whether one is positive and another one is negative.

16)

Create a function to create new string with first 3 characters are in lower case and the others in upper case. If the string length is less than 3 convert all the characters in upper case. 

17)

Create a function to calculate the sum of the two given integers, If the sum is in the range 50..80 return 65 other wise return 80.

18)

Create a function to convert a number to a string, the contents of which depend on the number's factors. Follow next example:

If the number has 3 as a factor, output 'Diego'.
If the number has 5 as a factor, output 'Riccardo'.
If the number has 7 as a factor, output 'Stefano'.
If the number does not have 3, 5, or 7 as a factor, just pass the number's digits straight through.
Examples
28's factors are 1, 2, 4, 7, 14, 28.
this would be a simple "Stefano".
30's factors are 1, 2, 3, 5, 6, 10, 15, 30.
this would be a "DiegoRiccardo".
34 has four factors: 1, 2, 17, and 34.
this would be "34".

19)
Create a function that given a phrase returns its acronym, like British Broadcasting Corporation returns BBC

*/

let arrayLengthNo = function (array) {
  if (array.includes(1) || array.includes(3)) {
    return true;
  } else {
    return false;
  }
};

console.log(arrayLengthNo([10, 5]));

let stringLength = function (array) {
  let ciao = array.sort(function (a, b) {
    return b - a;
  });
  return ciao[0];
};

console.log(stringLength([5, 10, 4, 5, 78, 90]));

let angle = function (angle) {
  if (angle >= 0 && angle < 90) {
    return "Acute angle";
  }
  if (angle == 90) {
    return "Right angle";
  }
  if (angle > 90 && angle < 180) {
    return "btuse angle";
  }
  if (angle == 180) {
    return "Straight angle";
  }
};

console.log(angle(90));

let biggestInedx = function (arr) {
  if (arr.length === 0) {
    return -1;
  }

  var max = arr[0];
  var maxIndex = 0;

  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      maxIndex = i;
      max = arr[i];
    }
  }

  return maxIndex;
};

console.log(biggestInedx([8, 90, 38, 5, 6, 7, 3]));

let biggestInedxEven = function (arr) {
  if (arr.length === 0) {
    return -1;
  }

  var max = arr[0];
  var maxIndex = 0;

  for (var i = 1; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
      if (arr[i] > max) {
        maxIndex = i;
        max = arr[i];
      }
    }
  }

  return maxIndex;
};

console.log(biggestInedxEven([8, 90, 101, 5, 6, 7, 3]));

let posNeg = function(a,b){

    if(a>0 && b<0 || a<0 && b>0){

        return true

    }
    else {
        return false
    }
}

console.log(posNeg(-5,5))

let threeUpper = function(string) {

    let ciao = string.slice(0,3).toUpperCase()
    console.log(ciao)
    let ciao2 = string.slice(3,string.length).toLowerCase()
    console.log(ciao2)
    return ciao + ciao2

}

console.log(threeUpper("cia"))

let strangeSummy = function(a,b) {
    let sum =a+b

    if (sum>=50&&sum<=80){

        return 65


    }
    else{
        return 80
    }
}

let factor = function(num) {
    let factorList = []
    for(let i = 1; i <= num; i++) {

        // check if number is a factor
        if(num % i == 0) {
            factorList.push(i)
        }
    }
    console.log(factorList.length)
    
    if (factorList.length==2){
        return "Diego"


    }
    else if (factorList.length==4){
        return "Riccardo"


    }
    else if (factorList.length==6){
        return "Stefano"


    }

    else if (factorList.length==7){
        return "DiegoRiccardo"


    }

    else if (factorList.length==11){
        return "RiccardoStefano"


    }
    else if (factorList.length==9){
        return "DiegoStefano"


    }
    else {
        return factorList[factorList.length-1]


    }
    





}

console.log(factor(15))

let acro = function(string){
    let acronimo = ""

    let arr = string.split(" ")
    console.log(arr)
    for (i=0;i<arr.length;i++){
        let ciao = arr[i].slice(0,1)
        acronimo += ciao

    }
    return acronimo
}

console.log(acro("ciao come stai"))
