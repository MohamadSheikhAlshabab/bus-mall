'use strict';


var images = [

    "bag.jpg",
    "banana.jpg",
    "bathroom.jpg",
    "boots.jpg",
    "breakfast.jpg",
    "bubblegum.jpg",
    "chair.jpg",
    "cthulhu.jpg",
    "dog-duck.jpg",
    "dragon.jpg",
    "pen.jpg",
    "pet-sweep.jpg",
    "scissors.jpg",
    "shark.jpg",
    "sweep.png",
    "tauntaun.jpg",
    "unicorn.jpg",
    "usb.gif",
    "water-can.jpg",
    "wine-glass.jpg",

];

var sectionImg = document.querySelector('#click');
// console.log(sectionImg);
var firstImage = document.querySelector('#firstImage');
// console.log(firstImage);
var secondImage = document.querySelector('#secondImage');
// console.log(secondImage);
var thirdImage = document.querySelector('#thirdImage');
// console.log(thirdImage);
var q = "";
// if (q == "jpg" ||q == "png" ||q == "gif"){
firstImage.src = `img/${images[0]}`;
// console.log(firstImage.src);
secondImage.src = `img/${images[1]}`;
// console.log(secondImage.src);
thirdImage.src = `img/${images[2]}`;
console.log(thirdImage.src);
// }
firstImage.alt = images[0];
secondImage.alt = images[1];
thirdImage.alt = images[2];

firstImage.title = images[0];
secondImage.title = images[1];
thirdImage.title = images[2];



function Select(name) {
    this.name = name;
    this.imagePath = `img/${this.name}`;
    this.clicks = 0;
    this.veiws = 0;
    Select.all.push(this);
    // clicks.all.push(this)

}
Select.all = [];
// var sumClicks=[];

// for (var t = 0; t < images.length; t++) {
//     var numClicks = Select.all[t].clicks;
//     // console.log(Select.all[t].clicks);
//     sumClicks.push(numClicks);
// }


// function afterClicks(event){
//     event.preventDefault();
//     var t =document.getElementById('');
// }




for (var i = 0; i < images.length; i++) {
    new Select(images[i]);

}
var exist = [];
var firstImages, secondImages, thirdImages;

function render() {
firstImages = Math.floor(Math.random(0, Select.all.length - 1) * (Select.all.length - 1) + 1);
secondImages = Math.floor(Math.random(0, Select.all.length - 1) * (Select.all.length - 1) + 1);
thirdImages = Math.floor(Math.random(0, Select.all.length - 1) * (Select.all.length - 1) + 1);


    if (firstImages === secondImages && secondImages === thirdImages && firstImages === thirdImages || firstImages === secondImages && secondImages === thirdImages || firstImages === secondImages || firstImages === thirdImages
        || secondImages === thirdImages) {
        render();
    }
    // console.log(x);
    // console.log(y);
    // console.log(z);

    // firstImages.veiws++;
    // secondImages.veiws++;

    // thirdImages.veiws++;
    while (exist.includes(firstImages)) {
        firstImages = Select.all[Math.floor(Math.random(0, Select.all.length - 1) * (Select.all.length - 1) + 1)];
        
    }
    while (exist.includes(secondImages)) {  
        
        secondImages = Select.all[Math.floor(Math.random(0, Select.all.length - 1) * (Select.all.length - 1) + 1)];
        
    }
    while (exist.includes(thirdImages)) {
        
        thirdImages = Select.all[Math.floor(Math.random(0, Select.all.length - 1) * (Select.all.length - 1) + 1)];
        
        
    }
    exist.push(firstImages);
    exist.push(secondImages);
    exist.push(thirdImages);
    while (exist.length > 2) {
        exist.shift();
    }
    
    
  
    if (firstImages === secondImages && secondImages === thirdImages && firstImages === thirdImages || firstImages === secondImages && secondImages === thirdImages || firstImages === secondImages || firstImages === thirdImages
        || secondImages === thirdImages) {
        // console.log("x =" + x);
        // console.log("y =" + y);
        // console.log("z =" + z);


    } else {
        // while (){
        firstImages = Select.all[Math.floor(Math.random(0, Select.all.length - 1) * (Select.all.length - 1) + 1)];
        // console.log(firstImages);
        secondImages = Select.all[Math.floor(Math.random(0, Select.all.length - 1) * (Select.all.length - 1) + 1)];
        // console.log(secondImages);
        thirdImages = Select.all[Math.floor(Math.random(0, Select.all.length - 1) * (Select.all.length - 1) + 1)];
        // console.log(thirdImages);

        firstImage.setAttribute('src', firstImages.imagePath);
        secondImage.setAttribute('src', secondImages.imagePath);
        thirdImage.setAttribute('src', thirdImages.imagePath);

        firstImage.setAttribute('alt', firstImages.name);
        secondImage.setAttribute('alt', secondImages.name);
        thirdImage.setAttribute('alt', thirdImages.name);

        firstImage.setAttribute('title', firstImages.name);
        secondImage.setAttribute('title', secondImages.name);
        thirdImage.setAttribute('title', thirdImages.name);
        // ]
    }


}


// if (firstImages !== secondImages && secondImages !== thirdImages && firstImages !== thirdImages || firstImages !== secondImages && secondImages !== thirdImages || firstImages !== secondImages || firstImages !== thirdImages
//     || secondImages !== thirdImages) {
    render();
// }





click.addEventListener('click', makeChange);
var totals = 0;

function makeChange(event) {
    event.preventDefault();

    if (totals < 25) {
        // render();
        // firstImages.veiws++;
        // console.log("firstImages.veiws" +firstImages.veiws);

        // secondImages.veiws++;
        // console.log("secondImages.veiws" +secondImages.veiws);

        // thirdImages.veiws++;
        // console.log("thirdImages.veiws" +thirdImages.veiws);

        // console.log(firstImage);
        // firstImages.veiws++;
        // console.log(firstImages);
        // console.log("firstImages.veiws" +firstImages.veiws);
        // console.log("firstImages.clicks" +firstImages.clicks);
        // console.log(firstImages.clicks);

        // console.log(secondImage);
        // secondImages.veiws++;
        // console.log(secondImages);
        // console.log("secondImages.veiws" +secondImages.veiws);
        // console.log("secondImages.clicks" +secondImages.clicks);
        // console.log(secondImages.clicks);

        // console.log(thirdImage);
        // thirdImages.veiws++;
        // console.log(thirdImages);
        // console.log("thirdImages.veiws" +thirdImages.veiws);
        // console.log("thirdImages.clicks" +thirdImages.clicks);
        // console.log(thirdImages.clicks);

        if (event.target.id !== 'click') {
            // console.log("hellllo");
            if (event.target.id === 'firstImage') {

                firstImages.clicks++;
                // firstImages.veiws++;
                // secondImages.veiws++;
                // thirdImages.veiws++;
                // firstImages.veiws++;
                // console.log(firstImage);
                // firstImages.veiws++;
                // console.log(firstImages);
                // console.log("firstImages.veiws" + firstImages.veiws);
                // console.log("firstImages.clicks" + firstImages.clicks);
                // console.log(firstImages.clicks);

            } if (event.target.id === 'secondImage') {
                secondImages.clicks++;
                // firstImages.veiws++;
                // secondImages.veiws++;
                // thirdImages.veiws++;
                // secondImages.veiws++;
                // console.log(secondImage);
                // // secondImages.veiws++;
                // console.log(secondImages);
                // console.log("secondImages.veiws" +secondImages.veiws);
                // console.log("secondImages.clicks" +secondImages.clicks);
                // console.log(secondImages.clicks);
            } if (event.target.id === 'thirdImage') {
                thirdImages.clicks++;
                // firstImages.veiws++;
                // secondImages.veiws++;
                // thirdImages.veiws++;
                // thirdImages.veiws++;
                // console.log(thirdImage);
                // // thirdImages.veiws++;
                // console.log(thirdImages);
                // console.log("thirdImages.veiws" +thirdImages.veiws);
                // console.log("thirdImages.clicks" +thirdImages.clicks);
                // console.log(thirdImages.clicks);
            }
        }
        if (firstImages === secondImages || firstImages === thirdImages || secondImages === thirdImages) {
            // firstImages.clicks++;
            // secondImages.clicks++;
            // thirdImages.clicks++;

            // firstImages.veiws++;
            // secondImages.veiws++;
            // thirdImages.veiws++;
            // console.log("firstImages.veiws" + firstImages.veiws);
            // console.log("firstImages.clicks" + firstImages.clicks);
            // console.log("secondImages.veiws" + secondImages.veiws);
            // console.log("secondImages.clicks" + secondImages.clicks);
            // console.log("thirdImages.veiws" + thirdImages.veiws);
            // console.log("thirdImages.clicks" + thirdImages.clicks);
        }

        firstImages.veiws++;
        secondImages.veiws++;
        thirdImages.veiws++;
        totals++;
        setLi();
        render();



    } else {

        alert("More Than 25 Clicks");
        render2();
        myChart();
        click.removeEventListener('click', makeChange);

    }

}



function render2() {
    var ul1 = document.getElementById('sumrize');

    for (var j = 0; j < Select.all.length; j++) {
        var li1 = document.createElement('li');
        li1.textContent = `${Select.all[j].name.split(".")[0]} had ${Select.all[j].clicks} votes and was shown ${Select.all[j].veiws} times`;
        ul1.appendChild(li1);
    }


}

function setLi(){
    var stringLi =JSON.stringify(Select.all);
    localStorage.setItem("setArray",stringLi);
        
    }
    function getLi(){

       var parseLi = localStorage.getItem("setArray");
        if (parseLi){

            Select.all =JSON.parse(parseLi);
render2();
myChart();
        }
    }
    getLi();




function myChart() {
    var ctx = document.getElementById('myChart');
    var arrayName = [];
    var arrayClicks = [];
    var arrayViews = [];
    for (var t = 0; t < Select.all.length; t++) {
        var arrayNameImg = Select.all[t].name;
        arrayName.push(arrayNameImg);
    }

    for (var p = 0; p < Select.all.length; p++) {
        var arrayClicksImg = Select.all[p].clicks;
        arrayClicks.push(arrayClicksImg);
    }

    for (var z = 0; z < Select.all.length; z++) {
        var arrayViewsImg = Select.all[z].veiws;
        arrayViews.push(arrayViewsImg);
    }

    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: [
                "bag",
                "banana",
                "bathroom",
                "boots",
                "breakfast",
                "bubblegum",
                "chair",
                "cthulhu",
                "dog-duck",
                "dragon",
                "pen",
                "pet-sweep",
                "scissors",
                "shark",
                "sweep",
                "tauntaun",
                "unicorn",
                "usb",
                "water-can",
                "wine-glass",


            ],
            datasets: [{
                label: '# of clicks',
                data: arrayClicks,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(100, 99, 132, 0.2)',
                    'rgba(100, 162, 235, 0.2)',
                    'rgba(100, 206, 86, 0.2)',
                    'rgba(255, 200, 132, 0.2)',
                    'rgba(54, 200, 235, 0.2)',
                    'rgba(255, 200, 86, 0.2)',
                    'rgba(255, 99, 25, 0.2)',
                    'rgba(54, 162, 25, 0.2)',
                    'rgba(255, 206, 25, 0.2)',
                    'rgba(100, 99, 132, 0.2)',
                    'rgba(100, 162, 235, 0.2)',
                    'rgba(100, 206, 86, 0.2)',
                    'rgba(255, 50, 132, 0.2)',
                    'rgba(54, 50, 235, 0.2)',
                    'rgba(255, 50, 86, 0.2)',
                    'rgba(255, 99, 25, 0.2)',
                    'rgba(54, 162, 25, 0.2)'


                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(100, 99, 132, 1)',
                    'rgba(100, 162, 235, 1)',
                    'rgba(100, 206, 86, 1)',
                    'rgba(255, 200, 132, 1)',
                    'rgba(54, 200, 235, 1)',
                    'rgba(255, 200, 86, 1)',
                    'rgba(255, 99, 25, 1)',
                    'rgba(54, 162, 25, 1)',
                    'rgba(255, 206, 25, 1)',
                    'rgba(100, 99, 132, 1)',
                    'rgba(100, 162, 235,1)',
                    'rgba(100, 206, 86, 1)',
                    'rgba(255, 50, 132, 1)',
                    'rgba(54, 50, 235, 1)',
                    'rgba(255, 50, 86, 1)',
                    'rgba(255, 99, 25, 1)',
                    'rgba(54, 162, 25, 1)'


                ],
                borderWidth: 1
            }
                ,
            {
                label: '# of views',
                data: arrayViews,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.1)',
                    'rgba(54, 162, 235, 0.1)',
                    'rgba(255, 206, 86, 0.1)',
                    'rgba(100, 99, 132, 0.1)',
                    'rgba(100, 162, 235, 0.1)',
                    'rgba(100, 206, 86, 0.1)',
                    'rgba(255, 200, 132, 0.1)',
                    'rgba(54, 200, 235, 0.1)',
                    'rgba(255, 200, 86, 0.1)',
                    'rgba(255, 99, 25, 0.1)',
                    'rgba(54, 162, 25, 0.1)',
                    'rgba(255, 206, 25, 0.1)',
                    'rgba(100, 99, 132, 0.1)',
                    'rgba(100, 162, 235, 0.1)',
                    'rgba(100, 206, 86, 0.1)',
                    'rgba(255, 50, 132, 0.1)',
                    'rgba(54, 50, 235, 0.1)',
                    'rgba(255, 50, 86, 0.1)',
                    'rgba(255, 99, 25, 0.1)',
                    'rgba(54, 162, 25, 0.1)'


                ],
                borderColor: [
                    'rgba(255, 99, 132, 0.75)',
                    'rgba(54, 162, 235, 0.75)',
                    'rgba(255, 206, 86, 0.75)',
                    'rgba(100, 99, 132, 0.75)',
                    'rgba(100, 162, 235, 0.75)',
                    'rgba(100, 206, 86, 0.75)',
                    'rgba(255, 200, 132, 0.75)',
                    'rgba(54, 200, 235, 0.75)',
                    'rgba(255, 200, 86, 0.75)',
                    'rgba(255, 99, 25, 0.75)',
                    'rgba(54, 162, 25, 0.75)',
                    'rgba(255, 206, 25, 0.75)',
                    'rgba(100, 99, 132, 0.75)',
                    'rgba(100, 162, 235,0.75)',
                    'rgba(100, 206, 86, 0.75)',
                    'rgba(255, 50, 132, 0.75)',
                    'rgba(54, 50, 235, 0.75)',
                    'rgba(255, 50, 86, 0.75)',
                    'rgba(255, 99, 25, 0.75)',
                    'rgba(54, 162, 25, 0.75)'


                ],
                borderWidth: 1
            }]


        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });
}