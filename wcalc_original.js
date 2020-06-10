





function roundToTwo(num) {    
    return +(Math.round(num + "e+2")  + "e-2");
}

var x ;
var y ;
//Unit of measure Convertor.

function conv(){
var sel = document.getElementById("sel").value;
	a = document.getElementById('inputWidth').value || 0;
	b = document.getElementById('inputHeight').value || 0;
	
	
	if (sel == 'inch') {	
		var width = a/12;
			var height = b/12;
			x = roundToTwo(width);
			y = roundToTwo(height);
			var area = roundToTwo(x * y);
	    	document.getElementById("outputWidth").innerHTML=(x + '&nbsp;Feet\n');
			document.getElementById("outputHeight").innerHTML=(y + '&nbsp;Feet\n');
			document.getElementById("area").innerHTML=(area + '&nbsp;SqFt\n');
		return x, y;
		}
	else if (sel == 'meter') {	
			var width= a * 3.28084;
			var height= b * 3.28084;
			x = roundToTwo(width);
			y = roundToTwo(height);
			var area = roundToTwo(x * y);
	    	document.getElementById("outputWidth").innerHTML=(x + '&nbsp;Feet\n');
			document.getElementById("outputHeight").innerHTML=(y + '&nbsp;Feet\n');
			document.getElementById("area").innerHTML=(area + '&nbsp;SqFt\n');
			return x, y;
	  	}
	else if (sel == 'cm'){
			var width= a * 0.0328084;
			var height= b * 0.0328084;
			x = roundToTwo(width);
			y = roundToTwo(height);
	    	var area = roundToTwo(x * y);
	    	document.getElementById("outputWidth").innerHTML=(x + '&nbsp;Feet\n');
			document.getElementById("outputHeight").innerHTML=(y + '&nbsp;Feet\n');
			document.getElementById("area").innerHTML=(area + '&nbsp;SqFt\n');
		return x, y;
		}
		else if (sel == 'mm'){
			var width= a * 0.00328084;
			var height= b * 0.00328084;
			x = roundToTwo(width);
			y = roundToTwo(height);
	    	var area = roundToTwo(x * y);
	    	document.getElementById("outputWidth").innerHTML=(x + '&nbsp;Feet\n');
			document.getElementById("outputHeight").innerHTML=(y + '&nbsp;Feet\n');
			document.getElementById("area").innerHTML=(area + '&nbsp;SqFt\n');
		return x, y;
		}
		
	
	}



function sqft() {
	document.getElementById("errorMsg").innerHTML = "";
	a = document.getElementById('inputWidth').value || 0;
	b = document.getElementById('inputHeight').value || 0;
	if(a<0 || b<0) {
		document.getElementById("errorMsg").innerHTML = "Error: Height or Width cannot be negative"
		return;
	}

	if(a == 0 && b == 0) {
		return;
	}

    conv();
	var p1 = document.getElementById('percent1').value || 0;
	var p2 = document.getElementById('percent2').value || 0;
	var p3 = document.getElementById('percent3').value || 0;
	var tp = parseInt(p1) + parseInt(p2) + parseInt(p3);
	if(p1<0 || p2<0 || p3<0)
	{
		document.getElementById("errorMsg").innerHTML = "Error: Ratios cannot be negative numbers";	
		document.getElementById("sqFeet").innerHTML= "";
		document.getElementById("sqFeet2").innerHTML= "";
		document.getElementById("sqFeet3").innerHTML= "";
		return;
	}
	if(tp > 100){
		document.getElementById("errorMsg").innerHTML = "Error: Sum of ratios cannot exceed 100";
		document.getElementById("sqFeet").innerHTML= "";
		document.getElementById("sqFeet2").innerHTML= "";
		document.getElementById("sqFeet3").innerHTML= "";
		return;
	}


	var totalSqft = x*y;
	var sqft1 = (totalSqft*p1) / 100 ;
	var sqft2 = (totalSqft*p2) / 100 ;
	var sqft3 = (totalSqft*p3) / 100 ;
	document.getElementById("errorMsg").innerHTML = "";
	document.getElementById("sqFeet").innerHTML= Math.round(sqft1)+"&nbsp;SqFt";
	document.getElementById("sqFeet2").innerHTML= Math.round(sqft2)+"&nbsp;SqFt";
	document.getElementById("sqFeet3").innerHTML= Math.round(sqft3)+"&nbsp;SqFt";
	
	if(tp<99) {
		document.getElementById("errorMsg").innerHTML = "Error: SqFt Area of Panels is less than Total SqFt Area.";
		return;
		
	
	}
	return ;

/*if (tp > 100){
		alert("Percentage greater than 100!");
	return;
		}*/
}
 



