
const App = {
  data() {
    return {
      placeholderString: 'Enter note title',
      title: 'List of notes',
      inputValue: '',
      notes: ['Notes 1', 'Notes 2']
    }
  },
  methods: {

    // inputChangeHandler(event) {
    //   this.inputValue = event.target.value
    // },

    addNewNote() {
      if (this.inputValue !== '') {
        this.notes.push(this.inputValue)
        this.inputValue = ''
      }
    },
    // inputKeyPress(event) {
    //   if (event.key === 'Enter') {
    //     this.addNewNote()
    //   }
    // }

    toUpperCase(item) {
      return item.toUpperCase()
    },

    removeNote(idx) {
      this.notes.splice(idx, 1)
    }

  },
  computed: {
    doubleCountComputed() {
      return this.notes.length * 2
    },
  },
  watch: {
    inputValue(value) {
      if (value.length > 10) {
        this.inputValue = ''
      }
      console.log('input Value changed', value);
    }
  }
}



Vue.createApp(App).mount('#app')