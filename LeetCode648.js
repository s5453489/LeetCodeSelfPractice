/** 648. Replace Words
 * @param {string[]} dict
 * @param {string} sentence
 * @return {string}
 *
 * In English, we have a concept called root,
 * which can be followed by some other words to form another longer word -
 * let's call this word successor. For example, the root an, followed by other,
 * which can form another word another.
 * Now, given a dictionary consisting of many roots and a sentence.
 * You need to replace all the successor in the sentence with the root forming it.
 * If a successor has many roots can form it,
 * replace it with the root with the shortest length.
 * You need to output the sentence after the replacement.
 *
 * The input will only have lower-case letters.
 * 1 <= dict words number <= 1000
 * 1 <= sentence words number <= 1000
 * 1 <= root length <= 100
 * 1 <= sentence words length <= 1000
 */
let word;

let replaceWords = function(dict, sentence) {
    let sentenceSplitArray = splitSentence(sentence);
    let ans;
    for(let i=0; i<dict.length; i++){
        sentence = checkIfMatch(dict[i], sentenceSplitArray);
    }
    ans = sentence.join(" ");
    return ans;
};

function splitSentence(s){
    let sentenceWord = [];
    let sentenceWordArray = [];
    for(let i = 0; i<s.length; i++){
        if((s[i] == ' ')||(i==s.length-1)){
            i++;
            sentenceWordArray.push(sentenceWord.join(""));
            sentenceWord.length = 0;
        }
        sentenceWord.push(s[i]);
    }
    return sentenceWordArray;
}

function checkIfMatch(d, s){
    let compareRoot = [];
    let sentenceTemp, compareRootString;

    for(let i = 0; i<s.length; i++){
        sentenceTemp = s[i];
        compareRootString = "";
        compareRoot.length = 0;
        if(d.length<=s[i].length){
            for(let j = 0; j<d.length; j++) {
                compareRoot.push(sentenceTemp[j]);
            }
            compareRootString = compareRoot.join("");

            if(compareRootString == d){
                s[i] = d;
            }
        }
    }
    return s;
}

