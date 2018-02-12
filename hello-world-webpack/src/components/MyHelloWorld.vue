<template>
    <div>
        <p>{{ greeting }}</p>
        <ol>
            <li v-for="todo in todos">
                {{ todo.text }}
            </li>
        </ol>
        <input @keyup.enter="submit" v-model="message" />
        <div class="preview">Preview: {{ preview }}</div>
    </div>
</template>

<script>
    /* This was all made off the top of my head after going through the fundamentals lol. It's very similar to React. */
    export default {
        data: () => ({
            greeting: 'Hello there!',
            todos: [
                {
                    id: 0,
                    text: 'First todo',
                },
                {
                    id: 1,
                    text: 'Second todo',
                },
                {
                    id: 2,
                    text: 'Vue is very ergonomic',
                },
            ],
            currentTodoID: 3,
            message: '',
        }),
        methods: {
            submit: function(event) {
                this.todos.push({ id: this.currentTodoID++, text: event.target.value })
                this.message = ''
            },
        },
        computed: {
            preview: function() {
                const { currentTodoID, message } = this
                return `${currentTodoID + 1}. ${message}`
            },
        },
    }    
</script>