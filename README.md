# -
高级软工选课系统
### 技术栈

**客户端** ：HTML5、CSS3、Sass、ES6(7|8)、Webpack4、Vue CLI 3、Vue.JS2.6.10、Vuex3.0.1、Vue Router3.1.3、Axios0.19.0   

**代理工具**： proxy 

**UI框架选型** ：View UI 

**服务端** ：Node.js（express ）

**数据库** ：MySQL

**IDEA**：webstorm





### 说明

这个作品 分为 客户端 和服务端2 个目录文件 --- > 需要 **分别 运行** 。

![在这里插入图片描述](https://img-blog.csdnimg.cn/20191227121637770.png)





### 亮点：

优势：**<u>前后端分离</u>** 

前端目录：（vuecli3 构建 、技术：vue）





管理员界面：

![在这里插入图片描述](https://img-blog.csdnimg.cn/20191231105755517.gif)





## 如何运行：

#### 环境配置：

1. node.js（服务器环境） 、mysql（数据库）

![在这里插入图片描述](https://img-blog.csdnimg.cn/20191231101029528.png)

![在这里插入图片描述](https://img-blog.csdnimg.cn/20191231103336100.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80Mzk0OTc4OA==,size_16,color_FFFFFF,t_70)

2. 从 [这个地址](https://github.com/ZhChen7/Student-course-selection-system) 下载项目到本地 （也就是当前页面的项目）
3. 将 名称（iviewuinode）的文件目录从中分离出，成为2个文件目录

![在这里插入图片描述](https://img-blog.csdnimg.cn/20191231101243254.png)



4. 分别进入2个项目：打开命令框：输入  `npm i` ,安装相关依赖。

5.  进入  文件（Student-course-selection-system），打开命令框：输入   `npm run serve`

   ![在这里插入图片描述](https://img-blog.csdnimg.cn/20191231102354873.gif)

   **如果** ：node-sass 报错 --> 必须重建node-sass  :执行 ：`npm rebuild node-sass` 重建node-sass。

6.  进入  文件（iviewuinode），打开命令框：输入   `node app.js`

![在这里插入图片描述](https://img-blog.csdnimg.cn/20191231102656331.png)

7. 打开文件（Student-course-selection-system）里面的 `vue.config.js` 文件，修改配置文件，检查 proxy  代理：

![在这里插入图片描述](https://img-blog.csdnimg.cn/2019123110305461.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80Mzk0OTc4OA==,size_16,color_FFFFFF,t_70)

查看自己的IP 地址： 打开命令行：输入命令：`ipconfig`

![在这里插入图片描述](https://img-blog.csdnimg.cn/20191231103257444.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80Mzk0OTc4OA==,size_16,color_FFFFFF,t_70)

8. 配置数据库 连接：打开文件（iviewuinode）里面的 在models里面的`mysql.js` 文件

![在这里插入图片描述](https://img-blog.csdnimg.cn/20191231103910497.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80Mzk0OTc4OA==,size_16,color_FFFFFF,t_70)

9. 打开浏览器 ：输入 ：`localhost:8080` 打开网页。
