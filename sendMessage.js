function sendMessage() {
                    var name = document.getElementById("name").value;
                    var email = document.getElementById("email").value;
                    var number = document.getElementById("number").value;
                    var message = document.getElementById("message").value;
        
                    if (name=== "" || email=== "" || number=== "" || message=== "") {
                        alert("Please fill in all fields before submitting.");
                    } else {
                        alert("Your message is sent. I will reply as soon as possible :)");
                    }

                    document.getElementById("contactForm").reset();
}