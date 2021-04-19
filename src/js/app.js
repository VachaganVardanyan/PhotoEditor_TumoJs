
// import content from content

const app = new App({rootElement:"#tumo", content:content,divCanvas}).render()

const cnv = document.getElementById("canvas");
const ctx = cnv.getContext("2d");

const reader = new FileReader()
const img1 = new Image();

const uploadImage = (e) => {
  
  reader.onload = () => {
    img1.onload = () =>{
      cnv.width = img1.width;
      cnv.height = img1.height;
      ctx.drawImage(img1, 0, 0, img1.width, img1.height, 0, 0,cnv.width, cnv.height);
    }
    const img2 = document.getElementById("img")
    img1.src = reader.result
    img2.src = img1.src
    

  }
reader.readAsDataURL(e.target.files[0])
}

const imageLoader = document.getElementById("uploader")
imageLoader.addEventListener("change",uploadImage)

function addBrightness() {
  if(img1.src != ""){
  Caman("#canvas", img, function () {
    this.brightness(5).render();
  });
}
}
function rmBrightness() {
  if(img1.src != ""){
  Caman("#canvas", img, function () {
    this.brightness(-5).render();
  });
}
}
function addContrast() {
  if(img1.src != ""){
  Caman("#canvas", img, function () {
    this.contrast(+5).render();
  });
}
}
function rmContrast() {
  if(img1.src != ""){
  Caman("#canvas", img, function () {
    this.contrast(-5).render();
  });
}
}
function addVintage() {
  if(img1.src != ""){
  Caman("#canvas", img, function () {
    this.vintage().render();
  });
}
}
function addNostalgia() {
  if(img1.src != ""){
  Caman("#canvas", img, function () {
    this.nostalgia().render();
  });
}
}
function dataURLtoFile(dataurl, filename) {
 
  var arr = dataurl.split(','),
      mime = arr[0].match(/:(.*?);/)[1],
      bstr = atob(arr[1]), 
      n = bstr.length, 
      u8arr = new Uint8Array(n);
      
  while(n--){
      u8arr[n] = bstr.charCodeAt(n);
  }
  
  return new File([u8arr], filename, {type:mime});
}

function downloadCanvas(link, canvasId, filename) {
  link.href = document.getElementById(canvasId).toDataURL();
  link.download = filename;
}

function download() {
  if(img1.src != ""){
    console.log('asdasd')
    Caman('#canvas', function () {
      console.log('download')
      var base64 = this.toBase64()
      var file = dataURLtoFile(base64,'hello.png');
      downloadCanvas(document.getElementById('download'), 'canvas', 'test.png')

    });
  }
}


function rmFilters() {
  if(img1.src != ""){
  Caman("#canvas", img, function () {
    this.revert();
  });
}
}
// img1.crossOrigin = "anonymous";
// img1.onload = function () {
//   cnv.width = img1.width;
//   cnv.height = img1.height;
//   ctx.drawImage(img1, 0, 0, img1.width, img1.height, 0, 0,cnv.width, cnv.height);
//   originalImageData = ctx.canvas.toDataURL();
// }
// const mainImg = document.querySelector("#img")
// if(mainImg.src == "#"){
//   console.log("nichego")
// }
// img1.src = mainImg.src
// console.log(mainImg)
