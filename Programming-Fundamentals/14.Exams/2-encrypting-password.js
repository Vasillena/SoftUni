function encryptingPassword(input) {
  let pattern =
    /(.+)([>])(?<numbers>\d{3})[|](?<lowerCase>[a-z]{3})[|](?<upperCase>[A-Z]{3})[|](?<symbols>.+[^<>])([<])\1/g;
  let count = input.shift();
  let array = [];

  let currentPass = input.shift();

  for (i = 0; i < count; i++) {
    let match = currentPass.match(pattern);
    if (match) {
      let exec = pattern.exec(currentPass);

      let firstGroup = exec.groups["numbers"];
      let secondGroup = exec.groups["lowerCase"];
      let thirdGroup = exec.groups["upperCase"];
      let fourthGroup = exec.groups["symbols"];

      array.push(firstGroup);
      array.push(secondGroup);
      array.push(thirdGroup);
      array.push(fourthGroup);

      array = array.join("");

      console.log(`Password: ${array}`);
    } else {
      console.log("Try another password!");
    }
    currentPass = input.shift();
    array = [];
  }
}
encryptingPassword(["3",
"##>00|no|NO|!!!?<###",
"##>123|yes|YES|!!!<##",
"$$<111|noo|NOPE|<<>$$"]);
encryptingPassword([
  "5",
  "aa>111|mqu|BAU|mqu<aa",
  "()>111!aaa!AAA!^&*<()",
  "o>088|abc|AAA|***<o",
  "asd>asd|asd|ASD|asd<asd",
  "*>088|zzzz|ZzZ|123<*",
]);
