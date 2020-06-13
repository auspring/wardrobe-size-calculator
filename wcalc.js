


// Closure
(function() {
	/**
	 * Decimal adjustment of a number.
	 *
	 * @param {String}  type  The type of adjustment.
	 * @param {Number}  value The number.
	 * @param {Integer} exp   The exponent (the 10 logarithm of the adjustment base).
	 * @returns {Number} The adjusted value.
	 */
	function decimalAdjust(type, value, exp) {
	  // If the exp is undefined or zero...
	  if (typeof exp === 'undefined' || +exp === 0) {
		return Math[type](value);
	  }
	  value = +value;
	  exp = +exp;
	  // If the value is not a number or the exp is not an integer...
	  if (isNaN(value) || !(typeof exp === 'number' && exp % 1 === 0)) {
		return NaN;
	  }
	  // Shift
	  value = value.toString().split('e');
	  value = Math[type](+(value[0] + 'e' + (value[1] ? (+value[1] - exp) : -exp)));
	  // Shift back
	  value = value.toString().split('e');
	  return +(value[0] + 'e' + (value[1] ? (+value[1] + exp) : exp));
	}
  
	// Decimal round
	if (!Math.round10) {
	  Math.round10 = function(value, exp) {
		return decimalAdjust('round', value, exp);
	  };
	}
	// Decimal floor
	if (!Math.floor10) {
	  Math.floor10 = function(value, exp) {
		return decimalAdjust('floor', value, exp);
	  };
	}
	// Decimal ceil
	if (!Math.ceil10) {
	  Math.ceil10 = function(value, exp) {
		return decimalAdjust('ceil', value, exp);
	  };
	}
  })();
  
  // Round
  Math.round10(55.55, -1);   // 55.6
  Math.round10(55.549, -1);  // 55.5
  Math.round10(55, 1);       // 60
  Math.round10(54.9, 1);     // 50
  Math.round10(-55.55, -1);  // -55.5
  Math.round10(-55.551, -1); // -55.6
  Math.round10(-55, 1);      // -50
  Math.round10(-55.1, 1);    // -60
  // Floor
  Math.floor10(55.59, -1);   // 55.5
  Math.floor10(59, 1);       // 50
  Math.floor10(-55.51, -1);  // -55.6
  Math.floor10(-51, 1);      // -60
  // Ceil
  Math.ceil10(55.51, -1);    // 55.6
  Math.ceil10(51, 1);        // 60
  Math.ceil10(-55.59, -1);   // -55.5
  Math.ceil10(-59, 1);       // -50


function roundToTwo(num) {    
	//return +(Math.ceil(num + "e+2")  + "e-2");
	//return +(Math.ceil(num + "e+2")  + "e-2");
	return parseFloat((Math.ceil(num / 0.05) * 0.05).toFixed(1));
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
			document.getElementById("area").innerHTML=(roundToTwo(area) + '&nbsp;SqFt\n');
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
			document.getElementById("area").innerHTML=(roundToTwo(area) + '&nbsp;SqFt\n');
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
			document.getElementById("area").innerHTML=(roundToTwo(area) + '&nbsp;SqFt\n');
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
			document.getElementById("area").innerHTML=(roundToTwo(area) + '&nbsp;SqFt\n');
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
	var p4 = document.getElementById('percent4').value || 0;
	var p5 = document.getElementById('percent5').value || 0;
	var tp = parseInt(p1) + parseInt(p2) + parseInt(p3) + parseInt(p4) + parseInt(p5);
	if(p1<0 || p2<0 || p3<0 || p4<0 || p5<0)
	{
		document.getElementById("errorMsg").innerHTML = "Error: Ratios cannot be negative numbers";	
		document.getElementById("sqFeet").innerHTML= "";
		document.getElementById("sqFeet2").innerHTML= "";
		document.getElementById("sqFeet3").innerHTML= "";
		document.getElementById("sqFeet4").innerHTML= "";
		document.getElementById("sqFeet5").innerHTML= "";
		return;
	}
	if(tp > 100){
		document.getElementById("errorMsg").innerHTML = "Error: Sum of ratios cannot exceed 100";
		document.getElementById("sqFeet").innerHTML= "";
		document.getElementById("sqFeet2").innerHTML= "";
		document.getElementById("sqFeet3").innerHTML= "";
		document.getElementById("sqFeet4").innerHTML= "";
		document.getElementById("sqFeet5").innerHTML= "";
		return;
	}


	var totalSqft = x*y;
	var sqft1 = (totalSqft*p1) / 100 ;
	var sqft2 = (totalSqft*p2) / 100 ;
	var sqft3 = (totalSqft*p3) / 100 ;
	var sqft4 = (totalSqft*p4) / 100 ;
	var sqft5 = (totalSqft*p5) / 100 ;
	document.getElementById("errorMsg").innerHTML = "";
	document.getElementById("sqFeet").innerHTML= roundToTwo(sqft1)+"&nbsp;SqFt";
	document.getElementById("sqFeet2").innerHTML= roundToTwo(sqft2)+"&nbsp;SqFt";
	document.getElementById("sqFeet3").innerHTML= roundToTwo(sqft3)+"&nbsp;SqFt";
	document.getElementById("sqFeet4").innerHTML= roundToTwo(sqft4)+"&nbsp;SqFt";
	document.getElementById("sqFeet5").innerHTML= roundToTwo(sqft5)+"&nbsp;SqFt";
	
	if(tp<=99) {
		document.getElementById("errorMsg").innerHTML = "Error: Sum or Panel % ratio is less than 100";
		document.getElementById("sqFeet").innerHTML= "";
		document.getElementById("sqFeet2").innerHTML= "";
		document.getElementById("sqFeet3").innerHTML= "";
		document.getElementById("sqFeet4").innerHTML= "";
		document.getElementById("sqFeet5").innerHTML= "";
		return;
		
	
	}
	return ;

/*if (tp > 100){
		alert("Percentage greater than 100!");
	return;
		}*/
}
 



