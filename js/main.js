//sneaker site displaying a gallery of sneakers for sale, along with price ans stock remaining.

function shoes(name, size, stock, color, image) {
	this.name = name
	this.size = size
	this.stock = stock
	this.color = color
	this.image = image
}

let shoeArray = []

let curryBlack = new shoes("Under Armour Curry 4", "Size 9", 30, "black", "img/curry-black.jpg");
let curryBlue = new shoes("Under Armour Curry 4", "Size 9.5", 22, "blue", "img/curry-blue.jpg");
let curryGreen = new shoes("Under Armour Curry 1", "Size 8", 2, "green", "img/curry-green.jpg");
let curryRed = new shoes("Under Armour Curry 4 Low", "Size 12", 16, "red", "img/curry-red.jpg");
let curryGrey = new shoes("Under Armour Curry 4", "Size 16", 100, "grey", "img/curry-grey.jpg");
let curryWhite = new shoes("Under Armour Curry 4", "Size 11", 3, "white", "img/curry-white.jpg");

shoeArray.push(curryBlack, curryBlue, curryGreen, curryRed, curryGrey, curryWhite);
console.log(shoeArray)

for(let i = 0; i < shoeArray.length; i++) {
	let kickName = document.createTextNode(shoeArray[i].name),
		kickSize = document.createTextNode("Available size: " + shoeArray[i].size)
		kickStock = document.createTextNode("In stock: " + shoeArray[i].stock)
		kickColor = document.createTextNode("Color: " + shoeArray[i].color)
		kickImage = shoeArray[i].image
		kickButton = document.createTextNode("Buy Now!")

		let newCol  = document.createElement('div'),
			newDiv  = document.createElement('div'),
			nameH1  = document.createElement('h1'),
			sizeH4  = document.createElement('h4'),
			colorH4 = document.createElement('h4'),
			stockH4 = document.createElement('h4'),
			buyNow  = document.createElement('button'),
			image   = document.createElement('img')

			nameH1.appendChild(kickName)
			sizeH4.appendChild(kickSize)
			colorH4.appendChild(kickColor)
			stockH4.appendChild(kickStock)
			buyNow.appendChild(kickButton)
			buyNow.className = "btn btn-primary"
			image.src = kickImage
			image.className = "img-fluid"

			newCol.className = "col-lg-4"
			newDiv.className = "shoename shoe size"
			newDiv.appendChild(nameH1)
			newDiv.appendChild(image)
			newDiv.appendChild(sizeH4)
			newDiv.appendChild(colorH4)
			newDiv.appendChild(stockH4)
			newDiv.appendChild(buyNow)
			newCol.appendChild(newDiv)

			document.getElementById("shoes").appendChild(newCol)
}
