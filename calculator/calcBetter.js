	const display=document.getElementById("disp");

	function append(input){
		display.value+=input;
	}

	function Clear(){
		display.value="";
	}

	function calculate(){
		try{
			display.value=eval(display.value);
		}
		catch(error){
			display.value="Error";
		}
	}