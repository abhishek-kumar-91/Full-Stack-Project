const cheerio = require("cheerio");
const request = require("request");
const getIssueHtml = require("./issues");

function getRepoPage(fullLink, topic) {
    request(fullLink, cb);

    function cb(err, response, html){
        if(err) {
            console.log(err);
        }else{
            // console.log(html)
            getRepoResult(html)
        }
    }

    function getRepoResult(html){
        let $ = cheerio.load(html);
        let headingsArr = $(".f3.color-fg-muted.text-normal.lh-condensed");
        for(let i = 0; i < 8; i++){
            let twoAnchor = $(headingsArr[i]).find("a");         
            let link = $(twoAnchor[1]).attr("href");
            let fullLink = `https://github.com${link}/issues`;
            let repoName = link.split("/").pop();
           
                getIssueHtml(fullLink, topic, repoName);     
        }
    }
}

module.exports = getRepoPage;