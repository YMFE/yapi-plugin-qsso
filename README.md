# yapi-plugin-qsso 

第三方sso登录插件，配置方法如下：   

第一步： 在生成的配置文件config.json中加入如下配置：  

```
"plugins": [
    {
      "name": "qsso",
      "options": {
        "type": "sso",
        "loginUrl": "http://sso.example.com/service/verifytoken.php?token=",
        "emailPostfix": "@163.com",
        "AUTH_SERVER" : "https://sso.example.com/login.php"
      }
    }
  ]
```   
这里面的配置项含义如下：  

- `type` 登陆类型，目前只支持sso登陆  
- `loginUrl` 服务端在获取token之后，可以通过这个url来获取用户的详细信息
- `emailPostfix` 登陆邮箱后缀
- `AUTH_SERVER` 点击登陆按钮式需要跳转的url，用户通过该页面登录以后会向服务器发送一个token


第二步：在config.json 这层目录下运行 ```yapi plugin --name yapi-plugin-qsso```   重新下载插件  

第三步： 重启服务器

