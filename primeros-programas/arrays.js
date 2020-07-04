var array = [1, "Pedro", true, false, "Juan"];
array[1] = "Germán";
array[4] = "diego";

for (var i = 0; i < array.length; i ++) {
  console.log(array[i]);
}
var array = ["Pedro", "Germán", "Diana"];
array.splice(0, 0, "diego") // ["Juan", "Pedro", "Germán", "Diana"]

var array = ["Pedro", "Germán", "Diana"];
array.splice(1, 1);

