Component({
  /**
   * 组件的属性列表
   */
  properties: {
    propItem: {
      type: Object
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    count: 0
  },

  observers: {
    'propItem.count' (value) {
      this.setData({
        count: this.matchUnit(value)
      })
    }
  },

  lifetimes: {
    attached() {
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {
    matchUnit(value) {
      let res = 0;
      if(value >= 100000000) {
        res = Number.parseFloat(value / 100000000).toFixed(2) + "亿";
      } else if (value >= 100000) {
        res = Number.parseFloat(value / 100000).toFixed(2) + "万";
      } else {
        res = value;
      }
      return res;
    }
  }
})
