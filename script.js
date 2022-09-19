function validate() {

    var name = document.getElementById("name");
    var nameValue = name.value.trim();

    var email = document.getElementById("email");
    var emailValue = email.value.toLowerCase().trim();

    var btn = document.getElementById("submit-btn-form");

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
        setSucess(name,"Name seems Good");
    }else{
        setError(name,"This feild is required");

    }


    if (emailValue.match(mailformat)) {
        // valid mail
        setSucess(email,"Email Seems good")
    } else {
        // not a valid mail
        setError(email,"Email not valid");
    }

    if(flag==2){
        submit();
    }

}