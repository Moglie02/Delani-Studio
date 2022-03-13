$(document).ready(function(){
    $('#design-images').on('click', function(){
      $('.title').toggle({});
      });
      $('.title').hide();
  });
  $(document).ready(function(){
    $('#development-images').on('click', function(){
      $('.development').toggle({});
      });
      $('.development').hide();
  });
  $(document).ready(function(){
    $('#product-images').on('click', function(){
      $('.product').toggle({});
      });
      $('.product').hide();
  });



  $(document).ready(function(){
  $(".custom-info-on-portfolio-images img").hover(
    function () {
      $(this).addClass("portfolio-hover");
      var index = $(".custom-info-on-portfolio-images img").index(this);
      $(".Hover_designKenya").eq(index).show();
    },
    function () {
      $(this).removeClass("portfolio-hover");
      var index = $(".custom-info-on-portfolio-images img").index(this);
      $(".Hover_designKenya").eq(index).hide();
    }
  )});