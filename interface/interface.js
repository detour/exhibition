(function() {
if (window.jQuery == undefined) { alert('please include jquery first'); return false; }

var projectClass = 'project';
var columnClass = 'col';
var colSelector = '.'+projectClass+' .'+columnClass;
var headerSelector = '.'+projectClass+' h2';
var bgColor = "#68FFC0";
var projectCols = $(colSelector);
var projectHeaders = $(headerSelector);
var projectArrows = $('.arrow');
var switchBar = $('.switch');
var switchBtn = $('.switch .btn');
var slideshowMode = true;
var nextCol = projectCols[0];
var colTimeout = null;
var timeouts = [];

var Interface = {
  init: function() {
    var that = this;
    colTimeout = function(){that.goNext()};
    
    for (var i = 0; i < projectHeaders.length; i++) {
      $(projectHeaders[i]).click(function(){
        that.slideshowOff();
        that.resetToDefault();
        
        $(this).css('background-color', bgColor);
        $(this).parents('.'+projectClass).find('.col:first').css('background-color', bgColor);
      });
    }
    
    for (var i = 0; i < projectCols.length; i++) {
      $(projectCols[i]).click(function(){
        that.slideshowOff();
        that.resetToDefault();
        that.showColInfo($(this));
      });
    }
    
    switchBar.click(function(){
      if(switchBtn.hasClass('is_off')) {
        that.slideshowOn();
      } else {
        that.slideshowOff();
      }
    });
  },
  
  showColInfo: function(col) {
    this.resetToDefault();
    var project = col.parents('.'+projectClass);
    
    col.css('background-color', bgColor);
    project.find('h2').css('background-color', bgColor);
    var leftPos = col.position().left + col.width()/2;
    project.find('.arrow').show().css('left', leftPos);
  },
  
  goNext: function() {
    var that = this;
    if (slideshowMode) {
      that.showColInfo($(nextCol));
      var currentIndex = $.inArray(nextCol, projectCols);
      var nextIndex = currentIndex + 1;
      if ( currentIndex == (projectCols.length-1)) {
        nextIndex = 0; 
      }
      nextCol = projectCols[nextIndex];
      
      var d = new Date();
      timeouts[d.getTime().toString()] = setTimeout(colTimeout, 3000);
    }
  },
  
  slideshowOn: function() {
    slideshowMode = true;
    colTimeout();
    
    switchBtn.removeClass('is_off');
    switchBtn.animate({
      left: '+=76'
    });
  },
  
  slideshowOff: function() {
    var that = this;
    slideshowMode = false;
    for (var name in timeouts) {
      clearTimeout(timeouts[name]);
    }
    
    if(!switchBtn.hasClass('is_off')) {
      switchBtn.addClass('is_off');
      switchBtn.animate({
        left: '-=76'
      });
    }
  },
  
  resetToDefault: function() {
    this.resetColor();
  },
  
  resetColor: function() {
    projectCols.css('background-color', '#fff');
    projectHeaders.css('background-color', '#fff');
    projectArrows.hide();
  }
}

Interface.init();

})();