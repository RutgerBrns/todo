var tasks = [];

var addButton = $("#add-button");
var inputField = $("#add-todo-input-field");

var deleteButton = $('#delete-button');
var task = $('#todo-task-title');


//If add-button is clicked the input field for adding a new task is sliding down.
addButton.on("click", function() {
	if ( $( "#add-todo-input" ).is( ":hidden" ) ) {
   	 	$( "#add-todo-input" ).slideDown( "slow" );
  } else {
   		$( "#add-todo-input" ).slideUp( "slow" );
  }	
})

$("#add-todo-input-field").keypress(function(event){
	if(event.which === 13){
		//Add the new task as a string to the Task Array
		var newTask = $("#add-todo-input-field").val();
		var string = newTask.toString();
		tasks.push(string);
		 $("#add-todo-input-field").val("");
		var index = tasks.indexOf(string);
		console.log(index); 

		//Add the html element into the task-list-element
		$("#todo-container").append("<div class='col-lg-12 col-md-12 col-sm-12 col-xs-12 todo-task' id='todo-task-"+ index +"'><div class='col-lg-1 col-md-1 col-sm-1 col-xs-1 delete-button glyphicon glyphicon-trash' id='delete-button-"+ index +"' style='display: none;'></div><div class='col-lg-11 col-md-11 col-sm-11 col-xs-11 todo-task-title' id='todo-task-title'>" + string + "</div></div>");
	}
});

$(document).on("click", '.delete-button', function(){
	$(this).parent().fadeOut(1000, function(){
		$(this).remove();
	});
})

//If add-button is clicked the input field for adding a new task is sliding down.
$(document).on("mouseenter", '.todo-task', function() {
		var boxWidth = $(".delete-button", this).width();
	    $(".delete-button", this).show('slide',{direction:'left'},1000);     
    });

$(document).on ("mouseleave", '.todo-task', function(){
       	$(".delete-button", this).hide('slide',{direction:'left'},1000); 
    });
   


task.on("click", function() {
	task.toggleClass('task-done');
})

