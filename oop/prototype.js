let arr = ["ayon", "mishkat"];

let rating = {
  ayon: 1291,
  mishkat: 1443,

  codeforces: function () {
    console.log(`Rating of ${this.ayon} and ${this.mishkat}`);
  },
};

// custom method banabo object er moddhe, jeta diye ashob array, function, string inject korte pare

Object.prototype.maxRating = function () {
  console.log(`Max rating is ${Math.max(this.ayon, this.mishkat)}`);
};

rating.codeforces();
rating.maxRating(); // custom method banaisi, but eta bad practice, karon eta sob object er moddhe chole jabe, jeta unexpected behavior create korte pare, tai eta avoid kora uchit.
arr.maxRating(); // NaN

Array.prototype.ayon = function () {
  console.log("This is a custom method for array");
};

arr.ayon(); // This is a custom method for array
// rating.ayon(); // wrong karon array, string, function shovbar baap object, baap er power sontan er moddhe jay, but sontan er power baap e jay na

/*
    Function

    Array         ----->    Object   ---->   null

    String

    Object e custom method korle function, array, string shovbar baap object e chole jabe, but array or function e custom method korle baap object e chole jabe na. r tader siblings e jawar ques ei ashe na! 
*/

let s = "Ayon    ";
let t = "   Mishkat   ";
Object.prototype.trueLength = function () {
  console.log(`${this.trim()}'s true length is ${this.trim().length}`);
};

s.trueLength(); // Ayon true length is 4
t.trueLength();// Mishkat true length is 7
'ava'.trueLength(); // trayee true length is 6
