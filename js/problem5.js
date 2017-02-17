"use strict";

/*
 Problem 5:

 Background:
 India is a nation of many languages. Hindi is spoken, or at least understood, in many regions. English is spoken in
 many cities as well. In Bangalore, Kannada is the local language. Urdu is another language spoken in some parts of
 India. What is interesting about Urdu is that, unlike most languages, it is written right to left.
 http://en.wikipedia.org/wiki/Urdu#Urdu_script

 Problem statement:
 A company released a newspaper advertisement containing text in Hindi, Urdu, and English. However it made a mistake in
 writing the Urdu words left to right instead of right to left. Write a program to correct the mistake and restructure
 the input into one line, and also to count the total words in the advertisement. Note that the words are provided in
 the form of a nested array. The Urdu words are in the second array.

 Example:
 [
     ["zara", "dhyaan", "dein"],
     ["mazarat", "chahenge"], // reverse this line
     ["attention", "please"]
 ]


 Given an advertising text:
     zara dhyaan dein
     mazarat chahenge
     attention please
 When I correct the text
 Then the result should be:
     zara dhyaan dein chahenge mazarat attention please
     count: 7
 */

// Write your JavaScript here

function changeElementText(element, answer) {
    $(element).text(answer);
}

function fixUrdu(advertisementText) {
    printOriginalAdvertisement(advertisementText);

    var count = getTotalTextCount(advertisementText);

    var urduTextLength = advertisementText[1].length;
    var temp = "";
    for (var x = 0; x < (urduTextLength / 2); x++){
        temp = advertisementText[1][x];
        advertisementText[1][x] = advertisementText[1][urduTextLength-1-x];
        advertisementText[1][urduTextLength-1-x] = temp;
    }

    printCorrectedAdvertisement(advertisementText);
    changeElementText("#textCount", count);
}

// Prints out the original advertisement with each language on its own line
function printOriginalAdvertisement(advertisementText){
    var hindiText = "";
    var urduText = "";
    var englishText = "";

    for (var x = 0; x < advertisementText[0].length; x++){
        hindiText += (advertisementText[0][x] + " ");
    }
    for (var x = 0; x < advertisementText[1].length; x++){
        urduText += (advertisementText[1][x] + " ");
    }
    for (var x = 0; x < advertisementText[2].length; x++){
        englishText += (advertisementText[2][x] + " ");
    }

    changeElementText("#originalHindi", hindiText);
    changeElementText("#originalUrdu", urduText);
    changeElementText("#originalEnglish", englishText);
}

// Prints out the corrected advertisement in one line
function printCorrectedAdvertisement(advertisementText){
    var correctedText = "";
    for (var x = 0; x < advertisementText.length; x++){
        for (var y = 0; y < advertisementText[x].length; y++){
            correctedText += (advertisementText[x][y] + " ");
        }
    }

    changeElementText("#correctedText", correctedText);
}

// Gets the total number of words in the advertisement
function getTotalTextCount(advertisementText){
    var length = 0;

    for (var x = 0; x < advertisementText.length; x++){
        length += advertisementText[x].length;
    }

    return length;
}