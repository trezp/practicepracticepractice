(function() {

var form = document.getElementById("theForm");
    button = form.myButton; 
    textbox = form.myTextBox, 
    textarea = form.myTextArea;
    select = form.dayOfWeek;

eventUtility.addEvent(form, "submit", function(){
    eventUtility.preventDefault(evt); 
});

eventUtility.addEvent(button, "click", function(event){
    var target = eventUtility.getTarget(event);


    var option = select.selectedOptions[0]

    alert(option.value);

    var wedOption = new Option("Funday", 3); 

    select.add("Funday", select.options[3])



});






}());