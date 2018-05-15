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

/*ERROR
["e","k","c","harqp","h","gsafc","vn","lqp","soy","mr","x","iitgm","sb","oo","spj","gwmly","iu","z","f","ha","vds","v","vpx","fir","t","xo","apifm","tlznm","kkv","nxyud","j","qp","omn","zoxp","mutu","i","nxth","dwuer","sadl","pv","w","mding","mubem","xsmwc","vl","farov","twfmq","ljhmr","q","bbzs","kd","kwc","a","buq","sm","yi","nypa","xwz","si","amqx","iy","eb","qvgt","twy","rf","dc","utt","mxjfu","hm","trz","lzh","lref","qbx","fmemr","gil","go","qggh","uud","trnhf","gels","dfdq","qzkx","qxw"]
"ikkbp miszkays wqjferqoxjwvbieyk gvcfldkiavww vhokchxz dvypwyb bxahfzcfanteibiltins ueebf lqhflvwxksi dco kddxmckhvqifbuzkhstp wc ytzzlm gximjuhzfdjuamhsu gdkbmhpnvy ifvifheoxqlbosfww mengfdydekwttkhbzenk wjhmmyltmeufqvcpcxg hthcuovils ldipovluo aiprogn nusquzpmnogtjkklfhta klxvvlvyh nxzgnrveghc mpppfhzjkbucv cqcft uwmahhqradjtf iaaasabqqzmbcig zcpvpyypsmodtoiif qjuiqtfhzcpnmtk yzfragcextvx ivnvgkaqs iplazv jurtsyh gzixfeugj rnukjgtjpim hscyhgoru aledyrmzwhsz xbahcwfwm hzd ygelddphxnbh rvjxtlqfnlmwdoezh zawfkko iwhkcddxgpqtdrjrcv bbfj mhs nenrqfkbf spfpazr wrkjiwyf cw dtd cqibzmuuhukwylrnld dtaxhddidfwqs bgnnoxgyynol hg dijhrrpnwjlju muzzrrsypzgwvblf zbugltrnyzbg hktdviastoireyiqf qvufxgcixvhrjqtna ipfzhuvgo daee r nlipyfszvxlwqw yoq dewpgtcrzausqwhh qzsaobsghgm ichlpsjlsrwzhbyfhm ksenb bqprarpgnyemzwifqzz oai pnqottd nygesjtlpala qmxixtooxtbrzyorn gyvukjpc s mxhlkdaycskj uvwmerplaibeknltuvd ocnn frotscysdyclrc ckcttaceuuxzcghw pxbd oklwhcppuziixpvihihp"
Output:
    "i miszkays w gvcfldkiavww v dvypwyb bxahfzcfanteibiltins ueebf lqhflvwxksi dc k w ytzzlm gximjuhzfdjuamhsu gdkbmhpnvy i mengfdydekwttkhbzenk w h ldipovluo a nusquzpmnogtjkklfhta k nxzgnrveghc mpppfhzjkbucv c uwmahhqradjtf i z q yzfragcextvx i i j gzixfeugj rnukjgtjpim h a x h ygelddphxnbh rvjxtlqfnlmwdoezh z i bbfj mhs nenrqfkbf spfpazr w c dtd c dtaxhddidfwqs bgnnoxgyynol h dijhrrpnwjlju muzzrrsypzgwvblf z h q i daee r nlipyfszvxlwqw yoq dewpgtcrzausqwhh q i k bqprarpgnyemzwifqzz oai pnqottd nygesjtlpala q gyvukjpc s mxhlkdaycskj uvwmerplaibeknltuvd ocnn f c pxbd oklwhcppuziixpvihih"
Expected:
    "i miszkays w gvcfldkiavww v dvypwyb bxahfzcfanteibiltins ueebf lqhflvwxksi dc k w ytzzlm gximjuhzfdjuamhsu gdkbmhpnvy i mengfdydekwttkhbzenk w h ldipovluo a nusquzpmnogtjkklfhta k nxzgnrveghc mpppfhzjkbucv c uwmahhqradjtf i z q yzfragcextvx i i j gzixfeugj rnukjgtjpim h a x h ygelddphxnbh rvjxtlqfnlmwdoezh z i bbfj mhs nenrqfkbf spfpazr w c dtd c dtaxhddidfwqs bgnnoxgyynol h dijhrrpnwjlju muzzrrsypzgwvblf z h q i daee r nlipyfszvxlwqw yoq dewpgtcrzausqwhh q i k bqprarpgnyemzwifqzz oai pnqottd nygesjtlpala q gyvukjpc s mxhlkdaycskj uvwmerplaibeknltuvd ocnn f c pxbd oklwhcppuziixpvihihp"
*/
