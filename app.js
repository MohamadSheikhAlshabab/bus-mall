// var click = document.getElementById('click');
// click.addEventListener('click', makeChange);
// var counter = 0;

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

}





Select.all = [];




for (var i = 0; i < images.length; i++) {
    new Select(images[i]);

}

var firstImages, secondImages, thirdImages;

function render() {

    var x = Math.floor(Math.random(0, Select.all.length - 1) * (Select.all.length - 1) + 1);
    var y = Math.floor(Math.random(0, Select.all.length - 1) * (Select.all.length - 1) + 1);
    var z = Math.floor(Math.random(0, Select.all.length - 1) * (Select.all.length - 1) + 1);
    console.log(x);
    console.log(y);
    console.log(z);

    

    if (x === y &&  z) {
        if (y === z &&  x) {
            if (z == y && x) {
                console.log("here will be same images");

            }
        }
    }
    else{
        
        firstImages = Select.all[x];
        // console.log(firstImages);
        secondImages = Select.all[y];
        // console.log(secondImages);
        thirdImages = Select.all[z];
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
    }


}
render();




click.addEventListener('click', makeChange);
var totals = 0;

function makeChange(event) {
    // render();
    if (totals < 25) {

        if (event.target.id === 'click') {
            if (event.target.id === 'firstImage') {
                firstImages.click++;
                firstImages.veiws++;
                // console.log(firstImage);
                // console.log(firstImages);

            } else if (event.target.id === 'secondImage') {
                secondImages.clicks++;
                secondImages.veiws++;
                // console.log(secondImage);
                // console.log(secondImage);
            } else if (event.target.id === 'thirdImage') {
                thirdImages.clicks++;
                thirdImages.veiws++;
                // console.log(thirdImage);
                // console.log(thirdImages);
                // console.log(thirdImages.veiws);
                // console.log(thirdImages.clicks);
            }
        }

        // firstImages.veiws++;
        // secondImages.veiws++;
        // thirdImages.veiws++;
        totals++;
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
        li1.textContent = `${Select.all[j].name} had ${Select.all[j].clicks} votes and was shown ${Select.all[j].veiws} times`;
        ul1.appendChild(li1);
    }


}

function myChart() {
    var ctx = document.getElementById('myChart');
    // var t =0;
    // for (var o=0 ; o <images.all.length;o++){
    //     t =

    // }
    var myChart = new Chart(ctx, {
        type: 'pie',
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
                label: '# of Votes',
                data: ["1" ,"2","3"],
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