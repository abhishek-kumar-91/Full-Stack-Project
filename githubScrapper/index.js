let url = "https://github.com/topics";

const cheerio = require("cheerio");
const request = require("request");
const getRepoPage = require("./repoPage");


request(url, cb);

function cb (err, res, html) {
    if(err) {
        console.log( err);
    }else{
        getTopicLinks(html)
    }
}

function getTopicLinks(html){
    let $ = cheerio.load(html);
    let linkElement = $(".no-underline.d-flex.flex-column.flex-justify-center");
    for(let i = 0; i < linkElement.length; i++){
        let href = $(linkElement[i]).attr("href");
        let topic = href.split("/").pop();
        let fullLink = `https://github.com/${href}`;
        
        getRepoPage(fullLink, topic);
    }
}