const firebaseConfig = {
    apiKey: "AIzaSyDkYDwfnQ0Nq14ZnBD3UTpyThK6yYSqJEw",
    authDomain: "messages-d8fe3.firebaseapp.com",
    databaseURL: "https://messages-d8fe3-default-rtdb.firebaseio.com",
    projectId: "messages-d8fe3",
    storageBucket: "messages-d8fe3.appspot.com",
    messagingSenderId: "217855790571",
    appId: "1:217855790571:web:dccd108c939835d8879dae"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var db = firebase.database().ref();


$('.messaged').click(function () {
    var senderemail = $('.senderemail').val();
    var sendername = $('.sendername').val();
    var sendersubject = $('.sendersubject').val();
    var sendermessage = $('textarea').val();

    db.push({
            email: senderemail,
            name: sendername,
            subject: sendersubject,
            message: sendermessage,
        }
    );
   
});
