function validEmail(str) {
  //your JS code here.
	 if (!str) return false;

  // Yeh regex check karega ki email format sahi hai ya nahi
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  // Regex ke basis par true ya false return karo
  return emailRegex.test(str);
	}
	
}

// Do not change the code below.
const str = prompt("Enter an email address.");
alert(validEmail(str));
