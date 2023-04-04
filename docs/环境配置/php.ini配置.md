---
description: 修改PHP配置
keywords:
  - php配置文件
  - php.ini
draft: false
last_update:
    date: 2023-4-3 05:57:27
    author: 慧科云
---

:::caution 注意

php.ini文件位置不固定，每个主机的目录不一样，需要咨询服务商此文件的位置

:::

## `post_max_size`

表单提交最大数值，默认为8M

此项不是限制上传单个文件的大小，而是针对整个表单的提交数据进行限制的，此参数建议要设置比upload_max_filesize大一些

## `upload_max_filesize`

允许上传文件大小的最大值，默认为2M

此参数建议不要超过post_max_size值，因为它受控于post_max_size值（就算upload_max_filesize设置了1G，而post_max_size只设置了8M时，大于8M的文件照样传不上去）

## `max_input_vars`

用来限制提交的表单数量，默认值为 1000

如果你网站栏目太多的话，而且需要配置用户权限的时候会发现无法保存，这时候说明这个值太小了，设置10000一般够用。

## `max_execution_time`

每个PHP页面运行的最大时间值(秒)，默认30秒

## `max_input_time`

每个PHP页面接收数据所需的最大时间，默认60秒

## `memory_limit`

每个PHP页面所需要的最大内存，默认8M

## `allow_url_fopen`

fsockopen，使用QQ登录、微信、微博快捷登录、在线支付、下载远程图片等功能时必须开启allow_url_fopen，设置为 allow_url_fopen = On。

## ZipArchive

zip解压扩展包，不开启就无法使用应用商店
