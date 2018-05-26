//sneaker site displaying a gallery of sneakers for sale, along with price ans stock remaining.

function shoes(name, size, stock, color, image) {
	this.name = name
	this.size = size
	this.stock = stock
	this.color = color
	this.image = image
}

let shoeArray = []


let jordan3Katrina = new shoes("Jordan 3 Katrina",  8.5, 2, "White/Red", "img/Jordan3Katrina.jpg")
let Jordan11CoolGrey = new shoes("Jordan 11 CoolGrey",  13, 32, "grey", "https://4app.kicksonfire.com/kofapp/upload/events_master_images/thumb_ipad_dd57c0057b6e00d3967d5fb5b71fc4b35ad537573e235.jpg")
let Jordan11WinLike96 = new shoes("Jordan 11 Win Like 96",  11.5, 5, "Red", "https://4app.kicksonfire.com/kofapp/upload/events_master_images/thumb_ipad_a26ccb789dc8d44d3bd7820929f1bc835a66b5fef082e.jpg")
let Nike1HighWheat = new shoes("Nike Air Force 1 High Wheat", 8.5, 53, "Wheat", "https://4app.kicksonfire.com/kofapp/upload/events_master_images/thumb_ipad_9496aff0952ad7cea99949ee0ec46c9a5a66fb4c0833b.jpg") 
let yeezyBoost350BT = new shoes("Adidas Yeezy Boost 350 V2 Blue Tint", 10, 0, "Blue Tint", "https://4app.kicksonfire.com/kofapp/upload/events_master_images/thumb_ipad_8c294e707676e75da06596cf722eaeb05a66c20baba08.jpg")
let Jordan5Bsuede = new shoes("Jordan 5 Blue Suede", 9.5, 1, "Blue", "https://4app.kicksonfire.com/kofapp/upload/events_master_images/thumb_ipad_471105f9c1d8f71865cf1c8d8e12d0c85a66bbccb6aa6.jpg")
let Jordan4PureMoney = new shoes("Jordan 4 Pure Money",  10.5, 3, "White", "https://4app.kicksonfire.com/kofapp/upload/events_master_images/thumb_ipad_f183f51207e2b9d463c9843656f1b23b5a66fe85dfca0.jpg")
let NikeAirFoampositeRustPink = new shoes("Nike Air Foamposite One Rust Pink", 11, 23, "Rust Pink", "https://4app.kicksonfire.com/kofapp/upload/events_master_images/thumb_ipad_f4b2c22c6472fde6572f98320410ff1b5ad105c294c83.jpg")
let AirjordanRetroShadow = new shoes("Air Jordan 1 Retro High OG Shadow", 7, 120, "Black, Dark Grey", "https://4app.kicksonfire.com/kofapp/upload/events_master_images/thumb_ipad_7678746aaa410bd4439acaa13599827a5ac6a2c7a50b0.jpg")
let AirJordan11Gamma = new shoes("Air Jordan 11 Gamma Blue", 10, 29, "Gamma Blue", "https://4app.kicksonfire.com/kofapp/upload/events_master_images/thumb_ipad_00b5b188c4769cb25f2fcadf8f3a04c15a66ee983cd43.png")
let NikeAirVaporMaxNeon = new shoes("Nike Air VaporMax 97 Neon", 8, 178, "Neon, Black", "https://4app.kicksonfire.com/kofapp/upload/events_master_images/thumb_ipad_b9a9db258d21c2b612017504fc0e69995a8b876345c4f.jpg")

/*each shoe template is pushed into the Shoearray*/
shoeArray.push(jordan3Katrina, Jordan11CoolGrey, Jordan11WinLike96, Nike1HighWheat, yeezyBoost350BT, Jordan5Bsuede, Jordan4PureMoney, NikeAirFoampositeRustPink, AirjordanRetroShadow, AirJordan11Gamma, NikeAirVaporMaxNeon);

console.log(shoeArray)

for(let i = 0; i < shoeArray.length; i++) {
	let kickName = document.createTextNode(shoeArray[i].name),
		kickSize = document.createTextNode("Sizes start at: " + shoeArray[i].size)
		kickStock = document.createTextNode("In stock: " + shoeArray[i].stock)
		kickColor = document.createTextNode("Color: " + shoeArray[i].color)
		kickImage = shoeArray[i].image
		kickButton = document.createTextNode("Buy Now!")

		let newCol  = document.createElement('div'),
			newDiv  = document.createElement('div'),
			nameH6  = document.createElement('h6'),
			sizeP  = document.createElement('p'),
			colorP = document.createElement('p'),
			stockP = document.createElement('p'),
			buyNow  = document.createElement('button'),
			image   = document.createElement('img')

			nameH6.appendChild(kickName)
			nameH6.className = "shoeTitle"
			sizeP.appendChild(kickSize)
			colorP.appendChild(kickColor)
			stockP.appendChild(kickStock)
			buyNow.appendChild(kickButton)
			buyNow.className = "btn btn-primary"
			image.src = kickImage
			image.className = "img-fluid"

			newCol.className = "col-lg-4 col-md-4 col-sm-6 col-xs-12 shoeTemp"
			newDiv.className = "shoename shoe size"
			newDiv.appendChild(image)
			newDiv.appendChild(nameH6)
			newDiv.appendChild(sizeP)
			newDiv.appendChild(colorP)
			newDiv.appendChild(stockP)
			newDiv.appendChild(buyNow)
			newCol.appendChild(newDiv)

			document.getElementById("shoes").appendChild(newCol)
}
