//your code here
let touristSpots = ['The Virupaksha Temple', 'Victoria Memorial', 'Tajmahal'];
const sortedList = sortTitles(touristSpots)
var ul = document.getElementById("list");
 
sortedList.forEach(i => {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(i));
	ul.appendChild(li);
})
const sortTitles(list) {
	const data = []
	
	let newList = []
	list.forEach((item, index) => {
		let temp = item.split(" ").map(i => {
			if(!(i.toLowerCase() === "the" || i.toLowerCase() === "an || i.toLowerCase() === "a)) {
				return i;
			}
		})
		data.push({index: index, compareValue: temp.join(), actual:  item})
	})
	newList.sort((a ,b) => a.compareValue<b.compareValue ? 1 : (a.compareValue>b.compareValue ? -1 : 0))
	return newList.map(item => return item.actual)
}
