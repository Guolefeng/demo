var footer = (function($) {

  // 组织代码
  function organizationCode(type) {
     
      var _footer_code = `<div class="copyright" id="copyright">
          <div class="wrap">
            <div class="copy_lf">
              <a href="javascript:;" target="_blank"><img src="./images/logo.png" width="218" height="117"></a>
            </div>
            <div class="copy_cen">
              <h3>爱诗澜婚纱摄影</h3>
              <span>爱诗澜婚纱摄影, slogan</span>
              <span style="margin-top: 20px;">这里填写店面地址</span>
              <p> 联系方式：00000000000&nbsp;&nbsp;&nbsp;&nbsp;E-mail：00@163.com </p>
            </div>
            <div class="copy_rg">
              <img src="./images/qrcode.png" width="135" height="135">
              <p>扫码联系我们</p>
            </div>
          </div>
      </div>`
      return _footer_code;
  }

  

  // 向页面输出
  function render(type) {
      var code = organizationCode(type);
      // 写入页面 - 获取容器
      var container = $(".containers").size() > 0 ? $(".containers") : $("body");
          container.append(code);
      // 加载事件
  }

  return {
      render: render
  };
})(jQuery)