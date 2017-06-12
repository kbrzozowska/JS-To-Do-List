document.addEventListener("DOMContentLoaded", function() {

    var placeholder = document.querySelector('#taskInput');
    var span = document.querySelector('#counter');
    var submit = document.querySelector('#addTaskButton');
    var taskList = document.querySelector('#taskList');
    var removeFinishedTasksButton = document.querySelector('#removeFinishedTasksButton');
    var counter = 0;

    removeFinishedTasksButton.addEventListener('click', function() {

        var completeList = document.querySelectorAll('.complete');
        for (var i = 0; i < completeList.length; i++) {
            completeList[i].parentElement.removeChild(completeList[i]);
            counter--;
            span.innerHTML = "zostało do zrobienia " + counter;

        }
    });

    submit.addEventListener('click', function() {

        var task = placeholder.value;
        if (task.length < 5 || task.length > 100) {
            return;
        }
        var newLi = document.createElement('li');
        var tempLi = taskList.appendChild(newLi);
        var newh1 = document.createElement('h1');
        newh1.innerHTML = task;
        var h1done = tempLi.appendChild(newh1);
        var button = document.createElement('button');
        button.innerHTML = "Delete";
        var deleteBtn = tempLi.appendChild(button);
        var button1 = document.createElement('button');
        button1.innerHTML = "Complete";
        var completeBtn = tempLi.appendChild(button1);
        counter++;
        span.innerHTML = "zostało do zrobienia " + counter;
        placeholder.value = " ";

        completeBtn.addEventListener('click', function() {
            this.parentElement.classList.add('complete');

        });
        deleteBtn.addEventListener('click', function() {

            this.parentElement.parentElement.removeChild(this.parentElement);
            counter--;
            span.innerHTML = "zostało do zrobienia " + counter;


        })
    });

});
