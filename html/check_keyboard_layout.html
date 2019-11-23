<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Check keyboard layout</title>
  </head>
  <body>
    <script type="text/javascript" src="https://gist.githack.com/zurg3/192988f654c39b314f2038be5900f205/raw/lists_lib.js"></script>
    <script type="text/javascript">
      function check_string() {
        var check_string_input = document.getElementById('check_string_input').value;
        var output_string = Array.from(check_string_input);
        var wrong_chars = 0;
        var string_lang = document.getElementsByName('string_lang');

        for (var i = 0; i < string_lang.length; i++) {
          if (string_lang[i].checked) {
            string_lang = string_lang[i].value;
          }
        }

        for (var i = 0; i < check_string_input.length; i++) {
          if (string_lang == 1) {
            for (var j in char_codes_en) {
              if (char_codes_en[j].charCodeAt() == check_string_input[i].charCodeAt()) {
                output_string[i] = '[' + output_string[i] + ']';
                wrong_chars++;
              }
            }
          }
          else if (string_lang == 2) {
            for (var j in char_codes_ru) {
              if (char_codes_ru[j].charCodeAt() == check_string_input[i].charCodeAt()) {
                output_string[i] = '[' + output_string[i] + ']';
                wrong_chars++;
              }
            }
          }
        }

        if (wrong_chars == 0) {
          document.getElementById('output_string').innerText = 'String is correct.';
        }
        else if (wrong_chars == 1) {
          document.getElementById('output_string').innerText = 'Found ' + wrong_chars + ' wrong letter.\n';
        }
        else if (wrong_chars > 1) {
          document.getElementById('output_string').innerText = 'Found ' + wrong_chars + ' wrong letters.\n';
        }

        if (wrong_chars >= 1) {
          output_string = output_string.join('');
          document.getElementById('output_string').innerText = document.getElementById('output_string').innerText + output_string;
        }
      }
    </script>
    <form>
      <h3>Check string</h3>
      <p>
        <input type="radio" name="string_lang" value="1">Check Russian string
        <input type="radio" name="string_lang" value="2">Check English string
      </p>
      <p>
        <label for="check_string_input">Enter the string</label><br>
        <input type="text" id="check_string_input" size="30">
      </p>
      <p><input type="button" value="Check string" onclick="check_string()"></p>
      <p id="output_string"></p>
    </form>
  </body>
</html>
