$(document).ready(function () {
    
  function convert() {
        var num = $('.texty').val();
        var ara = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 6, 5, 4, 1];
        var rom = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'VI', 'V', 'IV', 'I'];
        var final = '';
        for (var i = 0; i < rom.length; i++) {
            while (num >= ara[i]) {
                final += rom[i];
                num -= ara[i];
            }
        }
        $('.texty').val(final);
    }
    
  $('#convert').click(function (){
    convert();
  });
    
});
                
                
