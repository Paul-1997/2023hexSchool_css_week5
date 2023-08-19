const replyToggle = document.querySelectorAll('[data-shown]');
const replyToggleBtn = document.querySelectorAll('.replyToggleBtn');


replyToggleBtn.forEach(x=>{
    x.addEventListener('click',function(e){
        e.preventDefault();
        replyToggle.forEach(el=>{
            const isShown = el.getAttribute('data-shown') === "true" ? true : false;
            el.setAttribute("data-shown",!isShown);
        })
    })
})