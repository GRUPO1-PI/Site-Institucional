function logout(event){
    if(confirm('Tem certeza que deseja fazer logout?')){
        window.location.href = './dashboard.html'
    } else{
        event.preventDefault();
    }
}