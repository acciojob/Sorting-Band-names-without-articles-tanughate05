//your code here
let touristSpots = ['The Virupaksha Temple', 'Victoria Memorial', 'Tajmahal'];
const sortedList = sortTitles(touristSpots)
var ul = document.getElementById("list");
 
sortedList.forEach(i => {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(i));
	ul.appendChild(li);
})
function sortTitles(list) {
	let data = []
	
	let newList = []
	list.forEach((item, index) => {
		let temp = item.split(" ").filter(i => {
			if(!(i.toLowerCase() === "the" || i.toLowerCase() === "an" || i.toLowerCase() === "a")) {
      
				return i;
			}
		})
    //console.log(temp.join(""))
		data.push({index: index, compareValue: temp.join(""), actual:  item})
	})
	data.sort((a ,b) => a.compareValue>b.compareValue ? 1 : (a.compareValue<b.compareValue ? -1 : 0))
	 return data.map(item => item.actual)
}
