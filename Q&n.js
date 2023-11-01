let allPlus = document.querySelectorAll(".plus");
allPlus.forEach(item => {
    item.addEventListener("click",function (eo){
        let content = eo.target.parentElement.parentElement.querySelector(".contents");
        content.classList.toggle("active");
        if(content.classList.contains("active")){
            let heightContent = content.scrollHeight +30;
            content.style.height=`${heightContent}px`;
        }else{
            content.style.height="0";
        }
        item.classList.toggle("hide-plus");
        if(item.classList.contains("hide-plus")){
        item.innerHTML="_";
        item.style.transform="translateY(-15px)"
        }else{
            item.innerHTML="+";
            item.style.transform="translateY(0px)"
        }
    });
});