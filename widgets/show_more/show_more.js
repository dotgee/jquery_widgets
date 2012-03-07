$.widget("ui.showmore", {
  options: {
    nbToShow : 5,
    step: 5,
    moreText: "[+] Voir plus",
    minusText: "[-] Voir moins",
    cssShowable : ".showmore" 
  },
  _create: function() {
    var self = this;
    var elts = self._showableElements();
    self.down = false;
    if(elts.length >self.options.nbToShow){
      self._toggleItems(false);
      self._addShowMoreLink();
      self._bindEvents();
    }
  },
  _toggleItems: function(show){
    var self = this;
    if(!self.actualShow){
      self.actualShow = self.options.nbToShow;
    }else{
      var diff = self.options.step;
      diff = (show ? diff : -diff);
      self.actualShow += diff;
    }
    self._showableElements().each(function(i,el){
      var elt = $(el);
       (i < self.actualShow) ? elt.show() : elt.hide();
    });

    self._updateLinks();
  },
  _bindEvents: function(){
    var self = this;
    self._moreLink().click(function(e){
      e.preventDefault();
       self._toggleItems(true);
    });
    self._minusLink().click(function(e){
      e.preventDefault();
       self._toggleItems(false);
    });
  },
  _updateLinks: function(){
    var self = this;
    var showMoreLink = (self.actualShow < self._showableElements().length);
    var showMinusLink = (self.actualShow > self.options.nbToShow);
    self._moreLink().toggle(showMoreLink);
    self._minusLink().toggle(showMinusLink);
  },
  _addShowMoreLink: function(){
    var self = this;
    var links_div = $("<div class ='links_div'></div>")
    var moreLink = $("<a href='#' class='more_link'>"+self.options.moreText+"</a>");
    var minusLink = $("<a href='#' class='minus_link'>"+self.options.minusText+"</a>");
    self.element.append($(links_div).append(moreLink).append(minusLink));
  },
  _minusLink: function(){
    var self = this;
    return self.element.find('.minus_link').first();
  },
  _moreLink: function(){
    var self = this;
    return self.element.find('.more_link').first();
  },
  _showableElements: function(){
    var self = this;
    return self.element.find(self.options.cssShowable);
  },
  destroy: function() {
    $.Widget.prototype.destroy.apply(this, arguments);
  }
 });

