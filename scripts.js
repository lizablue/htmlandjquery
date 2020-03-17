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

    // add a paragraph with text
    $('<p>some text</p>').insertAfter('#4');
    
    // change paragraph text color on click
    $('p').click(function() {
        let colorArray = ["green", "black", "yellowgreen", "gold", "orange"]
        let randomColor = colorArray[Math.floor(Math.random() * colorArray.length)];
        $(this).css('color', randomColor);
    })

    // add a button and
    $('<button id=nameBtn>show name</button>').insertAfter('#5');
    $('<div id=nameDiv></div>').insertAfter('#nameBtn');

    $('#nameBtn').click(function(){
        $('<span>liz</span>').appendTo('#nameDiv')
    })

    let friendsArray = ['michael', 'pam', 'jim', 'dwight', 'creed', 'kelly', 'angela', 'kevin', 'oscar', 'toby'];
    let x = 0

    $('#friendBtn').click(function(){
        if(x < friendsArray.length) {
            $('<li>' + friendsArray[x] + '</li>').appendTo('#friendList');
            x++;
        } else {
            alert('I don\'t have any more friends');
        }
    })

});