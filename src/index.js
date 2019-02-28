module.exports = function check(str, bracketsConfig) {
  let brs = '[][]()(())([)]'; 
  let opening = {
        '[': ']',
        '{': '}',
        '(': ')',
        '<': '>',
      };
  
      let stack = [];
      let ret = '';
      let b = true;
  
      for(let i = 0; i < brs.length; i++){
        let c = brs[i];
  
        if(opening[c]){
          stack.push(c);
        } else {
          if(stack.length === 0){
              b = false;
          }
  
          let br = stack.pop();
  
          c = opening[br];
        }
  
        ret += c;
      }
      if (stack.length > 0){
        b = false;
      }
      return b;
    }
