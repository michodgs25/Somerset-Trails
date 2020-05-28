/*banner text*/
$("h4").css({"color": "white", "font-style": "italic", "text-align": "center", "padding-top": "5rem"});

$("h4").on({
    mouseenter: function(){
        $(this).css("font-size", "3rem");
    },
    mouseleave: function(){
        $(this).css("font-size", "1.2rem");
    }
});

/*h2 headings*/
$("h2").css({"color": "green", "text-align": "center", "padding-top": "2rem"});

/*p text*/
$("p").css({"font-style": "italic", "text-align": "center"});

$("p").on({
  mouseenter: function(){
    $(this).css("background-color", "green", "color", "white");
  },
    mouseleave: function(){
    $(this).css("background-color", "white", "color", "black");
    }
});

$("a").on({
    mouseenter: function(){
        $(this).css("font-size", "1.5rem");
    },
    mouseleave: function(){
        $(this).css("font-size", "1rem");
    }
})