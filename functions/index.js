const functions = require('firebase-functions');
var admin = require("firebase-admin");
admin.initializeApp();

exports.checkuser = functions.https.onCall((data, context) => {
if (data.phone){
   console.log(data.phone);
  admin.auth().getUserByPhoneNumber(data.phone)
  .then(function(userRecord) {
    // See the UserRecord reference doc for the contents of userRecord.
    console.log(userRecord.toJSON());
    return 1;
    })
  .catch(function(error) {
    console.log('Error fetching user data:', error);
    return 2;
  });

}else{
  console.log('errror in server functions')
  return 'errror in server functions';
}


});

