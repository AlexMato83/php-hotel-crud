function init(){
  getAllOspiti();
}
$(document).ready(init);

function getAllOspiti(){

  $.ajax({

    url : "getAllOspiti.php",
    method : "GET",
    success : function(data){

      console.log(data);
      for (var name of data) {
        $("#target").append('<li>' + name + '</li>');
      }
    },
    error : function(err) {

      console.error(err);
    }
  })
}
