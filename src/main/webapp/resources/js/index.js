$(document).ready(function() {
    //выделяет текст поля при наведении мышки на него
    $(".inputForTask").mouseenter( function(){
        $(this).select()
    })
    //выделяет текст поля при клике на него
    $(".inputForTask").click(function(){
        $(this).select()
    })

    //добавляет блок задачи по нажатию Enter
    $(".inputForTask").keypress(function(e){
        if(e.keyCode==13){
            createTaskField()
        }
    })
    //добавляет блок задачи по нажатию кнопки
    $(".button").click(function (){
        createTaskField()
    })


    var index = 1;
    //функция для добавления задачи
    function createTaskField(){
        var thisFieldIndex = index++;
        var task = $('.inputForTask').val();
        if(task!=""&&task!="что необходимо убрать"){
            $('.taskAddField').after(
                createTaskDiv(task, thisFieldIndex)
            )
            $('#subTasksField'+thisFieldIndex).hide();

            $('#cleanButton'+thisFieldIndex).click(function(){
                if ($(this).text()=="не убрано"){
                    $(this).text("убрано")
                }
                else {
                    if ($(this).text()=="убрано"){
                        $(this).text("не убрано")
                    }
                }
            })
            $('#deleteButton'+thisFieldIndex).click(function(){
                this.src='../../resources/css/close1.png';
                $(this).mouseout(function(){
                    this.src='../../resources/css/close1.png';
                })
                $(this).parents('#taskField'+thisFieldIndex).animate({opacity: "hide"});
            })
            $('#deleteButton'+thisFieldIndex).mouseover(function(){
                this.src='../../resources/css/close2.png';
            })
            $('#deleteButton'+thisFieldIndex).mouseout(function(){
                this.src='../../resources/css/close.png';
            })
            var openStatus = false;
            $('#openButton'+thisFieldIndex).click(function(){
                if(openStatus==false) {
                    openStatus = true;
                    this.src="../../resources/css/hide.png";
                }else {
                    openStatus = false;
                    this.src="../../resources/css/open.png";
                }
                $(this).parent('#taskField'+thisFieldIndex).children('#subTasksField'+thisFieldIndex).slideToggle("slow");
                //сделать выделение текста поля ввода подзадачи, после открытия блока подзадачи
                //$('#inputForSubtask'+thisFieldIndex /*.inputForSubtask'+thisFieldIndex*/).parents(this).select();
					//	$("#inputForSubtask").select();
            })

            $('#inputForSubtask'+thisFieldIndex).val("введите подзадачу");
            $('#inputForSubtask'+thisFieldIndex).mouseenter( function(){
                $(this).select()
            })
            var subFieldIndex = thisFieldIndex;
            $('#subtaskAddButton'+thisFieldIndex).click(function(){
                createSubtaskField(thisFieldIndex, subFieldIndex++);
            })
            $('#inputForSubtask'+thisFieldIndex).keypress(function(e) {
                if (e.keyCode == 13) {
                    createSubtaskField(thisFieldIndex, subFieldIndex++);
                }
            })
        }
        $(".inputForTask").val("что необходимо убрать");
        $(".inputForTask").select();
    }

    //функция для добавления подзадачи
    function createSubtaskField(taskFieldIndex, subFieldIndex){
        var subtask = $('#inputForSubtask'+taskFieldIndex).val();
        if(subtask!=""&&subtask!="введите подзадачу"){
            createSubtaskDiv(taskFieldIndex, subFieldIndex, subtask);
            $('#subtaskCleanButton'+subFieldIndex).click(function(){
                if ($(this).text()=="не убрано"){
                    $(this).text("убрано")
                }
                else {
                    if ($(this).text()=="убрано"){
                        $(this).text("не убрано")
                    }
                }
            })
            $('#deleteSubtaskButton'+subFieldIndex).mouseover(function(){
                this.src='../../resources/css/close2.png';
            })
            $('#deleteSubtaskButton'+subFieldIndex).mouseout(function(){
                this.src='../../resources/css/close.png';
            })
            $('#deleteSubtaskButton'+subFieldIndex).click(function(){
                this.src='../../resources/css/close1.png';
                $(this).mouseout(function(){
                    this.src='../../resources/css/close1.png';
                })
                $(this).parents('#subtaskField'+subFieldIndex).animate({opacity: "hide"});
            })
            $('#inputForSubtask'+taskFieldIndex).val("введите подзадачу");
            $('#inputForSubtask'+taskFieldIndex).select();
        }


    }


    //функция создающая и возвращающая DIV задачи
    function createTaskDiv(task, thisIndex){
        var taskField =
            '<div class="taskField" id="taskField'+thisIndex+'">' +
            '<div class="task">'+task+'</div>' +
            '<img src="../../resources/css/close.png" class="deleteButton" id="deleteButton'+thisIndex+'">'+
            '<img src="../../resources/css/open.png" class="openButton" id="openButton'+thisIndex+'">'+
            '<button class="cleanButton" id="cleanButton'+thisIndex+'">не убрано</button>'+
            '<div class="subTasksField" id="subTasksField'+thisIndex+'">'+
            '<div class="subtaskAddField" id="subtaskAddField'+thisIndex+'">'+
            '<input class="inputForSubtask" id="inputForSubtask'+thisIndex+'" type="text" value="введите подзадачу">'+
            '<button class="subtaskAddButton" id="subtaskAddButton'+thisIndex+'">добавить</button>'+
            '</div>'+
            '</div>'+
            '</div>';
        return taskField;
    }

    //функция создающая и возвращающая DIV подзадачи
    function createSubtaskDiv(thisFieldIndex, subFieldIndex, subtask){
        var subTaskField =
            $('#subtaskAddField'+thisFieldIndex).after(
                '<div class="subtaskField" id="subtaskField'+subFieldIndex+'">' +
                '<div class="subtask">'+subtask+'</div>' +
                '<img src="../../resources/css/close.png" class="deleteButton" id="deleteSubtaskButton'+subFieldIndex+'">' +
                '<button class="subtaskCleanButton" id="subtaskCleanButton'+subFieldIndex+'">не убрано</button>' +
                '</div>'
            )
        return subTaskField;
    }
})