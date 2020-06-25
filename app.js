function getRandomElement (arr) {
  return arr[Math.floor(Math.random() * arr.length)]
}

new Vue({
  el: '#app',
  data: {
    quotes,
    currentQuote: getRandomElement(quotes),
    show: false,
    animating: false
  },
  methods: {
    newQuote: function () {
      this.currentQuote = getRandomElement(quotes)
    }
  },
  updated: function () {
    this.animating = true
    setTimeout(() => {
      this.animating = false
    }, 500)
  }
})