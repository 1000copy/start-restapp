这是一个RESTful app的demo，目的是使用代码来展示一个正经的restful app应该提供怎样的api。

## ready


	$ npm i
	$ node index.js


##公开的api

1. GET      host.com/user/:id   查看id指定用户
2. POST     host.com/user       创建用户
3. PUT 	    host.com/user/:id   更新id指定的用户
3. DELETE 	host.com/user/:id   删除id指定的用户
5. GET      host.com/users      查看用户列表 

## tools

使用Postman（chrome store app)可以为POST、PUT、DELETE 提交数据。当然GET也是不在话下。

## 总结

express.js 框架本身就是支持RESTful app的。用它编程序，差不多就是想什么想什么了。可以看代码理解我的意思。