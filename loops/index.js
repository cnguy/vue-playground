var app = new Vue({
    el: '#app',
    data: {
        todos: [
            { text: 'Learn Vue.js' },
            { text: 'Learn Reason ' },
            { text: 'Learn Kotlin' },
        ],
    },
})

setTimeout(() => {
    app.todos.push({ text: 'Learn web architecture' })
}, 1500)