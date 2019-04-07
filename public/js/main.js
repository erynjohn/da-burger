$(document).on("click", "#btn-id", function(e) {
  e.preventDefault();
  var data = $("#btn-id").data("id");
  $.ajax({
    url: "/api/burger/"+data,
    method: "PUT",
    data: { text: data },
    type: JSON,
    success: function(res) {
      console.log("Updated")
    },
    complete: function() {
      location.reload();
    }
  })
})
 //Add burger
 $(document).on("click", ".addBurger", function(e) {
   e.preventDefault();
 var burgerInput = $("#name").val().trim();
 $.ajax({
   url: "/api/burger",
   data: { text: burgerInput },
   method: "POST",
   type: JSON,
   success: function(res) {
     console.log("Added")
   },
   complete: function() {
 location.reload();
}

 })
 $("#name").val(" ");

})
