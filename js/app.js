var inputoperandA = document.querySelector("#operand_a");
var inputOperator = document.querySelector("#operator");
var output = document.querySelector("#output");
var error = document.querySelector("#error");

var showError = function(){
	error.setAttribute("class", "");
};

var hideError = function(){
	error.setAttribute("class", "hidden");
};

var showResult = function(result){
	output.value = result + "";
};

var multiply = function(a, b){
	return a * b;
};

var isOperator = function(operator){
	return operator == "コーラ" || operator == "スプライト" || operator == "オレンジジュース" ||
	operator == "ビール" || operator == "ココア";
};

var isNumber = function(a){
	return !Number.isNaN(a);
	//全ての数値
};

var isMultiplication = function(operator, a){
	return operator == "コーラ" && isNumber(a)|| operator == "スプライト" && isNumber(a)|| operator == "オレンジジュース" && isNumber(a) || operator == "ビール" && isNumber(a) || operator == "ココア" && isNumber(a);
}

var isReady = function(operator, a, b){
	return isMultiplication(operator, a, b);
};

var startCalc = function(){
	var operandA = inputoperandA.value;
	var operator = inputOperator.value;
		
	operandA = Number(operandA);

	hideError();
	if(isReady(operator, operandA)){
		var result = 0;
		if(operator == "コーラ"){
			result = multiply(225, operandA);
		} else if (operator == "スプライト"){
			result = multiply(205, operandA);
		} else if (operator == "オレンジジュース"){
			result = multiply(214, operandA);
		} else if (operator == "ビール"){
			result = multiply(200, operandA);
		} else if (operator == "ココア"){
			result = multiply(2060, operandA);
		}
		showResult(result);
	}else{
		showError();
	}
	
	console.log(operator);
	console.log(output);

};

var initApp = function(){
	var calcButton = document.querySelector("#calcButton");

	calcButton.addEventListener("click", startCalc)
};

initApp();