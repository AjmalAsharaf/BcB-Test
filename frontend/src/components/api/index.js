export const isAuthenticated = ()=>{
    if(typeof window =='undefined'){
        return false
    }
    if(localStorage.getItem('jwt')){
        return true
    }
    else{
        return false
    }
}