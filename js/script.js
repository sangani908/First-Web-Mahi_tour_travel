const gallaryItems = document.querySelector(".gallery-items").children;
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
let page = document.querySelector(".page");
const maxItem = 4;
let index=1;


const pagination = Math.ceil(gallaryItems.length / maxItem);
// console.log(pagination);

prev.addEventListener("click", function(){
	index--;
	check();
	showItems();
});

next.addEventListener("click", function(){
	index++;
	check();
	showItems();
	
})

function check() {
	if(index == pagination || index > pagination){
		next.classList.add("disabled")
	}
	else{
		next.classList.remove("disabled")
	}

	if(index == 1 || index < 1){
		prev.classList.add("disabled")
	}
	else{
		prev.classList.remove("disabled")
	}
	
}

function showItems() {
	for (let i = 0; i<gallaryItems.length; i++) {
		// gallaryItems[i].classList.add("hide");
		gallaryItems[i].classList.remove("show");
		// gallaryItems[i].classList.add("hide");

		console.log(i,index,i >= (index*maxItem)- maxItem && i < index*maxItem);

		if(i >= (index*maxItem)- maxItem && i < index*maxItem){
			// gallaryItems[i].classList.remove("show");
			gallaryItems[i].classList.add("show");
		}
		else{
			// gallaryItems[i].classList.remove("show");
			gallaryItems[i].classList.add("hide");

		}
		// console.log(index);
		page.innerHTML = index;
		
	}


}

window.onload = function() {
	showItems();
	check();
}
  