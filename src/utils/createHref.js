
function createHref (title){
   
    for ( const letter of title){
        let href = '';
        if(letter === 'ą'){
            letter === 'a'
        }
        if(letter === 'ę'||letter === 'ė'){
            letter === 'e'
        }
        if(letter === 'č' ){
            letter === 'c'
        }
        if(letter === 'į' ){
            letter === 'i'
        }
        if(letter === 'š' ){
            letter === 's'
        }
        if(letter === 'ų' ||letter === 'ū' ){
            letter === 'u'
        }
        if(letter === 'ž' ){
            letter === 'z'
        }
        
         href += letter    
             
    }
    return href
}

export {createHref}