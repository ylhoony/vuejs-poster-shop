// console.log(Vue);

new Vue({
  el: '#app',
  data: {
    total: 0,
    items: [
      { title: 'item 1' },
      { title: 'item 2' },
      { title: 'item 3' }
    ],
    cart: [

    ]
  },
  methods: {
    addItem: function(index) {
      // console.log('addItem');
      // console.log('this:', this);
      console.log(index);
      this.total += 9.99;
    }
  }
});
