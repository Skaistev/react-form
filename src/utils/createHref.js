
function createHref (title){
   

    const titleToLowerCase = title.toLowerCase();
  
    const Obj = {
                        ą: 'a',
                        č: 'c',
                        ę: 'e',
                        ė: 'e',
                        į: 'i',
                        š: 's',
                        ų: 'u',
                        ū: 'u',
                        ž: 'z',
    }
  
    let href = '';
  
    for (let i = 0; i < titleToLowerCase.length; i++) {
        const a = 97;
        const b = 122;
        const letterLt = Obj[titleToLowerCase[i]];
        if (letterLt) {
            href += letterLt;
        }else if (titleToLowerCase.charCodeAt(i) >= a && titleToLowerCase.charCodeAt(i) <= b) {
                href += titleToLowerCase[i];
            }
        } 
    
  
    return href
  
  }

  export { createHref }