////Add Guest Button
const addGuestButton = document.querySelector(".invite");
////Guest Input Label
const guestInputLabel = document.querySelector(".add-guest label");
////Add guest to list
const guestInput = document.querySelector(".add-guest input");
///Guest List
const guestList = document.querySelector(".guest-list");
////Make sure there are only 8 guests - counter
const guestCount = document.querySelector(".attendance");
////Alert for no more guests reached limit of 8
const guestFull = document.querySelector(".alert");
////Assign Dishes Button
const assignButton = document.querySelector(".assign");
////Assigned Items
const assignedItems = document.querySelector(".assigned-items");

addGuestButton.addEventListener("click", function () {
	const guest = guestInput.value;
	if (guest !== "") {
		addToList(guest);
		updateGuestCount();
		clearInput();
	}
});

const addToList = function (guest) {
	const listItem = document.createElement("li");
	listItem.innerText = guest;
	guestList.append(listItem);
};

const clearInput = function () {
	guestInput.value = "";
};

const updateGuestCount = function () {
	const guests = document.querySelectorAll(".guest-list li");
	guestCount.innerText = guests.length;

	if (guests.length === 8) {  ///when reach 8 hide guest button
		addGuestButton.classList.add("hide");
		guestInput.classList.add("hide");
		guestInputLabel.classList.add("hide");
		guestFull.classList.remove("hide");
	}
};

const assignItems = function () {  ///items that can be chosen
	const potluckItems = [
		"cheese",
		"crackers",
		"fresh fruit",
		"coleslaw",
		"apple cake",
		"gazpacho",
		"baguette",
		"egg salad",
		"potato salad",
		"summer rolls",
		"hummus",
		"cookies"
	];

	const allGuests = document.querySelectorAll(".guest-list li");
	for (let guest of allGuests) {
		let randomPotluckIndex = Math.floor(
              ///randomly assign dishes
			Math.random() * potluckItems.length
		);
		let randomPotluckItem = potluckItems[randomPotluckIndex];

		let listItem = document.createElement("li");
		listItem.innerText = `${guest.innerText} is bringing ${randomPotluckItem}.`;
		assignedItems.append(listItem);

		potluckItems.splice(randomPotluckIndex, 1);
	}
};

assignButton.addEventListener("click", function () {
	assignItems();
	assignButton.disabled = true;
});
