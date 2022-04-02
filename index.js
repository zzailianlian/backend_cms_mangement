/*
 * @Description: File Description
 * @FilePath: /study/temperMonkey/backend_cms_mangement/index.js
 * @LastEditors: zzz
 * @LastEditTime: 2022-04-02 17:40:22
 */
// ==UserScript==
// @name         cms backend management
// @name:zh-CN   cms内部管理
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  cms内部管理
// @author       zzailianlian
// @match        http://backend.meitun-test.com/index
// @icon         https://www.google.com/s2/favicons?sz=64&domain=meitun-test.com
// @license      MIT
// @grant        GM_setValue
// @grant        GM_getValue
// ==/UserScript==

(function () {
  'use strict';
  const wrapperToolsContainer = $('<div id="wrapperToolsContainer"></div>')
  wrapperToolsContainer.css({
    position: 'fixed',
    top: '200px',
    right: 200,
    padding: '12px',
    background: '#3498db',
    borderRadius: '4px',
    fontSize: '14px',
    zIndex: 999,
    opacity: 0.1,
  });
  wrapperToolsContainer.hover(function () { $(this).css({ opacity: 1 }); }, function () { $(this).css({ opacity: .1 }); })
  const initCMSModule = $('<div>初始化cms页面</div>')
  initCMSModule.css({
    padding: '12px',
    color: 'white',
    background: '#2ecc71',
    borderRadius: '4px',
    fontSize: '14px',
    border: '1px solid #27ae60',
    zIndex: 999,
    marginBottom: '24px',
  });

  const syncConfig = $('<div>同步配置到页面</div>')
  syncConfig.css({
    padding: '12px',
    color: 'white',
    background: '#2ecc71',
    borderRadius: '4px',
    fontSize: '14px',
    border: '1px solid #27ae60',
    zIndex: 999,

  });

  $('body').append(wrapperToolsContainer)
  wrapperToolsContainer.append(initCMSModule).append(syncConfig)

  const CMS_PAGE = 'CMS_PAGE'
  initCMSModule.on('click', () => {
    // 初始化cms管理tab
    $("a:contains('v2.0CMS页面管理')").click()
    // GM_setValue(CMS_PAGE, $('#menubar_tabs').find('h3').last().find('a').attr('id'));
    console.log('---',$("a:contains('v2.0CMS页面管理')").attr('id'))
    $("a:contains('v2.0CMS系统模板')").click()
  })

  syncConfig.on('click', () => {
    // 同步配置模板到页面
    $("input[value='保      存']").click()
    $('#menubar_tabs').find('a:contains("v2.0CMS页面管理")').click()
    $(document.getElementById('mainIframe_tabli_780').contentWindow.document.body).find('tr').find('td:contains("783")').parent().find('button:contains("编辑")').click()
    setTimeout(function () {
      $(document.getElementById('mainIframe_modifyPage783').contentWindow.document.body).find('input[value="下一步"]').last().click()
      setTimeout(function () {
        $(document.getElementById('mainIframe_modifyPage783').contentWindow.document.body).find('input[value="保存"]').last().click()
        setTimeout(function () {
          $(document.getElementById('mainIframe_tabli_780').contentWindow.document.body).find('tr').find('td:contains("783")').parent().find('button:contains("同步线上")').click()
        }, 2000)
      }, 2000);
    }, 2000)
  })



})();