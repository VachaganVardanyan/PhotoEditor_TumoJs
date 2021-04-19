// import { createElement } from Tumo

const createButton = (data)=> {
    const buttonText = createElement({text:data.buttonText})
    const button = createElement({...data,tag:'button',children:[buttonText,...data.children]})

    // buttonText.setData({text:'buttonText'})

    return button
}