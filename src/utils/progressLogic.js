export const gradientPercent = (page, num) =>{
    let purple;
    let white;
    if(page === 1){
        purple = page/num*50
        white = 100-purple
    }else{
        purple =  page/num*100
        white = 100 -purple
    }

    ;

    return `white ${white}%, purple ${purple}%`

}