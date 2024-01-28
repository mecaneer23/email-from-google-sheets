function getData(sheetName) {
  var data = SpreadsheetApp.getActive().getSheetByName(sheetName).getDataRange().getValues();
  return data;
}

function main() {
  data = getData("Form Responses 1");
  data.shift();
  data.forEach(function (row) {
      var email = row[7];
      var name = row[11];
      sendEmailMessage(email, name);
  });
}

function sendEmailMessage(email, name) {
  var message = {
    to: email,
    subject: "",  // subject of email
    htmlBody: HtmlService.createHtmlOutputFromFile("body").getContent().replace("{{{ NAME GOES HERE }}}", name),
    name: "",  // sender's name
    replyTo: ""  // email
  }
  MailApp.sendEmail(message);
}