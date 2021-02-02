const app = Vue.createApp({
  data() {
    return {
      url: 'https://www.thenetninja.co.uk',
      showBooks: true,
      books: [
        { title: 'name of the wind', author: 'patrick rothfuss', img: 'assets/1.jpg', isFav: true },
        { title: 'the way of kings', author: 'brandon sanderson', img: 'assets/2.jpg', isFav: true },
        { title: 'the final empire', author: 'Robert Laurie', img: 'assets/3.jpg', isFav: false },
      ],
    }
  },
  methods: {
    toggleShowBooks() {
      this.showBooks =  !this.showBooks
    },
    toggleFav(book) {
      book.isFav = !book.isFav
    }
  },
  computed: {
    filteredBooks() {
      return this.books.filter(book => book.isFav)
    }
  }
})

app.mount('#app')