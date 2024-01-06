//This program will randomly output a star sign, positive message and a piece of advice.
let starSigns= ['Aries', 'Taurus', 'Gemini','Cancer','Leo','Virgo','Libra','Scorpio','Sagittarius','Capricorn','Aquarius','Pisces'];
let userPositiveMessage=['Good fortune awaits you','This will be a great year for you','Youre doing great!'];
let userAdvice=['Be careful who you trust','Keep working hard', 'Persistance pays off'];

//This code will generate a Random star sign.
const generateRandomStarSign = () => {
    let num= Math.floor(Math.random()*starSigns.length);
    return starSigns[num];
}
//This code will generate a positive message from the userPositiveMessage array.
const generatePositiveMessage = () => {
    let num= Math.floor(Math.random()*userPositiveMessage.length);
    return userPositiveMessage[num];
}
////This code will generate a piece of advice from the userAdvice array.
const generateUserAdvice = () => {
    let num= Math.floor(Math.random()*userAdvice.length);
    return userAdvice[num];
}

//This code will format the concatinated output to console. 
console.log("Star sign: " + generateRandomStarSign());
console.log("Message: " + generatePositiveMessage());
console.log("Advice: " + generateUserAdvice());