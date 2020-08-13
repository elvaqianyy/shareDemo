
/**
 * @param {number} num  传入数字
 * @param {number} scale  保留末尾多少位
 */
module.exports = function toFixedScale(num,scale) {
  num = +num;
  var num = num.toFixed(scale);
  num = num+'';
  while(num.charAt(num.length-1)==="0" || num.charAt(num.length-1) === '.'){
    num = num.substring(0,num.length-1);
  }
  return num;
}