const app = Vue.createApp({
  // data, functions
  data() {
    return {
      showBooks: true,
      title: "War and Peace",
      author: "Leo Tolstoy",
      age: 45,
      x: 0, y: 0
    }
  },
  methods: {
    changeTitle(title, author) {
      this.title = title
      this.author = author
    },
    toggleShowBooks(){  
      this.showBooks = !this.showBooks
    },
    handleEvent(e, data) {
      console.log(e)
    },
    handleMove(e) {
      this.x = e.offsetX
      this.y = e.offsetY
    }
  }
})
app.mount("#app")
console.log("Hello vue3")