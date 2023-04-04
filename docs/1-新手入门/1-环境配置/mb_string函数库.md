---
description: 开启php的mb_string函数库
keywords:
  - php配置
  - php函数
draft: false
last_update:
    date: 2023-4-3 22:29:53
    author: 慧科云
---

1. 确保你的 Windows/system32 下有`php_mbstring.dll`这个文件，没有就从你Php安装目录extensions里拷入Windows/system32里面。
2. 在windows目录下找到php.ini打开编辑，搜索`mbstring.dll`，找到`;extension=php_mbstring.dll`
3. 然后将前面的;号去掉，打开对组件的支持
4. 重启PHP服务
5. 完成
