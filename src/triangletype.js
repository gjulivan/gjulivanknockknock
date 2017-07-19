function getTriangleType(a,b,c) {
	if(isTriangle(a,b,c)){
		 if (a <= 0 || b <= 0 || c <= 0) {
		 	return "Error";
		 }
		 else if(a === b && b === c){
		 	return "Equilateral";
		 }
		 else if(a === b || a === c || b === c){
		 	return "Isosceles";
		 }
		 else if(a !==b && a!==c && b!==c){
		 	return "Scalene";
		 }
		 else{
		 	return "Error";
		 }
	}
	else{
		return "Error";
	}
}

function isTriangle(a,b,c){
	var sideAsqrd = a*a;//side A squared for pythagorean theorem
	var sideBsqrd = b*b;//side B squared
	var sideCsqrd = c*c;//side C squared
	var AB = a+b;//side A + B to check if a triangle can be formed
	var AC = a+c;//side A + C
	var BC = b+c;//side B + C
	var A2B2 = sideAsqrd + sideBsqrd;
	var A2C2 = sideAsqrd + sideCsqrd;
	var B2C2 = sideBsqrd + sideCsqrd;

	if ((AB > c) && (AC > b) && (BC > a)) {
		return true;
	}
	if ((sideAsqrd == B2C2) || (sideBsqrd == A2C2) || (sideCsqrd == A2B2)) {
		return true;
	}
	else {
		return false;
	}
}

module.exports.getTriangleType = getTriangleType;