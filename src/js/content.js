// import { Element, App, createElement } from Tumo
// import { Button, Span } from Elements

const span = createSpan({textContent:"Just Span"})
const button = createButton({
    buttonText:"button",
    attributes:{
        id:"buttonID",
    },
    events:{
        //onclick:()=>span.setData({text:'Span Text Changed By Button'})
    },
    children:[]
})
const input = createElement({
    tag:"input",
    attributes:{
        id:"uploader",
        type:"file"
    },
    events:{
        //oninput:()=>span.setData({unsafeText:input.getAttribute("value")})
    },
    children:[]
})
const label = createElement({
    tag:"label",
    text:"Select file:",
    attributes:{
        for:"uploader"
    }
})
const img = createElement({
    tag:"img",
    attributes:{
        id:"img",
        src:"https://i.pinimg.com/originals/26/b2/50/26b250a738ea4abc7a5af4d42ad93af0.jpg",
        
    }
})
const canvas = createElement({
    tag:"canvas",
    attributes:{
        id:"canvas"
    }
})
const divImage = createElement({
    tag:"div",
    attributes:{
        class:"image"
    },
    children:[img]
})
const divCanvas = createElement({
    tag:"div",
    attributes:{
        class:"canvas"
    },
    children:[canvas]
})
const h2 = createElement({
    tag:"h2",
    text:"Filters"

})
const h4 = createElement({
    tag:"h4",
    text:"Brightness"

})
const buttonAb = createButton({
    text:"+",
    events:{
        onclick:()=>addBrightness()
    },
    children:[]
})
const buttonRb = createButton({
    text:"-",
    events:{
        onclick:()=>rmBrightness()
    },
    children:[]
})
const hr = createElement({
    tag:"hr"
})
const br = createElement({
    tag:"br"
})
const h4c = createElement({
    tag:"h4",
    text:"Contrast"

})
const buttonAc = createButton({
    text:"+",
    events:{
        onclick:()=>addContrast()
    },
    children:[]
})
const buttonRc = createButton({
    text:"-",
    events:{
        onclick:()=>rmContrast()
    },
    children:[]
})
const h4e = createElement({
    tag:"h4",
    text:"Effects"

})
const buttonAv = createButton({
    text:"Vintage",
    events:{
        onclick:()=>addVintage()
    },
    children:[]
})
const buttonAn = createButton({
    text:"Nostalgia",
    events:{
        onclick:()=>addNostalgia()
    },
    children:[]
})
//
const buttonD = createElement({
    tag:"a",
    text:"Download Image",
    attributes:{
        id:"download"
    },
    events:{
        onclick:() => download()
    },
    children:[]
})
const buttonR = createButton({
    text:"Remove Filters",
    events:{
        onclick:()=>rmFilters()
    },
    children:[]
})
const divSettings = createElement({
    tag:"div",
    attributes:{
        class:"settings"
    },
    children:[label,input,h2,h4,buttonAb,buttonRb,hr,h4c,buttonAc,buttonRc,hr,h4e,buttonAv,buttonAn,hr,buttonD,buttonR]
})
const content = createElement({
    tag:"div",
    attributes:{
        class:"content"
    },
    children:[divImage,divCanvas,divSettings]
})

// window.addEventListener('load', () => {
//     document.querySelector('input[type="file"]').addEventListener('change', function() {
//         if (this.files && this.files[0]) {
//             var img = document.querySelector('#img');
//             img.onload = () => {
//                 URL.revokeObjectURL(img.src);  
//             }
  
//             img.src = URL.createObjectURL(this.files[0]); 
//         }
//     });
//   });
   

// const content = createElement({tag:'div',children:[input,img]})
// const content = createElement({children:[div]})

// export default content;