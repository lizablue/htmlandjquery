$(document).ready(function () {
    // create first button
    let btnText = 'click me';
    $('<button id="firstBtn">' + btnText + '</button>').insertAfter('#1');

    // display alert on button click
    $('#firstBtn').click(function () {
        let quoteArray = [
            '\"Whenever I\'m about to do something, I think, \'Would an idiot do that?\'\" - Dwight Schrute',
            '\"How would I describe myself? Three words: hardworking, alpha male, jackhammer, merciless, insatiable.\" - Dwight Schrute',
            '\"Learn your rules, you better learn your rules, if you don\'t, you\'ll be eaten in your sleep.\" - Dwight Schrute',
            '\"I am ready to face any challenge that might be foolish enough to face me.\" - Dwight Schrute'
        ]
        let randomQuote = quoteArray[Math.floor(Math.random() * quoteArray.length)];
        alert(randomQuote);
    })

    // display text from input in an alert
    $('#btnInput').click(function () {
        let str = $('#txtInput').val();
        alert(str);
    })

    // change div background color on mouseover
    $('#color').hover(function() {
        $(this).css("background-color", "green");
    }, function () {
        $(this).css("background-color", "");
    });

});