const pets_json = [{
        name: "Katrine",
        img: "../../assets/images/pets-portraits/katrine.png",
        type: "Cat",
        breed: "British Shorthair",
        description: "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
        age: "6 months",
        inoculations: ["panleukopenia"],
        diseases: ["none"],
        parasites: ["none"],
        num: 0,
    },
    {
        name: "Jennifer",
        img: "../../assets/images/pets-portraits/jennifer.png",
        type: "Dog",
        breed: "Labrador",
        description: "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
        age: "2 months",
        inoculations: ["none"],
        diseases: ["none"],
        parasites: ["none"],
        num: 1,
    },
    {
        name: "Woody",
        img: "../../assets/images/pets-portraits/woody.png",
        type: "Dog",
        breed: "Golden Retriever",
        description: "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
        age: "3 years 6 months",
        inoculations: ["adenovirus", "distemper"],
        diseases: ["right back leg mobility reduced"],
        parasites: ["none"],
        num: 2,
    },
    {
        name: "Sophia",
        img: "../../assets/images/pets-portraits/sophia.png",
        type: "Dog",
        breed: "Shih tzu",
        description: "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
        age: "1 month",
        inoculations: ["parvovirus"],
        diseases: ["none"],
        parasites: ["none"],
        num: 3,
    },

    {
        name: "Timmy",
        img: "../../assets/images/pets-portraits/timmy.png",
        type: "Cat",
        breed: "British Shorthair",
        description: "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
        age: "2 years 3 months",
        inoculations: ["calicivirus", "viral rhinotracheitis"],
        diseases: ["kidney stones"],
        parasites: ["none"],
        num: 4,
    },

    {
        name: "Charly",
        img: "../../assets/images/pets-portraits/charly.png",
        type: "Dog",
        breed: "Jack Russell Terrier",
        description: "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
        age: "8 years",
        inoculations: ["bordetella bronchiseptica", "leptospirosis"],
        diseases: ["deafness", "blindness"],
        parasites: ["lice", "fleas"],
        num: 5,
    },
    {
        name: "Scarlett",
        img: "../../assets/images/pets-portraits/scarlett.png",
        type: "Dog",
        breed: "Jack Russell Terrier",
        description: "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
        age: "3 months",
        inoculations: ["parainfluenza"],
        diseases: ["none"],
        parasites: ["none"],
        num: 6,
    },
    {
        name: "Freddie",
        img: "../../assets/images/pets-portraits/freddie.png",
        type: "Cat",
        breed: "British Shorthair",
        description: "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
        age: "2 months",
        inoculations: ["rabies"],
        diseases: ["none"],
        parasites: ["none"],
        num: 7,
    },
];

const hamb_btn = document.querySelector(".hamburger"),
    hamb_menu = document.querySelector(".hamburger_menu_container"),
    overlay = document.querySelector(".overlay"),
    about_the_shelter_link = document.querySelector("#active_nav_link_menu"),
    body = document.querySelector("body");

let opened = false;

hamb_btn.addEventListener("click", openHambMenu);
about_the_shelter_link.addEventListener("click", openHambMenu);
overlay.addEventListener("click", openHambMenu);
document.querySelector("#h").addEventListener("click", openHambMenu);
document.querySelector("#cont").addEventListener("click", openHambMenu);

function openHambMenu(event) {
    if (!opened) {
        opened = true;
        hamb_btn.classList.add("hamburger_vertical_wrap");
        hamb_menu.classList.add("hamb_menu_open");
        overlay.classList.add("overlay_show");
        body.style.overflow = "hidden";
    } else {
        opened = false;
        hamb_btn.classList.remove("hamburger_vertical_wrap");
        hamb_menu.classList.remove("hamb_menu_open");
        overlay.classList.remove("overlay_show");
        body.style.overflow = "";
    }
    event.stopPropagation();
}

/* ------------------------------------------------------------ */

const btn_next = document.querySelector(".forward"),
    btn_prev = document.querySelector(".back"),
    gallery = document.querySelector(".container_for_cards");

let left_arr = [];
let center_arr = [];
let right_arr = [];

let center_block, left_block, right_block;

let desktop_size = window.matchMedia("(min-width:1280px)");
let tablet_size = window.matchMedia("(min-width:768px) and (max-width:1279px)");
let mobile_size = window.matchMedia("(max-width:767px)");

let q = function() {
    if (desktop_size.matches) return 3;
    else if (tablet_size.matches) return 2;
    else return 1;
};

function oneCard(pet_num) {
    const card = document.createElement("div");
    card.innerHTML = `<div class="pet">
  <img src=${pets_json[pet_num].img} class="pet_foto" alt="Pet portrait"></div>
  <p class="pet_name">${pets_json[pet_num].name}</p>
  <button class="white_button">Learn more</button>`;

    card.classList.add("card");

    return card;
}

function drawBlock(arr, blockClass) {
    const block = document.createElement("div");
    block.classList.add(blockClass);
    for (let i = 0; i < arr.length; i++) {
        block.append(oneCard(arr[i]));
    }
    block.addEventListener("click", openModal);
    return block;
}

function createArrayOfCards(array) {
    let n = q();

    for (let i = 0; i < n; i++) {
        let random_pet_num = Math.floor(Math.random() * pets_json.length);
        while (
            array.includes(random_pet_num) ||
            center_arr.includes(random_pet_num)
        ) {
            random_pet_num = Math.floor(Math.random() * pets_json.length);
        }

        array.push(random_pet_num);
    }
    return array;
}

function drawGallery() {
    createArrayOfCards(center_arr);
    createArrayOfCards(left_arr);
    createArrayOfCards(right_arr);
    gallery.innerHTML = "";
    center_block = drawBlock(center_arr, "center_block");
    left_block = drawBlock(left_arr, "left_block");
    right_block = drawBlock(right_arr, "right_block");

    gallery.append(left_block, center_block, right_block);
}

function annulamento() {
    gallery.innerHTML = "";
    left_block.innerHTML = "";
    right_block.innerHTML = "";
    center_block.innerHTML = "";
}

window.addEventListener("load", drawGallery);
window.addEventListener("resize", function() {
    if (center_arr.length === 0) {
        drawGallery();
    } else {
        let n = q();
        if (center_arr.length > n) {
            let len = center_arr.length - n;
            for (let i = 0; i < len; i++) {
                center_arr.pop();
                left_arr.shift();
                right_arr.pop();
                annulamento();
                center_block = drawBlock(center_arr, "center_block");
                left_block = drawBlock(left_arr, "left_block");
                right_block = drawBlock(right_arr, "right_block");

                gallery.append(left_block, center_block, right_block);
            }
        }
        if (center_arr.length < n) {
            let len = n - center_arr.length;
            increaseArr(center_arr, len);
            increaseArr(left_arr, len);
            increaseArr(right_arr, len);
            annulamento();
            center_block = drawBlock(center_arr, "center_block");
            left_block = drawBlock(left_arr, "left_block");
            right_block = drawBlock(right_arr, "right_block");
            gallery.append(left_block, center_block, right_block);
        }
    }
});

function increaseArr(arr, len) {
    for (let i = 0; i < len; i++) {
        let random_pet_num = Math.floor(Math.random() * pets_json.length);
        while (
            arr.includes(random_pet_num) ||
            center_arr.includes(random_pet_num)
        ) {
            random_pet_num = Math.floor(Math.random() * pets_json.length);
        }
        arr.push(random_pet_num);
    }
}

btn_next.addEventListener("click", moveForward);
btn_prev.addEventListener("click", moveBack);

function moveForward(event) {
    gallery.classList.add("slide_forward");
    btn_prev.removeEventListener("click", moveBack);
    btn_next.removeEventListener("click", moveForward);

    setTimeout(function() {
        gallery.classList.remove("slide_forward");
        btn_next.addEventListener("click", moveForward);
        btn_prev.addEventListener("click", moveBack);
        left_block.innerHTML = center_block.innerHTML;
        center_block.innerHTML = right_block.innerHTML;

        left_arr = center_arr;
        center_arr = right_arr;
        right_arr = [];
        right_arr = createArrayOfCards(right_arr);
        right_block.innerHTML = "";
        gallery.removeChild(right_block);
        right_block = drawBlock(right_arr, "right_block");
        gallery.appendChild(right_block);
    }, 1000);
}

function moveBack(event) {
    gallery.classList.add("slide_back");

    btn_prev.removeEventListener("click", moveBack);
    btn_next.removeEventListener("click", moveForward);
    setTimeout(function() {
        gallery.classList.remove("slide_back");
        btn_prev.addEventListener("click", moveBack);
        btn_next.addEventListener("click", moveForward);
        right_block.innerHTML = center_block.innerHTML;
        center_block.innerHTML = left_block.innerHTML;

        right_arr = center_arr;
        center_arr = left_arr;
        left_arr = [];
        left_arr = createArrayOfCards(left_arr);
        left_block.innerHTML = "";
        gallery.removeChild(left_block);
        left_block = drawBlock(left_arr, "left_block");
        gallery.prepend(left_block);
    }, 1000);
}

/* ------------------------------------------------------------ */

const modalWindow = document.querySelector(".modal_container"),
    modal_card = document.querySelector(".modal_card"),
    modal_portrait = document.querySelector(".portrait"),
    btn_close_modal = document.querySelector(".close_modal");

let modal_presentation = document.createElement("div");

function openModal(event) {
    let card = event.path.filter((x) => x.className == "card");
    let name = card[0].outerText.replace("\n\nLearn more", "");
    let pet = pets_json.filter((x) => x.name === name)[0];
    createModal(pet);
}

function createModal(pet) {
    modal_presentation.classList.add("modal_presentation");
    modal_presentation.innerHTML = `<h3 class="name">${pet.name}</h3>
      <h4 class="under_name">${pet.type} - ${pet.breed}</h4>
      <h5 class="modal_description">${pet.description}</h5>
      <ul class="signs">
          <li><span class="li_bold">Age:</span> ${pet.age}</li>
          <li><span class="li_bold">Inoculations:</span> ${pet.inoculations}</li>
          <li><span class="li_bold">Diseases:</span> ${pet.diseases}</li>
          <li><span class="li_bold">Parasites:</span> ${pet.parasites}</li>
      </ul>`;
    modal_card.append(modal_presentation);
    modalWindow.classList.add("modal_opened");
    body.style.overflow = "hidden";
    modal_portrait.style.backgroundImage = `url(${pet.img})`;
    modalWindow.addEventListener("click", function(event) {
        if (event.target.dataset.overlay === "true") {
            closeModalWindow();
        }
    });
    modalWindow.addEventListener("mouseover", function(event) {
        if (event.target.dataset.overlay === "true") {
            btn_close_modal.classList.add("close_modal_hovered");
        }
    });
    modalWindow.addEventListener("mouseout", function(event) {
        if (event.target.dataset.overlay === "true") {
            btn_close_modal.classList.remove("close_modal_hovered");
        }
    });

    btn_close_modal.addEventListener("click", closeModalWindow);
}

function closeModalWindow(event) {
    modalWindow.classList.remove("modal_opened");
    modal_presentation.innerHTML = "";
    body.style.overflow = "";
}