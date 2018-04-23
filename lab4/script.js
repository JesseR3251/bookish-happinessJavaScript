         $("#button").click(function(){
         	var allInputs = $( ":input" );
         	$.each(allInputs,function(index,value) {
         		var test = index;
         		var test2 = value;
         		if (value.checked == true && value.value=="hide")
         			$("#effectText").hide();
         		else if (value.checked == true && value.value =="show")
         			$("#effectText").show();
         		else if (value.checked == true && value.value =="toggle")	
         			$("#effectText").toggle();
         		else if (value.checked == true && value.value =="fadeOut")	
         			$("#effectText").fadeOut(1000);
         		else if (value.checked == true && value.value =="fadeIn")
         			$("#effectText").fadeIn(1000);
         		else if (value.checked == true && value.value =="slideUp")
         			$("#effectText").slideUp(1000);
         		else if (value.checked == true && value.value =="slideDown")
         			$("#effectText").slideDown(1000);
         		else if (value.checked == true && value.value =="slideToggle")
         			$("#effectText").slideToggle(1000);
         		else if (value.checked == true && value.value =="fadeTo")
         			$("#effectText").fadeTo("slow",.5);
          }); 
         	});