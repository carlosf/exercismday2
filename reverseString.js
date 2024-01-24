function reverse(s) {
    var stringarr = s.split("");
    var reverse = ""

    for (i=stringarr.length-1; i >= 0; i--) {
        reverse += (stringarr[i])
    }
    console.log(reverse)
}


console.log("Carlos");
console.log(reverse("Carlos"))
