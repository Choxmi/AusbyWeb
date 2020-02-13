var modals = [
  `<h1 class="modal-header">Domestic General Cleaning</h1>
  <div class="flex-display">
      <div class="wrap-input100 validate-input m-b-16 flex-item" style="width: 50%;" data-validate="Please enter email: ex@abc.xyz">
          <input class="input100" type="text" name="name" placeholder="Name">
          <span class="focus-input100"></span>
      </div>
      <div class="wrap-input100 validate-input m-b-16 flex-item" style="width: 50%;" data-validate="Please enter email: ex@abc.xyz">
          <input class="input100" type="text" name="email" placeholder="Email">
          <span class="focus-input100"></span>
      </div>
  </div>    
  <div class="flex-display">
      <div class="wrap-input100 validate-input m-b-16 flex-item" style="width: 50%;" data-validate="Please enter email: ex@abc.xyz">
          <input id="datepicker" class="input100" type="text" name="date" placeholder="Date" />
          <span class="focus-input100"></span>
      </div>
      <div class="wrap-input100 validate-input m-b-16 flex-item" style="width: 50%;" data-validate="Please enter email: ex@abc.xyz">
          <input class="input100" type="text" name="phone" placeholder="Phone Number">
          <span class="focus-input100"></span>
      </div>
  </div>
  <div class="flex-display">
      <div class="wrap-input100 validate-input m-b-16 flex-item" style="width: 50%;" data-validate="Please enter email: ex@abc.xyz">
          <select class="input100">
              <option value="" selected data-default hidden>Select city</option>
              <option>Brisbane</option>
          </select>
          <span class="focus-input100"></span>
      </div>
      <div class="wrap-input100 validate-input m-b-16 flex-item" style="width: 50%;" data-validate="Please enter email: ex@abc.xyz">
          <select class="input100">
              <option value="" selected data-default hidden>Select suburb</option>
              <option>suburb1</option>
          </select>
          <span class="focus-input100"></span>
      </div>
  </div>
  <div class="flex-display">
      <div class="wrap-input100 validate-input m-b-16 flex-item" style="width: 50%;" data-validate="Please enter email: ex@abc.xyz">
          <textarea class="input100" type="text" name="phone" placeholder="Message"></textarea>
          <span class="focus-input100"></span>
      </div>
  </div>
  <div class="flex-display">
      <div class="wrap-input101 validate-input m-b-16 flex-item" style="width: 50%;" data-validate="Please enter email: ex@abc.xyz">
          <button onclick="showMsg()" class="input101">Submit</button>
          <span class="hover-input101"></span>
      </div>
  </div>`,

  `<h1 class="modal-header">Domestic Bond Cleaning</h1>
  <div class="flex-display">
      <div class="wrap-input100 validate-input m-b-16 flex-item" style="width: 50%;" data-validate="Please enter email: ex@abc.xyz">
          <input class="input100" type="text" name="name" placeholder="Name">
          <span class="focus-input100"></span>
      </div>
      <div class="wrap-input100 validate-input m-b-16 flex-item" style="width: 50%;" data-validate="Please enter email: ex@abc.xyz">
          <input class="input100" type="text" name="email" placeholder="Email">
          <span class="focus-input100"></span>
      </div>
  </div>    
  <div class="flex-display">
      <div class="wrap-input100 validate-input m-b-16 flex-item" style="width: 50%;" data-validate="Please enter email: ex@abc.xyz">
          <input id="datepicker" class="input100" type="text" name="date" placeholder="Date" />
          <span class="focus-input100"></span>
      </div>
      <div class="wrap-input100 validate-input m-b-16 flex-item" style="width: 50%;" data-validate="Please enter email: ex@abc.xyz">
          <input class="input100" type="text" name="phone" placeholder="Phone Number">
          <span class="focus-input100"></span>
      </div>
  </div>
  <div class="flex-display">
      <div class="wrap-input100 validate-input m-b-16 flex-item" style="width: 50%;" data-validate="Please enter email: ex@abc.xyz">
          <select class="input100">
              <option value="" selected data-default hidden>Select city</option>
              <option>Brisbane</option>
          </select>
          <span class="focus-input100"></span>
      </div>
      <div class="wrap-input100 validate-input m-b-16 flex-item" style="width: 50%;" data-validate="Please enter email: ex@abc.xyz">
          <select class="input100">
              <option value="" selected data-default hidden>Select suburb</option>
              <option>suburb1</option>
          </select>
          <span class="focus-input100"></span>
      </div>
  </div>
  <div class="flex-display">
      <div class="wrap-input100 validate-input m-b-16 flex-item" style="width: 50%;" data-validate="Please enter email: ex@abc.xyz">
          <textarea class="input100" type="text" name="phone" placeholder="Message"></textarea>
          <span class="focus-input100"></span>
      </div>
  </div>
  <div class="flex-display">
      <div class="wrap-input101 validate-input m-b-16 flex-item" style="width: 50%;" data-validate="Please enter email: ex@abc.xyz">
          <button onclick="showMsg()" class="input101">Submit</button>
          <span class="hover-input101"></span>
      </div>
  </div>`
];
jQuery(document).ready(function($) {

	'use strict';

      var owl = $("#owl-testimonials");

        owl.owlCarousel({
          
          pagination : true,
          paginationNumbers: false,
          autoPlay: 6000, //Set AutoPlay to 3 seconds
          items : 1, //10 items above 1000px browser width
          itemsDesktop : [1000,1], //5 items between 1000px and 901px
          itemsDesktopSmall : [900,1], // betweem 900px and 601px
          itemsTablet: [600,1], //2 items between 600 and 0
          itemsMobile : false // itemsMobile disabled - inherit from itemsTablet option
          
      });


        var top_header = $('.parallax-content');
        top_header.css({'background-position':'center center'}); // better use CSS

        $(window).scroll(function () {
        var st = $(this).scrollTop();
        top_header.css({'background-position':'center calc(50% + '+(st*.5)+'px)'});
        });


        $('.counter').each(function() {
          var $this = $(this),
              countTo = $this.attr('data-count');
          
          $({ countNum: $this.text()}).animate({
            countNum: countTo
          },

          {

            duration: 8000,
            easing:'linear',
            step: function() {
              $this.text(Math.floor(this.countNum));
            },
            complete: function() {
              $this.text(this.countNum);
              //alert('finished');
            }

          });  
          
        });


        $('.tabgroup > div').hide();
        $('.tabgroup > div:first-of-type').show();
        $('.tabs a').click(function(e){
          e.preventDefault();
            var $this = $(this),
            tabgroup = '#'+$this.parents('.tabs').data('tabgroup'),
            others = $this.closest('li').siblings().children('a'),
            target = $this.attr('href');
        others.removeClass('active');
        $this.addClass('active');
        $(tabgroup).children('div').hide();
        $(target).show();
      
        })



        $(".pop-button").click(function () {
            $(".pop").fadeIn(300);
            
        });

        $(".pop > span").click(function () {
            $(".pop").fadeOut(300);
        });


        $(window).on("scroll", function() {
            if($(window).scrollTop() > 100) {
                $(".header").addClass("active");
            } else {
                //remove the background property so it comes transparent again (defined in your css)
               $(".header").removeClass("active");
            }
        });


	/************** Mixitup (Filter Projects) *********************/
    	$('.projects-holder').mixitup({
            effects: ['fade','grayscale'],
            easing: 'snap',
            transitionSpeed: 400
        });

        $('.scroll-link').on('click', function(event){
            event.preventDefault();
            var sectionID = $(this).attr("data-id");
            scrollToID('#' + sectionID, 750);
        });
        // scroll to top action
        $('.scroll-top').on('click', function(event) {
            event.preventDefault();
            $('html, body').animate({scrollTop:0}, 'slow');         
        });
        // mobile nav toggle
        $('#nav-toggle').on('click', function (event) {
            event.preventDefault();
            $('#main-nav').toggleClass("open");
        });

        function scrollToID(id, speed){
          var offSet = 50;
          var targetOffset = $(id).offset().top - offSet;
          var mainNav = $('#main-nav');
          $('html,body').animate({scrollTop:targetOffset}, speed);
          if (mainNav.hasClass("open")) {
              mainNav.css("height", "1px").removeClass("in").addClass("collapse");
              mainNav.removeClass("open");
          }
      }
      if (typeof console === "undefined") {
          console = {
              log: function() { }
          };
      }

      var mySwiper = new Swiper ('.swiper-container', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
    
        slidesPerView: 'auto',
        spaceBetween: 30,
  
        // If we need pagination
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
    
        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
    
        // And if we need scrollbar
        scrollbar: {
          el: '.swiper-scrollbar',
        },
      })
      $("#options").hide();
});
var last_section = 0;
function expandOptions(section){
  if( section === last_section && $('#options').is(':visible') ) {
    $("#options").hide(200);
  } else if(section !== last_section) {
    $("#options").hide(200);
    $("#modal-div").empty();
    $("#modal-div").append(modals[section]);
    $("#options").show(200);
  } else {
    $("#modal-div").empty();
    $("#modal-div").append(modals[section]);
    $("#options").show(200);
  }
  last_section = section;
}

function showMsg(){
  Swal.fire(
    'Good job!',
    'You clicked the button!',
    'success'
  );
}
