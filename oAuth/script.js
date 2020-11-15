const button = document.querySelector('button');
const client_id = '7663475';
const redirect_uri = 'http://localhost/oAuth/';
const display = 'page';
const response_type = 'code';
const client_secret = '4NznFDID7MkPNdEq8VB5';
const v = '5.52';

button.addEventListener('click',() =>{
    location.href = `https://oauth.vk.com/authorize?client_id=${client_id}&display=${display}&redirect_uri=${redirect_uri}&response_type=${response_type}`;
})
if (location.search.split('=')[0] === '?code'){
    let code = location.search.split('=')[1];
    xhr = (url,callBack) => {
        let xhr = new XMLHttpRequest();
        xhr.open("GET", url);
        xhr.onreadystatechange = () => {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    callBack(xhr.responseText);
                }
            }
        };
        xhr.send();
    }
   xhr("getContent.php?client_id="+client_id+'&client_secret='+client_secret+'&redirect_uri='+redirect_uri+'&code='+code,(data) => {
       let accessToken = data.split(' ')[0];
       let expiresIn = data.split(' ')[1];
       let userID = data.split(' ')[2];
       let fields = 'first_name,last_name';

       xhr('getRequest.php?uids='+userID+'&fields='+fields+'&access_token='+accessToken+'&v='+v, (data) =>{
           let div = document.createElement('div');
           div.textContent = data;
           document.body.append(div);
       })
    });

}
