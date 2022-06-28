document.addEventListener('DOMContentLoaded', function(){
    // 변수지정
    var projectIn = document.querySelector('.project_in'),
    slideContainer = document.querySelector('.slide-container'),
    slide = document.querySelectorAll('.slide'),
    slideCount = slide.length,
    currentIndex = 0,
    timer = undefined,
    prevBtn = document.getElementById('prev'),
    nextBtn = document.getElementById('next');

    //슬라이드 가로로 배치
    for(var i = 0; i < slideCount; i++){
        slide[i].style.left = i * 100 + '%';
    }

    //슬라이드 이동 함수
    function goToSlide(idx){
        slideContainer.classList.add('animated');
        slideContainer.style.left = -100 * idx + '%';
        currentIndex = idx;
    }

    prevBtn.addEventListener('click', function(){
        if(currentIndex == 0){
            goToSlide(slideCount - 1);
        }else{
            goToSlide(currentIndex - 1);
        }
    });

    nextBtn.addEventListener('click', function(){
        if(currentIndex == slideCount - 1){
            goToSlide(0);
        }else{
            goToSlide(currentIndex + 1)
        }
    });

    function startAutoSlide(){
        timer = setInterval(function(){
                    var nextIdx = (currentIndex + 1) % slideCount;  
                    goToSlide(nextIdx);
                },4000);
    }

    startAutoSlide();
    
    function stopAutoSlide(){
        clearInterval(timer);
    }

    projectIn.addEventListener('mouseenter', function(){
        stopAutoSlide()
    });

    projectIn.addEventListener('mouseleave', function(){
        startAutoSlide();
    });
});


