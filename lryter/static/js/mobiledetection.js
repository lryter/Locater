function test(){
    initMap();
    if(navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/Windows Phone/i)){
        //document.getElementById('css').href += "mymobile.css";
        //window.location = "?mobile=yes";
        if(document.cookie != "" ){
            document.cookie= "mobile=yes";
        }
    } else { 
        
        if(document.cookie != "" ){
            document.cookie= "mobile=no";
        }
        //document.getElementById('css').href += "my.css";
        /*if(request.POST === "undefined"){
        var myForm = document.createElement("form");
            myForm.method = "post";
            myForm.action = "../home/";
            myForm.setAttribute("name", "mobile");
            myForm.setAttribute("value", "true");
            myForm.appendChild(document.createTextNode("{% csrf_token %}"));
            document.body.appendChild(myForm);
            myForm.submit();
            }*/
}
}
