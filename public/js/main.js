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

document.addEventListener("DOMContentLoaded", function() {
  var lazyImages = [].slice.call(document.querySelectorAll("img.lazy"));;

  if ("IntersectionObserver" in window && "IntersectionObserverEntry" in window && "intersectionRatio" in window.IntersectionObserverEntry.prototype) {
    let lazyImageObserver = new IntersectionObserver(function(entries, observer) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          let lazyImage = entry.target;
          lazyImage.src = lazyImage.dataset.src;
          lazyImage.srcset = lazyImage.dataset.srcset;
          lazyImage.classList.remove("lazy");
          lazyImageObserver.unobserve(lazyImage);
        }
      });
    });

    lazyImages.forEach(function(lazyImage) {
      lazyImageObserver.observe(lazyImage);
    });
  }
});
