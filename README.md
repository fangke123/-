# 高级软工选课系统（分为课程推荐系统和选课系统两部分，都可以分别独立运行）
## 一、选课系统

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

   **如果** ：node-sass 报错 --> 必须重建node-sass  :执行 ：`npm rebuild node-sass` 重建node-sass。

6.  进入  文件（iviewuinode），打开命令框：输入   `node app.js`

7. 打开文件（Student-course-selection-system）里面的 `vue.config.js` 文件，修改配置文件，检查 proxy  代理：将ip换为自己电脑的ip

查看自己的IP 地址： 打开命令行：输入命令：`ipconfig`

8. 配置数据库 连接：打开文件（iviewuinode）里面的在models里面的`mysql.js` 文件

9.我们要下载一个mysql的可视化工具，这里我使用的是navicat，创建六个数据表：t_admin,t_class,t_course,t_student,t_student_course,t_teacher,具体的数据表说明在报告中有

10. 运行，打开浏览器 ：输入 ：`localhost:3000` 打开网页。


## 二、推荐系统
#### 运行单独的模块
1. User Based: ```$ python user.py```	
2. Item Based: ```$ python item.py```
3. Warp MF: ```$ python hmf_warp_log.py```
4. Logistic MF: ```$ python hmf_warp_log.py```
5. Auto encoders: ```$ python auto_enc.py```

它将返回前5名推荐课程及其成绩。此外它还将返回前5名的课程，与实际选课结果进行比较。

#### 运行整个系统
1. ```$ node main.js``` 
2. 打开浏览器输入 ```http://localhost:3000/```
3. 输入 student ID 和 Semester 会得到推荐你选的课程中的前五名和推荐值。

Python的依赖包我们需要安装如下： LightFM, sklearn, theano, pandas, numpy, scipy, npm (express, body-parser and ejs modules for nodejs).

