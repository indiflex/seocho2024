var obj = {
  outer: function () {
    console.log('outer.this', this);
    var inner1 = function () {
      console.log('inner1.this', this);
    };
    inner1();

    var self = this;
    var inner2 = function () {
      console.log('inner2.this', this);
      console.log('inner2.self', self);
    };
    inner2();
  },
};
obj.outer();
