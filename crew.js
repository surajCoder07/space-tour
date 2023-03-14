let slides = document.querySelectorAll(".slide");
let counter =0;
slides.forEach((slide,index)=>{
    slide.style.left =`${index *100}%`
})




    setInterval(() => {
        counter++;
        if(counter>slides.length-1 || counter<0){
            counter=0;
        }
        slider()
    }, 5000);




    const next =()=>{
        
        counter++;
        if(counter>slides.length-1){
            counter=0;
        }
        slider();
    }
    const previous =()=>{
        counter--;
        if(counter<0){
            counter=slides.length-1;
        }
        slider();
    }






    const slider =()=>{
        slides.forEach(slide=>{
            slide.style.transform =`translateX(-${counter*100}%)`;
        })
    }