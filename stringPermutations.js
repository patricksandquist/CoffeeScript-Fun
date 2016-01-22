// Generated by CoffeeScript 1.10.0

/*
This is a small example of how CoffeeScript may be used to solve a problem I
have previously worked on in Javascript. The problem is as follows:

Generate all permutations of a given string.
 */

(function() {
  var permutations;

  permutations = function(str) {
    var i, j, k, len, letter, lower_perms, output, perm, ref;
    if (str.length < 2) {
      return [str];
    }
    letter = str[0];
    lower_perms = permutations(str.slice(1));
    output = [];
    for (j = 0, len = lower_perms.length; j < len; j++) {
      perm = lower_perms[j];
      for (i = k = 0, ref = perm.length; 0 <= ref ? k <= ref : k >= ref; i = 0 <= ref ? ++k : --k) {
        output.push(perm.slice(0, i) + letter + perm.slice(i));
      }
    }
    return output;
  };

  console.log(permutations("test"));


  /*
  For reference, here is the original Javascript:
  
  var permutations = function (str) {
    if (str.length < 2) {
      return [str];
    }
  
    var letter = str[0];
    var lower_perms = permutations(str.slice(1));
    var output = [];
  
    lower_perms.forEach(function (perm) {
      for (var i = 0; i <= perm.length; i++) {
        output.push(perm.slice(0, i) + letter + perm.slice(i));
      }
    });
  
    return output;
  };
   */

}).call(this);