var input = document.querySelector("input"),
    gram = document.querySelector(".gramsAct");
    kilogram = document.querySelector(".kilogramsAct"),
    ounce = document.querySelector(".ouncesAct"),
    out = document.querySelector(".out"),
    lbs = document.querySelector(".lbs"),
    kilo = document.querySelector(".kilo"),
    oun = document.querySelector(".oun"),
    gramSp = document.querySelector(".gramSp"),
    kiloSp = document.querySelector(".kiloSp"),
    ounceSp = document.querySelector(".ounceSp"),
    allChanges = document.querySelector("#select");
    but = document.querySelector(".button");


    out.style.display = "none";
    input.style.visibility ="hidden"
  
   
but.addEventListener("click", closeOut);
function closeOut(){
   out.style.display = "none";
   input.value = "";
}

allChanges.addEventListener("change", (e) =>{
    
    if(e.target.value === "first"){
        input.placeholder = "Enter pound"
        input.style.visibility = "visible"

        closeOut();
        input.addEventListener("input", mhe);
        function mhe(e){
          
         var pounds = e.target.value;
         out.style.display = "block";
         gram.innerHTML = pounds/Number(0.0022046);
         gramSp.innerHTML = "Grams";
         kiloSp.innerHTML = "kilograms";
         ounceSp.innerHTML = "Ounces"
         kilogram.innerHTML = pounds/Number(2.2046);
         ounce.innerHTML = pounds*Number(16); 
     }
        
    }else if(e.target.value === "second"){
        input.style.visibility = "visible"
        closeOut();
        input.placeholder = "Enter kilogram";
        input.addEventListener("input", mhe1);
        function mhe1(e){
         var pounds = e.target.value;
         out.style.display = "block";
         kiloSp.innerHTML = "Pounds";
         ounceSp.innerHTML = "Ounces";
         gram.innerHTML = pounds*Number(1000);
         kilogram.innerHTML = pounds*Number(2.20462);
         ounce.innerHTML = pounds*Number(35.274); 
     }

    }else if(e.target.value === "third"){
        
        input.style.visibility = "visible"
        closeOut();
        input.placeholder = "Enter ounce";
        input.addEventListener("input", mhe2);
        function mhe2(e){
         var pounds = e.target.value;
         out.style.display = "block";
         gramSp.innerHTML = "Grams";
         kiloSp.innerHTML = "Kilograms";
        ounceSp.innerHTML = "Pounds"
         gram.innerHTML = pounds*Number(28.3495);
         kilogram.innerHTML = pounds*Number(0.00283495);
         ounce.innerHTML = pounds*Number(0.0625); 
        }
    }else if(e.target.value === "null"){
        closeOut();
        input.placeholder = "change selected";
        input.style.visibility = "hidden";
    }else if(e.target.value === "gram"){
        input.style.visibility = "visible"
        closeOut();
        input.placeholder = "Enter ounce";
        input.addEventListener("input", mhe2);
        function mhe2(e){
         var pounds = e.target.value;
         gramSp.innerHTML = "Pounds"
         kiloSp.innerHTML = "Kilograms"
         ounceSp.innerHTML = "ounces"
         out.style.display = "block";
         gram.innerHTML = pounds*Number(0.00220462);
         kilogram.innerHTML = pounds*Number(0.001);
         ounce.innerHTML = pounds*Number(0.035274); 
        }
    }
})
