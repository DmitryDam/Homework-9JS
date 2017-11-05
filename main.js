
// Task1
$(document).ready(function(){
  $('.btn1').on('click', myFunction1);
});

function myFunction1(){
  //куда посылаю
  //что посылаю
  //что с этим делать
   $.post(
    "a1.php",
    {
      "num1":34,
      "num2":59
    },
    function(data){
      console.log(data);
    }
    );

}


// Task2
$(document).ready(function(){
  $('.btn2').on('click', myFunction2);
});

function myFunction2() {
  $.post(
    'a2.php', 
    {
      'year': 1983
    }, 
    function(data) { 
      console.log(data);
    }
  );
}

// Task3
$(document).ready(function(){
  $('.btn3').on('click', myFunction3);
});
function myFunction3() {
  $.post(
    'a3.php', // куда посылаю ?
    {
      'sex': $('input[name=sex]:checked').val(),
      'height': $('#inp3').val()
    }, // что посылаю ?
    function(data) { // что с этим делать ?
      console.log(data);
    }
  );
}

// Task4

$(document).ready(function(){
  $('#inp4').on('change', function(){
    $('#height').html($(this).val());
  });
  $('.btn4').on('click', myFunction4);
});
function myFunction4() {
  $.post(
    'a3.php', // куда посылаю ?
    {
      'sex': $('input[name=sex2]:checked').val(),
      'height': $('#inp4').val()
    }, // что посылаю ?
    function(data) { // что с этим делать ?
      console.log(data);
    }
  );
}

// Task5

$(document).ready(function(){
  $('.btn5').on('click', myFunction5);
});
function myFunction5() {
  $.post(
    'mail.php', 
    {
      'fio': $('#fio').val(),
      'email': $('#mail').val(),
      'phone': $('#phone').val()
    }, 
    function(data) { 
      console.log(data);
    }
  );
}

// Task6

  $('#btn6').on('click', function(){
    $.get(
      'goods.php',
      {
        art : 1
      },
      showgoods1
    );

    function showgoods1 (data) {    
      var parse = $.parseJSON(data);
      var out = ' - Name: ' +parse.name +  '<br>' +' - Weight: ' +  parse.weight + '<br>' + ' - Cost: ' + parse.cost +  '<br>' + ' -Link: .'+ parse.img ;
      $('#out6').html(out);

    }   
  });

  $('#btn7').on('click', function(){
    $.get(
      'goods.php',
      {
        art : 2
      },
      showgoods2
    );

    function showgoods2 (data) {    
      var parse = $.parseJSON(data);
      var out = ' - Name: ' +parse.name +  '<br>' +' - Weight: ' +  parse.weight + '<br>' + ' - Cost: ' + parse.cost +  '<br>' + ' -Link: .'+ parse.img ;
      $('#out7').html(out);

    }   
  });



  $(document).ready(function(){
   $('#btn8').on('click', f1);
});

function f1(){
   $.getJSON('goods.json', function(data){
      var out ='Внешний вид товара';

      for (var key in data){

        out+='<img src="'+data[key].img+'">';

         }
          $('#pics').html(out);

   });
}