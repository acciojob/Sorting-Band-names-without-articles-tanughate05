//your code here
const sortTitles(list) {
	let newList = []
	list.forEach(item => {
		let temp = item.split(" ").map(i => {
			if(!(i.toLowerCase() === "the" || i.toLowerCase() === "an || i.toLowerCase() === "a)) {
				return i;
			}
		})
		newList.push(temp.join());
	})
	newList.sort((a ,b) => a<b ? 1 : (a>b ? -1 : 0))
	return newList
}
