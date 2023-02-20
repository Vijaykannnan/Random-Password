function repeat() {
  let words = "zxcvbnmlkjhgfdsaqwertyuiop1234567890!@#$%^&*./";

  let userValue = document.querySelector("input").value;

  function generate(val) {
    let password = "";
    //conform ethu kudu yanah ex.2 val pass pantrom athu 2 random value kodukum aprom thirupi 1st thantha 2 value kuda next vera 2 value yum add pannanum so password empty kodutha 1st loop run ana aprom next ulla varum ,varum pothu pass empty so new 2 value produce pannum
    for (let i = 0; i < val; i++) {
      password += words.charAt(Math.floor(Math.random() * words.length));
    }

    return password;
    //   console.log(password);
  }
  generate(userValue);

  document.querySelector("h1").innerHTML = generate(userValue);
}
