let sliderImages = document.querySelectorAll('.slide'),
            arrowRight = document.querySelector('#arrow-right'),
            arrowLeft = document.querySelector('#arrow-left'),
            sliderDot1 = document.querySelector('#dot1'),
            sliderDot2 = document.querySelector('#dot2'),
            sliderDot3 = document.querySelector('#dot3'),
            current = 0;
            //clear all images
        function reset(){
            for(let i=0; i<sliderImages.length;i++){
                sliderImages[i].style.display = 'none';
            }
        }
            //init slider
        function startSlide(){
            reset();
            sliderImages[0].style.display='block';
        }
            //show prev
        function slideLeft(){
            reset();
            sliderImages[current-1].style.display='block';
            current--;
        }
        //show next
        function slideRight(){
            reset();
            sliderImages[current+1].style.display='block';
            current++;
        }
        function FirstSlide(){
            reset();
            sliderImages[0].style.display='block';
        }
               function SecondSlide(){
            reset();
            sliderImages[1].style.display='block';
        }
               function ThirdSlide(){
            reset();
            sliderImages[2].style.display='block';
        }
       
       

        //Left arrow click(event listener)
        arrowLeft.addEventListener('click', function(){
            if(current===0){
                current=sliderImages.length;
            }
            slideLeft();
        });
            //Right arrow event listener
        arrowRight.addEventListener('click', function(){
            if(current===sliderImages.length-1){
                current=-1;
            }
            slideRight();
        });

        sliderDot1.addEventListener('click', function(){
            FirstSlide();
        });

                sliderDot2.addEventListener('click', function(){
            SecondSlide();
        });
                sliderDot3.addEventListener('click', function(){
            ThirdSlide();
        });

       

      
        
        startSlide();