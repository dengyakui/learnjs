function computeAge() {
    return new Date().getFullYear()-this.birthYear;
}
var xiaoming = {
    birthYear : 1991,
    age : computeAge
};

// alert(xiaoming.age());
alert(computeAge.apply(xiaoming));