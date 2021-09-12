
$(document).ready(function(){
    let linkName;
    $('.services-tabs-content li').first().css('display', 'flex')
    $('.services-tabs__title').click(function(){
        $('.services-tabs__title.tab-active').removeClass('tab-active');
        $(this).addClass('tab-active');
        linkName = $(this).attr("data-tab-switch");
        console.log(linkName)
        $('.services-tabs-content li').css('display', 'none');
        $('#'+linkName).css('display', 'flex ');
    })
    
})

fetch('pictures.json')
  .then(response => response.json())
  .then(json => {
   
    const links = Object.values(json).filter(items => items.url)
    console.log(typeof links)
  
  })
  .catch(error => console.log(error));




















/**
 * IGNORE
 */

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
