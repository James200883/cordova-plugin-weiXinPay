var exec = require('cordova/exec');

var weiXinPay = {
  payment: function(json, successFn, failureFn) {
    exec(successFn, failureFn, 'WeixinPay', 'payment', [json]);
  }
};

module.exports = weiXinPay;
