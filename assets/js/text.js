/*banner text*/
$("h4").css({"color": "white", "font-style": "italic", "text-align": "center", "padding-top": "2rem"});

$("h4").on({
    mouseenter: function(){
        $(this).css("font-size", "3rem", "z-index", "3");
    },
    mouseleave: function(){
        $(this).css("font-size", "1.2rem", "z-index", "3");
    }
});

/*h2 headings*/
$("h2").css({"text-align": "center", "padding-top": "1rem"});

$("h2").on({
    mouseenter: function(){
        $(this).css("font-size", "2rem");
    },
    mouseleave: function(){
        $(this).css("font-size", "1rem");
    }
});

/*navigation achor tags*/
$("a").on({
    mouseenter: function(){
        $(this).css("font-size", "1.2rem");
    },
    mouseleave: function(){
        $(this).css("font-size", "1rem");
    }
});

/*button*/
$("button").on({
    mouseenter: function(){
        $(this).css("font-size", "2.5rem");
    },
    mouseleave: function(){
        $(this).css("font-size", "2rem");
    }
});