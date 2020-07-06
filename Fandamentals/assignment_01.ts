var phrase = 'first of all, just getting to the theater presents difficulties. leaving a home equipped with a tv and a video recorder is not an attractive idea on a humid, cold, or rainy night. even if the weather cooperates, there is still a thirty-minute drive to the theater down a congested highway, followed by the hassle of looking for a parking space. and then there are the lines. after hooking yourself to the end of a human chain, you worry about whether there will be enough tickets, whether you will get seats together, and whether many people will sneak into the line ahead of you.'

function sentenceCase(str: string) 
{
    if(str.length > 0)
    {
        var result =  str.toString().replace( /(^|\. *)([a-z])/g, function(match, separator, char) 
        {
            return `${separator}${char.toUpperCase()}`;
        });
        console.log(`String conversion in sentence case: '${result}' \n`);
    }
    else
    {
        console.log('Empty string. \n')
    }
}

function wordCount(str: string, matchingStr: string)
{
    if(str.length > 0)
    {
        var words = str.split(" ");
        let count:number;
        count = 0;
        for (var i = 0; i < words.length - 1; i++) 
        {
            if(words[i] === matchingStr)
            {
                count++;
            }
        }
        console.log(`Total words matching with '${matchingStr}' in the phrase are : ${count} \n`);
    }
    else
    {
        console.log('Empty string. \n')
    }
}

function totalWordCount(str: string)
{
    if(str.length > 0)
    {
        var words = str.split(" ");
        console.log(`Total words in the phrase are: ${words.length} \n`);
    }
    else
    {
        console.log('Empty string. \n')
    }
}

function wordsWithChar(str: string, char: string)
{
    if(str.length > 0)
    {
        let words = str.split(" ");
        var wordsWithChar = '';
        for (var i = 0; i < words.length - 1; i++) 
        {
            if(words[i].indexOf(char) !== -1)
            {
                wordsWithChar += words[i] + ',';
            }
        }
        console.log(`Total words with '${char}' in the phrase are : ${wordsWithChar} \n`);
    }
    else
    {
        console.log('Empty string. \n')
    }
}

sentenceCase(phrase);
wordsWithChar(phrase, 'a');
totalWordCount(phrase);
wordCount(phrase, 'the');