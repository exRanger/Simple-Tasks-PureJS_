import {pictures} from './pictures.js' // Array of links ["data:image...", "data:image..."]

class Slider{
    constructor(slide, right, left){
        this.slide = slide
        this.left = left
        this.right = right
        this.pos = 0;
        this.slide.cssText = `
        background: url(${pictures[this.pos]}) no-repeat
        `   
        // listeners
        this.left.addEventListener('click', this.onSlide)
        this.right.addEventListener('click', this.onSlide)
        console.log(this.pos)
    }
    
     onSlide = (e) => {
             
            switch(e.target){
                case this.left: 
                if(this.pos <= 0) { 
                    return
                }
                this.pos-- 
                this.slide.cssText = `
                background: url(${pictures[this.pos]}) no-repeat
                `
                break
                case this.right: 
                if(this.pos >= pictures.length-1){
                    return
                }
                this.pos++;
                 
                this.slide.cssText = `
                background: url(${pictures[this.pos]}) no-repeat
                `
                break
            }              
    }
}

new Slider(
    document.body.querySelector('.slider__sliding-area').style,
    document.body.querySelector('.right-arrow'),
    document.body.querySelector('.left-arrow')
)



