var vm = new Vue({
    el: '#myapp',
    data: {
        newTask: '',
        todos: [
            {task: 'task 1', done: false},
            {task: 'task 2', done: true},
            {task: 'task 3', done: false}
        ]
    },
    computed: {
        remaining: function() {
            var count = 0;
            for (var i = 0, j = this.todos.length; i < j; i++) {
                if (!this.todos[i].done) {
                    count++;
                }
            }
            return count;
        }
    },
    methods: {
        add: function() {
            this.todos.push({
                task: this.newTask,
                done: false
            });
            this.newTask = ''
        },
        del: function(index) { 
            if (confirm("are you sure?")) {
                this.todos.splice(index, 1);
            }
        },
        purge: function() {
            var i = this.todos.length;
            while (i--) {
                if (this.todos[i].done) {
                    this.todos.splice(i, 1);
                }
            }
        }
    }
});
