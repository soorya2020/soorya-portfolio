
function validate() {

    var name = document.getElementById("name");
    var nameValue = name.value.trim();

    var email = document.getElementById("email");
    var emailValue = email.value.toLowerCase().trim();

    var subject = document.getElementById("subject");
    var subjectValue = subject.value.trim();

    var message = document.getElementById("message");
    var messageValue = message.value.trim();


//this is a virtual submit button
    var btn = document.getElementById("submit-btn-form");
//flag=1 when there is an error
    var flag = 2;
    
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

   /**
   * 
   * @param {Document} element 
   * @param {String} message 
   */
    function setError(element, message) {

        let error = element.parentElement.querySelector("p");
        error.classList.add("err");
        error.classList.remove("success");
        error.textContent = message;
        flag =1;
    }

    /**
     * 
     * @param {Document} element 
     * @param {String} message
     */
    function setSucess(element, message) {

        let sucess = element.parentElement.querySelector("p");
        sucess.classList.add("success");
        sucess.classList.remove("err");
        sucess.textContent = message;

    }

    function submit(){
        btn.click();   
    }

    if (nameValue.length >= 1) {
        // valid name
        setSucess(name,"Name is vaid :)");
    }else{
        setError(name,"This feild is required :(");

    }


    if (emailValue.match(mailformat)) {
        // valid mail
        setSucess(email,"Email Seems good")
    } else {
        // not a valid mail
        setError(email,"Email is required :(");
    }
// ----------------------
    if (subjectValue.length >=5) {
        // valid subject
        setSucess(subject,"subject Seems good")
    } else {
        // not a valid subject
        setError(subject,"subject is required :(");
    }

    if (messageValue.length >=5) {
        // valid message
        setSucess(message,"message Seems good")
    } else {
        // not a valid message
        setError(message,"message is required :(");
    }





    if(flag==2){
        submit();
    }

}

