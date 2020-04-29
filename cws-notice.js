var html = '<div class="cws-notice" style="background-color: #004020; padding: 15px; display: inline-block; width: 100%; font-family: Arial, Helvetica, sans-serif;">';
html += '<p style="text-align: center; color: white; margin: 0 0 5px 0; font-size: 20px;"><a style="color: white; text-decoration: none;" href="https://sacoronavirus.co.za/" target="_blank"><img style="width: 100%; max-width: 450px;" src="https://counterweight15.github.io/covid-19/sacoronavirus2.png" alt"Visit for more information" /></a></p>';
html += '<p style="text-align: center; color: white; margin: 0; font-size: 11px; line-height: 16px;">Enforced by the Department of Health South Africa. Get this notice for your site at <a style="color: white; text-decoration: underline;" href="https://web.counterweight.co.za/covid-19/" target="_blank">CWS</a></p>'
html += '</div>';

const div = document.createElement("div");
div.innerHTML = html;
//document.body.insertBefore(div, document.body.firstChild);
document.documentElement.insertBefore(div, document.body.nextSibling);
