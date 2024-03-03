function getData(sheetName) {
  var data = SpreadsheetApp.getActive().getSheetByName(sheetName).getDataRange().getValues();
  return data;
}

function main() {
  data = getData("Form Responses 1");
  data.shift();
  data.forEach(function (row) {
      sendEmailMessage(row[EMAIL_IDX], row[NAME_IDX]);
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
