initDraw(document.getElementById('canvas'));


function initDraw(canvas) {
    function setMousePosition(e) {
        var ev = e || window.event; //Moz || IE
        if (ev.pageX) { //Moz
            mouse.x = ev.pageX + window.pageXOffset;
            mouse.y = ev.pageY + window.pageYOffset;
       } else if (ev.clientX) { //IE
            mouse.x = ev.clientX + document.body.scrollLeft;
            mouse.y = ev.clientY + document.body.scrollTop;
        }

    };


    var mouse = {
        x: 0,
        y: 0,
        startX: 0,
        startY: 0

    };
    var element = null;



    canvas.onmousemove = function (e) {
        setMousePosition(e);
        if (element !== null) {
            element.style.width = Math.abs(mouse.x - mouse.startX) + 'px';
            element.style.height = Math.abs(mouse.y - mouse.startY) + 'px';
            element.style.left = (mouse.x - mouse.startX < 0) ? mouse.x + 'px' : mouse.startX + 'px';
            element.style.top = (mouse.y - mouse.startY < 0) ? mouse.y + 'px' : mouse.startY + 'px';
        }
    }

    canvas.onclick = function (e) {
        if (element !== null) {
            element = null;
            canvas.style.cursor = "crosshair";
            console.log("finished.");
        } else {
            console.log("begun.");
            mouse.startX = mouse.x;
            mouse.startY = mouse.y;
            element = document.createElement('div');
            // give color classes
            // color = red;
            // className = 'rectangle'+color

            element.className = 'rectangle';
            element.style.left = mouse.x + 'px';
            element.style.top = mouse.y + 'px';
            canvas.appendChild(element)
            canvas.style.cursor = "crosshair";
        }
    }
    $('#clear').click(function(){
    signaturePad.clear();
});
// $('.global-color li').click(function(){
//     $('.on').removeClass('on');
//     var $t = $(this);
//     $t.addClass('on');
//     var selectedColor = $t.data('color');
//     signaturePad.penColor = hexToRgb(selectedColor);
//     setCurrentColor(canvas, selectedColor);
// });
$('#yellow-pick').click(function (){
  alert('clickeD!');

//  $(".rectangle"+color).css("background-color","blue");
  $(".rectangle").css("background-color","yellow");
});

$('#green-pick').click(function (){
  alert('clickeD!');

//  $(".rectangle"+color).css("background-color","blue");
  $(".rectangle").css("background-color","green");
});

$('#orange-pick').click(function (){
  alert('clickeD!');

//  $(".rectangle"+color).css("background-color","blue");
  $(".rectangle").css("background-color","orange");
});

$('#blue-pick').click(function (){
  alert('clickeD!');

//  $(".rectangle"+color).css("background-color","blue");
  $(".rectangle").css("background-color","blue");
});


function hexToRgb(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? "rgb("+parseInt(result[1], 16)+
        ","+parseInt(result[2], 16)+
        ","+parseInt(result[3], 16)+")"
     : null;
}

// set all pixels of the image to this color
function setCurrentColor(canvas, color) {
   var context = canvas.getContext('2d');
   context.save();
   context.fillStyle = color;
   context.globalCompositeOperation = 'source-in';
   context.fillRect(0,0,canvas.width, canvas.height);
   context.restore();
}

}
