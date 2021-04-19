class Element {
    constructor(data={}) {
        this.data = data
        this.tagsToIgnore = [
            'innerText',
            'textContent',
            'innerHTML',
        ]
    }

    createElement() {
        const element = document.createElement(this.data.tag)
        if(this.data.children){
            this.data.children.map(child => {
                if(typeof(child)==="object"){
                    element.appendChild(child.createElement())
                }
            })
        }
        if(this.data.events){
        
            for(const[key,value] of Object.entries(this.data.events)){
                if(!this.tagsToIgnore.includes(key)) {
                    element[key] = value;
                }
                else {
                    console.error(key)
                }
            }
        }

        if(this.data.attributes){
            for(let key in this.data.attributes){
                if(!this.tagsToIgnore.includes(key)) {
                    element.setAttribute(key,this.data.attributes[key]);
                }
                else {
                    console.error(key)
                }  
            }
        }
        if(this.data.text){
            // filteredText = filter(this.data.textContent)
            // element.textContent = filteredText
            element.textContent = this.data.text
        }
        else if(this.data.unsafeText){
            element.textContent = this.data.unsafeText
        }
        this.element = element
        return(element)
    }

    updateElement() {
        if(this.newData.events){
        
            for(const[key,value] of Object.entries(this.newData.events)){
                if(!this.tagsToIgnore.includes(key)) {
                    this.element[key] = value;
                }
                else {
                    console.error(key)
                }
            }
        }
        if(this.newData.attributes){
            for(let key in this.newData.attributes){
                if(!this.tagsToIgnore.includes(key)) {
                    this.element.setAttribute(key,this.newData.attributes[key]);
                }
                else {
                    console.error(key)
                }  
            }
        }
        if(this.newData.text){
            // filteredText = filter(this.data.textContent)
            // element.textContent = filteredText
            this.element.textContent = this.newData.text
        }
        else if(this.newData.unsafeText){
            this.element.innerHTML= this.newData.unsafeText
        }
        this.data = {...this.data, ...this.newData, children:this.data.children}
    }

    appendChildren(appendedChildren) {
        for(let i in appendedChildren) {
            this.element.appendChild(appendedChildren[i].element)
        }
        this.data.children = [...this.data.children, ...appendedChildren]
    }

    removeChildren(removedChildren) {
        for(let i in removedChildren) {
            this.element.removeChild(removedChildren[i].element)
        }
        this.data.children = this.data.children.filter(child => !removedChildren.includes(child));
    }

    getAttribute(key) {
        return this.element[key]
    }

    setData(newData) {
        this.newData = newData
        this.updateElement()
    }
}

class App {
    constructor(data={}) {
        this.data = data
    }

    render() {
        let content = this.data.content.createElement()
        
        const rootEl = document.querySelector(this.data.rootElement)
        rootEl.innerHTML = ""
        rootEl.appendChild(content)
    }

    setData(newData) {
        this.data={...this.data, ...newData}
    }
}

const createElement = (data={})=> new Element(data)

// export { Element, App, createElement };