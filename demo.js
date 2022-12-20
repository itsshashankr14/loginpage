const input=document.getElementById('input');
    const output=document.getElementById('output');
    function PrintInput(){
      output.innerHTML=input.value;
    }
    input.addEventListener("keyup",function(event){
      if(event.keyCode===15){
        event.preventDefault();
        document.getElementById("button"). click();
      }
    });