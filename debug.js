const tabs = document.querySelector(".tabs");
const workButton = document.getElementById('work__btn')
const galleryButton = document.getElementById('gallery__btn')
const workImgContainer = document.querySelector(".work-tabs-img__container");
let linkName;
$(".services-tabs-content li").first().css("display", "flex");
$(".services-tabs__title").click(function () {
  $(".services-tabs__title.tab-active").removeClass("tab-active");
  $(this).addClass("tab-active");
  linkName = $(this).attr("data-tab-switch");
  console.log(linkName);
  $(".services-tabs-content li").css("display", "none");
  $("#" + linkName).css("display", "flex ");
});

// new work

fetch("pictures.json")
  .then((response) => response.json())
  .then((data) => {
    let links = Object.values(data.images);
    //function to populate work image container with images
    const imageBox = (links, imgItems) => {
      if (document.contains(imgItems)) {
        //console.log('works')
        document.querySelectorAll(".imgStuff").forEach((e) => e.remove());
      }
      links.forEach((element) => {
        //console.log(element)
        let image = document.createElement("img");
        image.setAttribute("src", element);
        image.className += "imgStuff";
        workImgContainer.appendChild(image);
      });
    };
    const tabSwitcher = (links, target) => {
      let imgItems = document.querySelector(".imgStuff");
      let linkTab = target.getAttribute("data-work-tab");

      if (linkTab == "all") {
        //console.log('alll')
        let linkArr = [];
        links.map((item) => item);
        const ellinks = [...links];
        let currentItems = 0;
        for (let i = currentItems; i < currentItems + 12; i++) {
          linkArr.push(ellinks[i].url);
        }
        imageBox(linkArr, imgItems);
        workButton.style.display ='initial'
      } else {
        let filteredLinks = links
          .filter((items) => items.category == linkTab)
          .map((item) => item.url);
        imageBox(filteredLinks, imgItems);
        workButton.style.display ='none'
      }
    };

    // clicking a button targets one of the tabs
    tabs.onclick = (event) => {
      let target = event.target;
      if (target.className != "tabs__title") return;
      tabSwitcher(links, target);
    };

    let defArr = [];
    let alldefault = [...links.map((item) => item)];
    let currentItems = 0;
    for (let i = currentItems; i < currentItems + 12; i++) {
      defArr.push(alldefault[i].url);
    }
    currentItems += defArr.length
    
    defArr.forEach((element) => {
      //console.log(element);
      let image = document.createElement("img");
      image.setAttribute("src", element);
      image.className += "imgStuff";
      workImgContainer.appendChild(image);
    });
    workButton.onclick = (event) => {
      let newdef = [];
      for (let i = currentItems; i < currentItems + 12; i++) {
          newdef.push(alldefault[i].url)

        
        console.log(currentItems)
      }
      newdef.forEach(element => {
        let image = document.createElement("img");
        image.setAttribute("src", element);
        image.className += "imgStuff";
        workImgContainer.appendChild(image);
      });
      currentItems += newdef.length
      if(currentItems >= 24){
        event.target.style.display = 'none'
        currentItems = 12
      }
      //console.log(newdef);
    }
    galleryButton.onclick = (event) => {
      let galleryItems = 8;
      const galleryContainer = document.querySelector('.gallery__img-container')
      const elementList = [...document.querySelectorAll('.gallery .gallery__item')]
      for (let i = galleryItems; i< galleryItems + 4; i++){
        if (elementList[i]){
          galleryContainer.style.height = '1500px'
          elementList[i].style.display ='initial'
        }
      }
      galleryItems += 4;

      if (galleryItems >= elementList.length){
        event.target.style.display = 'none'
      }
    }

  })
  .catch((error) => console.log(error));



/**
 * IGNORE
 */

//  let linkArr =[];
//  links = Object.values(data.images).map(item => item)
//  const ellinks = [...links]
//  let currentItems = 12;
//  for (let i = currentItems; i < currentItems + 12; i++) {
//    linkArr.push(ellinks[i].url)
//  }
//  console.log(linkArr)

//console.log(json)
//console.log(Object.values(json).filter(items => items.url));
//<img src="../Step Project Ham Pictures/Step Project Ham/graphic design/graphic-design1.jpg" alt="">
//console.log(Object.values(images).filter(image => image.category == "wordpress"));

// $.getJSON("pictures.json", function(json) {
//   let imagelist ='';
//   $.each(json.images, function () {
//     imagelist += `<img src= "${this.url}">`;
//     console.log(this.url)
//   })
//   $(".work-tabs-img__container").append(imagelist)

//   console.log(json.images); // this will show the info it in firebug console
// });

// const images = {
//   "1": {
//     "name": "",
//     "category": "webDev",
//     "url": "./Step Project Ham Pictures/Step Project Ham/graphic design/graphic-design1.jpg"
//   },

//   "2": {
//     "name": "",
//     "category": "graphics",
//     "url": "./Step Project Ham Pictures/Step Project Ham/graphic design/graphic-design1.jpg"
//   },

//   "3": {
//     "name": "",
//     "category": "news",
//     "url": "./Step Project Ham Pictures/Step Project Ham/graphic design/graphic-design1.jpg"
//   },

//   "4": {
//     "name": "",
//     "category": "wordpress",
//     "url": "./Step Project Ham Pictures/Step Project Ham/graphic design/graphic-design1.jpg"
//   }
// };
