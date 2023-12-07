		let plates=document.querySelectorAll('#plates');
		let infos=document.querySelectorAll('#product-info');
		let circle=document.getElementById('circle');
		let spin_btn_plus=document.getElementById('spin_plus'), count=0;
		let spin_btn_minus=document.getElementById('spin_minus')
		// let btns=document.querySelectorAll('.btns');
		let order_btn=document.getElementById('order_btn');
			

		spin_btn_plus.addEventListener('click', ()=>{
			
			count++;
			let deg=count*40;
			circle.style.transform="rotate("+deg+"deg)"
		})

		spin_btn_minus.addEventListener('click',()=>{
			
			count--;
			let deg=count*40;
			circle.style.transform="rotate("+deg+"deg)"
		})
		
	

		const food_infos=[
			{
				price: "23$",
				name:"Asian Cucumber Salad",
				info:"Asian Cucumber Salad Recipe made with crunchy cucumber, onion, rice wine vinegar, and a few secret ingredients!",
				theme_color: "#95f5aa",
				src: "assets/images/plate1.png"
			},
			{
				price: "42$",
				name: "Buffalo Style Chicken Egg Rolls",
				info:" Stuffed with chicken, pepperoni,black beans, and smoked gouda served with a blend of hot ",
				theme_color: "#f59595",
				src: "assets/images/plate2.png"
			},
			{
				price: "12$",
				name: "Grilled Shrimp",
				info:" Six shrimp in a chipotle marinade served with chipotle aioli  ",
				theme_color: "#9597f5",
				src: "assets/images/plate3.png"
			},
			{
				price: "22$",
				name: "Chicken Wings",
				info:" Choice of hot, mild, BBQ, or teriyakisauce served with celery and your choice of bleu cheese or Ranch dressing ",
				theme_color: "#b895f5",
				src: "assets/images/plate4.png"
			},
			{
				price: "42$",
				name: "Pepperjack Cheese Bites",
				info:"Lightly breaded pepperjack cheese served with Ranch dressing ",
				theme_color: "#23403d",
				src: "assets/images/plate6.png"
			},
			{
				price: "44$",
				name: "Hot Pretzel Sticks",
				info:" Six fresh made pretzel sticks served with house made dijon cheese dip",
				theme_color: "#FFEEDE",
				src: "assets/images/plate7.png"
			},
			{
				price: "46$",
				name: "Caesar Salad",
				info:"Romaine lettuce, aged parmigianoreggiano, house made Caesar dressing, and crouton",
				theme_color: "#95e5f5",
				src: "assets/images/plate8.png"
			},
			{
				price: "25$",
				name: "House Salad",
				info:"Mixed greens, red onions, sunflowerseeds, tomatoes, mozzarella cheese,house made balsamic vinaigrette",
				theme_color: "#618f72",
				src: "assets/images/plate9.png"
			}

			];


		function show_AsianCucumberSalad(){
			let plates=document.querySelectorAll('img');
			let infos=document.querySelectorAll('#product-info');
			let circle_box=document.querySelector('.circle-box');
			let plate_box=document.querySelector('#plate-box');
			let btns=document.querySelectorAll('.btns');



			infos[0].style.color=food_infos[0].theme_color
			infos[0].innerHTML=food_infos[0].price;
		 	infos[1].innerHTML=food_infos[0].name;
		 	infos[2].innerHTML=food_infos[0].info;

		 	order_btn.style.backgroundColor=food_infos[0].theme_color;
		 	spin_btn_minus.style.backgroundColor=food_infos[0].theme_color;
		 	spin_btn_plus.style.backgroundColor=food_infos[0].theme_color;
		 	plate_box.setAttribute('src',food_infos[0].src);
		 	circle_box.style.backgroundColor=food_infos[0].theme_color;
		};

		function show_BuffaloStyleChickenEggRolls(){
			let plates=document.querySelectorAll('img');
			let infos=document.querySelectorAll('#product-info');
			let circle_box=document.querySelector('.circle-box');
			let plate_box=document.querySelector('#plate-box');

			infos[0].style.color=food_infos[1].theme_color
			infos[0].innerHTML=food_infos[1].price;
		 	infos[1].innerHTML=food_infos[1].name;
		 	infos[2].innerHTML=food_infos[1].info;

		 	
		 	order_btn.style.backgroundColor=food_infos[1].theme_color;
		 	spin_btn_minus.style.backgroundColor=food_infos[1].theme_color;
		 	spin_btn_plus.style.backgroundColor=food_infos[1].theme_color;
		 	plate_box.setAttribute('src',food_infos[1].src);
		 	circle_box.style.backgroundColor=food_infos[1].theme_color;
		};

		function show_GrilledShrimp(){
			let plates=document.querySelectorAll('img');
			let infos=document.querySelectorAll('#product-info');
			let circle_box=document.querySelector('.circle-box');
			let plate_box=document.querySelector('#plate-box');

			infos[0].style.color=food_infos[2].theme_color
			infos[0].innerHTML=food_infos[2].price;
		 	infos[1].innerHTML=food_infos[2].name;
		 	infos[2].innerHTML=food_infos[2].info;
    		
    		order_btn.style.backgroundColor=food_infos[2].theme_color;
		 	spin_btn_minus.style.backgroundColor=food_infos[2].theme_color;
		 	spin_btn_plus.style.backgroundColor=food_infos[3].theme_color;
    		plate_box.setAttribute('src',food_infos[2].src);
		 	circle_box.style.backgroundColor=food_infos[2].theme_color;
		};


		function show_ChickenWings (){
			let plates=document.querySelectorAll('img');
			let infos=document.querySelectorAll('#product-info');
			let circle_box=document.querySelector('.circle-box');
			let plate_box=document.querySelector('#plate-box');

			infos[0].style.color=food_infos[3].theme_color
			infos[0].innerHTML=food_infos[3].price;
		 	infos[1].innerHTML=food_infos[3].name;
		 	infos[2].innerHTML=food_infos[3].info;
    		
    		order_btn.style.backgroundColor=food_infos[3].theme_color;
		 	spin_btn_minus.style.backgroundColor=food_infos[3].theme_color;
		 	spin_btn_plus.style.backgroundColor=food_infos[3].theme_color;
    		plate_box.setAttribute('src',food_infos[3].src);
		 	circle_box.style.backgroundColor=food_infos[3].theme_color;
		};


		function show_PepperjackCheeseBites(){
			let plates=document.querySelectorAll('img');
			let infos=document.querySelectorAll('#product-info');
			let circle_box=document.querySelector('.circle-box');
			let plate_box=document.querySelector('#plate-box');

			infos[0].style.color=food_infos[4].theme_color;
			infos[0].innerHTML=food_infos[4].price;
		 	infos[1].innerHTML=food_infos[4].name;
		 	infos[2].innerHTML=food_infos[4].info;
    		
    		order_btn.style.backgroundColor=food_infos[4].theme_color;
		 	spin_btn_minus.style.backgroundColor=food_infos[4].theme_color;
		 	spin_btn_plus.style.backgroundColor=food_infos[4].theme_color;
    		plate_box.setAttribute('src',food_infos[4].src);
		 	circle_box.style.backgroundColor=food_infos[4].theme_color;
		};


		function show_HotPretzelSticks (){
			let plates=document.querySelectorAll('img');
			let infos=document.querySelectorAll('#product-info');
			let circle_box=document.querySelector('.circle-box');
			let plate_box=document.querySelector('#plate-box');

			infos[0].style.color=food_infos[5].theme_color;
			infos[0].innerHTML=food_infos[5].price;
		 	infos[1].innerHTML=food_infos[5].name;
		 	infos[2].innerHTML=food_infos[5].info;
    		
    		order_btn.style.backgroundColor=food_infos[5].theme_color;
		 	spin_btn_minus.style.backgroundColor=food_infos[5].theme_color;
		 	spin_btn_plus.style.backgroundColor=food_infos[5].theme_color;
    		plate_box.setAttribute('src',food_infos[5].src);
		 	circle_box.style.backgroundColor=food_infos[5].theme_color;
		};

		function show_CaesarSalad (){
			let plates=document.querySelectorAll('img');
			let infos=document.querySelectorAll('#product-info');
			let circle_box=document.querySelector('.circle-box');
			let plate_box=document.querySelector('#plate-box');

			infos[0].style.color=food_infos[6].theme_color
			infos[0].innerHTML=food_infos[6].price;
		 	infos[1].innerHTML=food_infos[6].name;
		 	infos[2].innerHTML=food_infos[6].info;
    		
    		order_btn.style.backgroundColor=food_infos[6].theme_color;
		 	spin_btn_minus.style.backgroundColor=food_infos[6].theme_color;
		 	spin_btn_plus.style.backgroundColor=food_infos[6].theme_color;
    		spin_btn_minus.style.backgroundColor=food_infos[6].theme_color;
		 	spin_btn_plus.style.backgroundColor=food_infos[6].theme_color;
    		plate_box.setAttribute('src',food_infos[6].src);
		 	circle_box.style.backgroundColor=food_infos[6].theme_color;
		};

		function show_HouseSalad (){
			let plates=document.querySelectorAll('img');
			let infos=document.querySelectorAll('#product-info');
			let circle_box=document.querySelector('.circle-box');
			let plate_box=document.querySelector('#plate-box');

			infos[0].style.color=food_infos[7].theme_color
			infos[0].innerHTML=food_infos[7].price;
		 	infos[1].innerHTML=food_infos[7].name;
		 	infos[2].innerHTML=food_infos[7].info;
    		
    		order_btn.style.backgroundColor=food_infos[7].theme_color;
		 	spin_btn_minus.style.backgroundColor=food_infos[7].theme_color;
		 	spin_btn_plus.style.backgroundColor=food_infos[7].theme_color;
    		plate_box.setAttribute('src',food_infos[7].src);
		 	circle_box.style.backgroundColor=food_infos[7].theme_color;
		};

		

		plates[0].addEventListener('click', show_AsianCucumberSalad);
		plates[1].addEventListener('click', show_BuffaloStyleChickenEggRolls);
		plates[2].addEventListener('click', show_GrilledShrimp);
		plates[3].addEventListener('click', show_ChickenWings);
		plates[4].addEventListener('click', show_PepperjackCheeseBites);
		plates[5].addEventListener('click', show_HotPretzelSticks);
		plates[6].addEventListener('click', show_CaesarSalad);
		plates[7].addEventListener('click', show_HouseSalad);

// ============================================================

	var darkbtn=document.getElementById('darkModeON');
	var body=document.querySelector('body');
	var darkmode= localStorage.getItem("darkmode");


			let enableDarkmod=()=>{
				body.classList.add("darkMode");
				darkbtn.classList.add("darkMode");
				darkbtn.classList.remove("dark-mode-toggle");
				localStorage.setItem("darkmode", "enabled");

				darkbtn.innerHTML="<i class='fa-solid fa-sun fa-2xl' style='color: #ffffff;'></i>"


			}

			let disableDarkmod=()=>{
				body.classList.remove("darkMode");
				darkbtn.classList.remove("darkMode");
				darkbtn.classList.add("dark-mode-toggle");
				localStorage.setItem("darkmode", "disabled");

				darkbtn.innerHTML="<i class='fa-solid fa-moon fa-2xl' style='color: #000000;'></i>"
			}


			if(darkmode==="enabled"){
				enableDarkmod();
			}

			darkbtn.addEventListener('click', ()=>{
				darkmode=localStorage.getItem("darkmode")

				if(darkmode==="disabled"){
					enableDarkmod()

				} else {
					disableDarkmod()
				}
			})