console.log("File atteched");

const inputs=document.querySelectorAll('.controls input');

function handleEvent(){
    // console.log(this.dataset)
    let suffix=this.dataset.sizing||''  //In case of color it will be ''
    document.documentElement.style.setProperty(`--${this.name}`,this.value+suffix);
}

inputs.forEach(input =>input.addEventListener('change',handleEvent))    
 
inputs.forEach(input =>input.addEventListener('mousemove',handleEvent))    