const scn = require("readline-sync");
var figlet = require("figlet");
let flag=0;
//const chalk = require('chalk')
//import chalk from "chalk";

console.log(figlet.textSync("Welcome to Quiz Master", { horizontalLayout: "full"}));
let name = scn.question("Enter your name: ");
let QuestionDB = {
    data:[
        {
            question: "What is the capital of India?",
            options:{
                1: "Delhi",
                2: "Mumbai",
                3: "Chennai",
                4: "Kolkata"
            },
            answer: 1
        },
        {
            question: "Oranges are native to?",
            options:{
                1: "Australia",
                2: "America",   
                3: "India",
                4: "China"
            },
            answer: 3
        },
        {
            question: "Which is the smallest element in the periodic table?",
            options:{
                1: "H",
                2: "He",
                3: "Li",
                4: "Be"
            },
            answer: 1
        },
        {
        question: "Humans breath through?",
        options:{
            1: "Finger",
            2: "Nose",
            3: "Eyes",
            4: "Teeth"
        },
        answer: 2
    }
    ] 
}


function askQuestion(QuestionDB){let i,j,k;

for(i=0;i<QuestionDB.data.length;i++)
    {
        console.log(QuestionDB.data[i].question);
        for (key in QuestionDB.data[i].options)
            console.log(`${key} : ${QuestionDB.data[i].options[key]}`);

        let answer = scn.questionInt("Enter your answer: ");
        if(answer==QuestionDB.data[i].answer)
            {
                console.log(("Correct Answer"));
                flag++;
            }
        else
        {
            console.log(("Correct Answer"));
            console.log(("The correct Answer is:",QuestionDB.data[i].answer))

        }
            console.log();
    }}

askQuestion(QuestionDB)



