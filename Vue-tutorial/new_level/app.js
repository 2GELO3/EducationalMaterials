// const App = {}

// Mount - метод связывающий Vue с html

// Configuration object

Vue.createApp({



  // data() {
  //   return {

  //   }
  // }

  // Возможно метод data определять как стрелочную функцию(Прелесть array function в том, что возможно обернуть в круглые скобки фигурные и тем самым дать понять, что возвращается объект. Таким образом указывать return ни к чему)

  data: () => ({
    myHtml: '<h1>Vue 3 App</h1>',
    title: "I'm Grut",
    person: {
      firstName: 'Oleg',
      lastName: 'Vasilevsky',
      age: 21
    },

    items: [1, 2]

  }),

  methods: {
    addItem(event) {
      this.items.unshift(this.$refs.myInput.value)
      this.$refs.myInput.value = ''
      console.log(event.key);
    },

    remove(i) {
      this.items.splice(i, 1)
    },

    log(item) {
      console.log('Log item: ', item);
    }
  },



  computed: {

    // Фильтрация во Vue

    evenItems() {
      return this.items.filter(i => i % 2 === 0)
    }
  }

  // methods: {
  //   stopPropagation(event) {
  //     event.stopPropagation()
  //   }
  // }


}).mount('#app')