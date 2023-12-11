const cheerio = require("cheerio");
const request = require("request");
const fs = require("fs");
const path = require("path")
const pdfkit = require("pdfkit")

function getIssueHtml(fullLink, topic, repoName) {
    request(fullLink, cb);

    function cb(err, response, html){
        if(err) {
            console.log(err);
        }else{
            // console.log(html)
            getIssues(html)
        }
    }

    function getIssues(html){
        let $ = cheerio.load(html);
        let issueElement = $(".Link--primary.v-align-middle.no-underline.h4.js-navigation-open.markdown-title");
        let arr = [];

        for(let i = 0; i < issueElement.length; i++){
           let link = $(issueElement[0]).attr("href");
           arr.push(link);
        }

        let folderPath = path.join(__dirname, topic)
        dirCreator(folderPath);
        let filePath = path.join(folderPath, repoName + ".pdf");
        let text = JSON.stringify(arr)
        let pdfDoc = new pdfkit();
        pdfDoc.pipe(fs.createWriteStream(filePath))
        pdfDoc.text(text);
        pdfDoc.end();
       
    }
}


function dirCreator(folderPath){
    if(fs.existsSync(folderPath) == false){
        fs.mkdirSync(folderPath)
    }
}
module.exports = getIssueHtml;