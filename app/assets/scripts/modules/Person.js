class Person {
	constructor(fullName, favColor) {
		this.name = fullName;
		this.favrouriteColor = favColor;
	}
	
	greet() {
		console.log("Hello my name is "+ this.name + " and my favrourite color is "+ this.favrouriteColor +".");
	}
}

export default Person;