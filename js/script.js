/*function changeStyle(){
    document.getElementById('ch').innerHTML="Say Bismillah before starting";
}
//date showing
function ShowDate(){
    document.getElementById('d').innerHTML=Date();
}
//light on off 
function lightOn() {
    document.getElementById('light').src="images/pic_bulbon.gif";
}
function lightOff() {
    document.getElementById('light').src="images/pic_bulboff.gif";
}
//style change
function showStyle() {
    document.getElementById('dp').style.color="red";
}
//hide element
function hideEle() {
    document.getElementById('dh').style.display="none";
}
//show element
function showEle(){
    document.getElementById('ds').style.display="block";
}
//selector ex
function showSel(){
    document.getElementsByClassName('s')[3].innerHTML="here i am";
}
//tag ex
function showTag(){
    let data = document.getElementsByTagName('p');
    alert(data.length);
}
//console ex
function showCon(){
   console.log(5+6);
}
//statements
function showSt(){
    let x, y, z;
    x=7;
    y=5;
    z= x+y;
    document.getElementById('s').innerHTML = "The value of z is "+z+".";
 }
 //expression string
 function showStr(){
    document.getElementById('x');
    alert("Jhon"+" "+"Doe");
}
//JavaScript Objects
function showOb(){
    const person={
        fname:"jhon",
        lname: "doe",
        age:50
    };
    document.getElementById('o').innerHTML = person.fname+ " is "+ person.age + " years old";
    
}*/


//jQuery start
// $(document).ready(function(){
//     alert("welcome");
// });
// $(document).ready(function(){
//     $('button').click(function(){
//         alert("welcome");
//     });

// });
$(document).ready(function(){
    $('#alt').on('mouseover',function(){
        
        $('p').fadeToggle();
        alert("Welcome");
    });
    $('#btn1').on('click',function(){
        $('p').fadeIn();
    });
    $('#btn2').on('click',function(){
        $('p').fadeOut();
    });
    $('#right').on('click',function(){
        $('.block').animate({"left":"+=50px"},"slow");
    });
    $('#left').on('click',function(){
        $('.block').animate({"left":"-=50px"},"slow");
    });

    $( "#go1" ).on( "click", function() {
        $( "#block1" )
          .animate({
            width: "90%",height: "100%"
          }, {
            queue: false,
            duration: 3000
          })
          .animate({ fontSize: "24px" }, 1500 )
          .animate({ borderRightWidth: "15px" }, 1500 );
      });
       
      $( "#go2" ).on( "click", function() {
        $( "#block2" )
          .animate({ width: "90%" }, 1000 )
          .animate({ fontSize: "24px" }, 1000 )
          .animate({ borderLeftWidth: "15px" }, 1000 );
      });
       
      $( "#go3" ).on( "click", function() {
        $( "#go1" ).add( "#go2" ).trigger( "click" );
      });
       
      $( "#go4" ).on( "click", function() {
        $( "div" ).css({
          width: "",
          fontSize: "",
          borderWidth: ""
        });
      });
});
