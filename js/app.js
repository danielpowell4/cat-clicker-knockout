var initalCats = [
  {
    clickCount : 0,
    name: 'TABBY',
    imgSrc : 'img/4154543904_6e2428c421_z.jpg',
    nicknames : ['Tabtab', 'T-bone', 'T-REX']
  }, {
    clickCount : 0,
    name: 'TIGER',
    imgSrc : 'img/22252709_010df3379e_z.jpg',
    nicknames : ['Tigger']
  }, {
    clickCount : 0,
    name: 'SCAREDY',
    imgSrc : 'img/434164568_fea0ad4013_z.jpg',
    nicknames : ['Casper']
  }, {
    clickCount : 0,
    name: 'SHADOW',
    imgSrc : 'img/1413379559_412a540d29_z.jpg',
    nicknames : ['Darkness']
  }, {
    clickCount : 0,
    name: 'SLEEPY',
    imgSrc : 'img/9648464288_2516b35537_z.jpg',
    nicknames : ['Knapster']
  },
];

var Cat = function(data) {
  this.clickCount = ko.observable(data.clickCount);
  this.name = ko.observable(data.name);
  this.imgSrc = ko.observable(data.imgSrc);
  this.nicknames = ko.observableArray(data.nicknames);

  this.title = ko.computed(function() {
    var title;
    var clicks = this.clickCount();

    if (clicks < 10) {
      title = 'Level: Newborn';
    } else if (clicks < 50){
      title = 'Level: Baby Kitten';
    } else if (clicks < 100) {
      title = 'Level: Kitty';
    } else if (clicks < 200) {
      title = 'Level: Kitty Kat'
    } else if (clicks < 400) {
      title = 'Level: Katty Kitten';
    } else {
      title = 'Best Cat EVER!'
    }
    return title;
  }, this);
}

var ViewModel = function() {
  var that = this;

  this.catList = ko.observableArray([]);

  initalCats.forEach(function(catItem){
    that.catList.push( new Cat(catItem) );
  });

  this.currentCat = ko.observable( this.catList()[0] );

  this.incrementCounter = function() {
    this.clickCount(this.clickCount() + 1);
  };

  this.setCat = function(clickedCat) {
    that.currentCat(clickedCat);
  };
}

ko.applyBindings(new ViewModel());
