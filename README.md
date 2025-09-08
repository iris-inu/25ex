# 2025年夏季《移动软件开发》实验一实验报告


## **一、实验目标**

1、学习使用快速启动模板创建小程序的方法；2、学习不使用模板手动创建小程序的方法。



## 二、实验步骤

### 2.1.1注册开发者账号

访问微信公众平台官网首页（mp.weixin.qq.com），点击右上角“立即注册”按钮进入账号类型选择页面，选择“小程序”。

![在这里插入图片描述](https://i-blog.csdnimg.cn/direct/d0b2d743bc4f4b5bbfc4d8a1efa9118e.png#pic_center)


按照页面指引完成信息登记后，完成注册。

![在这里插入图片描述](https://i-blog.csdnimg.cn/direct/d42675235f114b57a925e520b61df868.png#pic_center)


### 2.1.2小程序信息完善

账号注册完成后,需要完善小程序的基本信息。

![在这里插入图片描述](https://i-blog.csdnimg.cn/direct/f89925bd45304a9e8202d3b9a22be4d7.png#pic_center)


### 2.1.3小程序开发工具
在微信公众平台官网可以找到微信开发者工具的下载。  

![在这里插入图片描述](https://i-blog.csdnimg.cn/direct/6754107d1bdf4b3f9a3faf2816d4bf7f.png#pic_center)


下载后会得到一个exe应用程序文件，双击点开进行安装。

![](https://i-blog.csdnimg.cn/direct/09575b0ad762452094bba5796e5ec1ac.png#pic_center)


### 2.2.1项目创建

打开微信开发者工具界面。

![在这里插入图片描述](https://i-blog.csdnimg.cn/direct/f0d023566a8046919a007f82fd10a1f8.png#pic_center)


点击可创建一个新的项目，选择不使用云服务，不选择模板。其中，AppID要在登录后的微信公众平台官网中，选择“开发与服务-开发设置”即可看到AppID。

![在这里插入图片描述](https://i-blog.csdnimg.cn/direct/74e5daeb50aa41469443578042334bbc.png#pic_center)


### 2.2.2页面配置

![在这里插入图片描述](https://i-blog.csdnimg.cn/direct/df077e1c3e6147269415f43339aec45d.png#pic_center)


删除和修改文件，具体操作如下：  
(1)删除 utils 文件夹及其内部所有内容。  
(2)删除 pages 文件夹下的 logs 目录及其内部所有内容。  
(3)删除 index.wxml 和 index. wxss 中的全部代码。  
(4)删除 index.js 中的全部代码,并且输入关键词“page"找到第二个选项按回车键让其自动补全的函数。  
(5)删除 app. wxss 中的全部代码。  
(6)删除 app.js 中的全部代码，并且输人关键词“app”找到第一个选项按回车键让其自动
补全函数。  

此时模板代码就修改完毕了,如果未来开发者还想创建其他页面,只需在 app.json 的 pages 属性中追加声明路径即可自动生成对应的页面文件。

### 2.2.3导航栏设计

小程序默认导航栏是黑底白字的效果,可以通过在 app.json 中对更改后的 app. json 文件对 window 属性进行重新配置来自定义导航栏效果。代码如下:

![在这里插入图片描述](https://i-blog.csdnimg.cn/direct/ed713aa4d4164ecf8be466389dadbe0f.png#pic_center)


效果如下：

![在这里插入图片描述](https://i-blog.csdnimg.cn/direct/d219ad8bfe7041ab83952be8dfcf0268.png#pic_center)

### 2.2.4页面设计

页面上主要包含3个内容，即微信头像、微信昵称和“点击获取头像和昵称”按钮。
计划使用如下组件。
- 微信头像:\<image\>(图像)组件；
- 微信昵称:\<text\>(文本)组件；
- 按钮:\<button\>(按钮)组件。

相关 WXML(pages/index/index. wxml) 代码片段如下:

![在这里插入图片描述](https://i-blog.csdnimg.cn/direct/6ee761a565b64edf8fd410116595554b.png#pic_center)


此时可以显示文本和按钮。由于尚未获得头像图片，所以无法显示内容。可以
临时使用本地图片代替,在点击按钮获取微信头像后再更改。  
在项目中新建自定义文件夹 images用于存放图片,右击此文件夹，选择“硬盘打开”,将本
地图片logo.png复制、粘贴进去等待使用。  

修改WXML页面的\<image\>组件如下:  

![在这里插入图片描述](https://i-blog.csdnimg.cn/direct/a42173414c674e77ade8058d0fbcf8c2.png#pic_center)


上述代码中sre属性用于指定图片来源为根目录下 images 文件夹中的 logo. png 图片，mode属性表示图片随着指定的宽度自动拉伸高度以显示原图的正确比例。  
在WXSS页面追加\<image\>和\<text\>组件的相关样式代码如下:  

![在这里插入图片描述](https://i-blog.csdnimg.cn/direct/18eb96bfea5b4e228debb3b4bb6ffbcf.png#pic_center)


当前效果如图所示。

![在这里插入图片描述](https://i-blog.csdnimg.cn/direct/543ef5278f2a414ca405240abb916e85.png#pic_center)


## 三、程序运行结果

截图如下：


![在这里插入图片描述](https://i-blog.csdnimg.cn/direct/b0660102647e4a1ca0bc503bb3b2dd2b.png#pic_center)



## 四、问题总结与体会

### 问题
问题：无法获取不到用户名和密码。
解决方法：利用了博客上分享的方法，还是无法解决，遂作罢。

### 心得体会
通过本次微信小程序实验，我掌握了创建小程序的方法：利用快速启动模板能快速上手，手动创建则深入理解了项目目录结构与配置逻辑。在操作中，我学会了微信开发者工具的使用，包括项目创建、代码编辑、实时预览和真机测试，也明晰了app.json等核心文件的作用，以及 image、button 等组件的基础用法。过程中虽因语法错误、路径问题遇阻，但通过查错调试，提升了问题解决能力，也体会到小程序开发中 “严谨编码” 与 “细节把控” 的重要性。


# 2025年夏季《移动软件开发》实验二实验报告

## **一、实验目标**

1、学习使用快速启动模板创建小程序的方法；2、学习不使用模板手动创建小程序的方法。


## 二、实验步骤

### 2.1 准备工作

#### 2.1.1 账号创建

进入“和风天气”官网注册账号。

![在这里插入图片描述](https://i-blog.csdnimg.cn/direct/6d8a9dc966074354b2afa411afd1c14d.png#pic_center)

登录“和风天气”，进入控制台。

![在这里插入图片描述](https://i-blog.csdnimg.cn/direct/5b9b1c72ecaa490f9bbdbee91f1d570f.png#pic_center)


在设置里，找到API Host。

#### 2.1.2 API秘钥

在项目管理中，创建项目并创建凭照，选择API KEY，保存API KEY。


![在这里插入图片描述](https://i-blog.csdnimg.cn/direct/af90e4f491324e9a82f00537181522e0.png#pic_center)


#### 2.1.3 API请求

阅读“和风天气”官网网址文档（https://dev.qweather.com/docs/api/geoapi/city-lookup/ ）

城市搜索API请求示例。

![在这里插入图片描述](https://i-blog.csdnimg.cn/direct/56b9b1354bb2471780198eb992ffa0b0.png#pic_center)


实时天气API请求示例。

![在这里插入图片描述](https://i-blog.csdnimg.cn/direct/605fd28d39ff4d338eb36b1f2c9b2866.png#pic_center)



### 2.2 小程序设计

#### 2.2.1 创建项目

打开微信开发者工具界面。点击可创建一个新的项目，选择不使用云服务，不选择模板。其中，AppID要在登录后的微信公众平台官网中，选择“开发与服务-开发设置”即可看到AppID。

### 2.2.2 页面配置

![在这里插入图片描述](https://i-blog.csdnimg.cn/direct/009e6f6ec3004097a4aadd1a8c51c2cb.png#pic_center)


删除和修改文件，具体操作如下：  
(1)删除 utils 文件夹及其内部所有内容。  
(2)删除 pages 文件夹下的 logs 目录及其内部所有内容。  
(3)删除 index.wxml 和 index. wxss 中的全部代码。  
(4)删除 index.js 中的全部代码,并且输入关键词“page"找到第二个选项按回车键让其自动补全的函数。  
(5)删除 app. wxss 中的全部代码。  
(6)删除 app.js 中的全部代码，并且输人关键词“app”找到第一个选项按回车键让其自动
补全函数。  

此时模板代码就修改完毕了,如果未来开发者还想创建其他页面,只需在 app.json 的 pages 属性中追加声明路径即可自动生成对应的页面文件。

### 2.2.2 具体设计

在app.json 中添加背景颜色等信息，修改界面样式。

![在这里插入图片描述](https://i-blog.csdnimg.cn/direct/521336425e574d71bc01234b28b31a7d.png#pic_center)


在index.wxss 文件中添加小程序信息，包括地区名、温度、天气等，并添加恰当的wxss样式，调整页面布局大小等。

地区初始化为“北京市，北京市，东城区”，N/A图片表示暂时没有天气信息，其他信息为0。

index.wxml代码如下：

![在这里插入图片描述](https://i-blog.csdnimg.cn/direct/923901e59fb647e1a3c08cd8b1baca07.png#pic_center)

index.wxss代码如下：

![在这里插入图片描述](https://i-blog.csdnimg.cn/direct/7a6c7b6d8c6a4cc7853c2a4f8608ad1f.png#pic_center)


![在这里插入图片描述](https://i-blog.csdnimg.cn/direct/b05322a25f6546c491d690f5757d3cf2.png#pic_center)


效果如下：

![在这里插入图片描述](https://i-blog.csdnimg.cn/direct/daa8af14bda940518b76fb3a3a465da5.png#pic_center)



### 2.3 逻辑实现

#### 2.3.1 更改代码

在index.wxml的“选择地区”里选择picker中的region,并添加bindchange函数，写入index.js文件中。picker为从底部弹起的滚动选择器，本程序选用其中的省市区选择器；
bindchange为函数，可以更换城市信息。

index.wxml更改后代码如下：

![在这里插入图片描述](https://i-blog.csdnimg.cn/direct/996dab4592854554931b64d6e50da919.png#pic_center)


index.js代码如下：

![在这里插入图片描述](https://i-blog.csdnimg.cn/direct/23318b53185844be8a38a501c17bebdc.png#pic_center)


#### 2.3.2 下载图标

实验中需要的天气图片、utils.js 下载地址为：https://gaopursuit.oss-cnbeijing.aliyuncs.com/2022/demo2_file.zip 。下载到images中。

#### 2.3.3 添加request合法域名

录微信公众平台，在开发管理的服务器域名，添加 https://p52tunh8tj.re.qweatherapi.com 为合法域名。
#### 2.3.4 更改变量

index.wxml文件中将天气信息改为变量，并在index.js 文件中添加 getWeather 函数，获取任意地区的天气信息

index.wxml改后代码如下：

![在这里插入图片描述](https://i-blog.csdnimg.cn/direct/e89fa03ea889458b94c1c525afee56e6.png#pic_center)
![在这里插入图片描述](https://i-blog.csdnimg.cn/direct/b6faf3c6dff84955bd14eef9000fade1.png#pic_center)


index.js添加完后 data getWeather和 changeRegion 函数代码如下：

![在这里插入图片描述](https://i-blog.csdnimg.cn/direct/6cabc44f9fb143b499b6b12bab5e321d.png#pic_center)
![在这里插入图片描述](https://i-blog.csdnimg.cn/direct/07218377b63943828b7b88d96536dbf7.png#pic_center)
![在这里插入图片描述](https://i-blog.csdnimg.cn/direct/76c8494b80024054b1a8a09d4ac83472.png#pic_center)
![在这里插入图片描述](https://i-blog.csdnimg.cn/direct/ea9311d3a1f94ff68a52a7e5a6f0ee6a.png#pic_center)


效果如下：


## 三、程序运行结果

切换城市前后：

![在这里插入图片描述](https://i-blog.csdnimg.cn/direct/54474e28e2014ee5830646e4b21a0699.png#pic_center)
![在这里插入图片描述](https://i-blog.csdnimg.cn/direct/c9431163c8a6423b8addf1275c4f8d30.png#pic_center)





## 四、问题总结与体会

### 4.1 问题

**问题**：在利用 wx.request 的 API 获取天气信息时出现报错。  
**解决方法**：通过报错信息得知，城市搜索API请求和实时天气API请求的方式途径中要不利用到自己的API Host和API KEY。

### 4.2 收获与体会

参与本次实验，我掌握了微信小程序开发关键技能。学会申请和风天气API密钥，了解其免费用户权限与参数配置，能调用接口获取JSON格式天气数据。还掌握服务器域名配置，完成项目创建、页面布局设计，用wx.request接口实现天气数据获取与页面动态更新，理解小程序生命周期函数调用时机，提升了小程序开发与第三方服务对接的实践能力。





# 2025年夏季《移动软件开发》实验三实验报告


## **一、实验目标**

学习微信小程序云开发的基础知识。能够完成利用文本搜索的功能就好，图像识别、语音识别接口有时有问题，不强求。



## 二、实验步骤

### 2.1 注册百度智能云

进入百度智能云，注册并实名认证。

![在这里插入图片描述](https://i-blog.csdnimg.cn/direct/3229870c544d45389b85de3973cea80b.png#pic_center)

创建一个图像识别应用，记录应用API KEY 和 SECRET KEY。
![在这里插入图片描述](https://i-blog.csdnimg.cn/direct/90f7de9b59a54888bdbfa4ea79710165.png#pic_center)

### 2.2 创建微信小程序

进入微信开发者工具，导入垃圾分类小程序项目。

![在这里插入图片描述](https://i-blog.csdnimg.cn/direct/076bfb8dfe944a2099ecba048057cb1f.png#pic_center)
![在这里插入图片描述](https://i-blog.csdnimg.cn/direct/e76491947cc44e6a95d883cb01ff622d.png#pic_center)


### 2.3 云开发环境

使用微信开发者工具创建一个云开发环境, 并复制环境ID。

![在这里插入图片描述](https://i-blog.csdnimg.cn/direct/dc5c20a89f494b33b14307804f2cd4de.png#pic_center)


### 2.4 添加百度 API KEY \ SECRET 和云环境 ID

![在这里插入图片描述](https://i-blog.csdnimg.cn/direct/82269a52ee0b4c9ca85fe3655ec525e7.png#pic_center)
![在这里插入图片描述](https://i-blog.csdnimg.cn/direct/96e10aebaaae4e7ea70a12abd40e2567.png#pic_center)

### 2.5 部署云函数
点击`cloudfuntions`文件夹展开子文件夹，依次分别右键点击展开的四个子文件夹并点击弹出的`上传并部署(不上传node_modules)`。

![在这里插入图片描述](https://i-blog.csdnimg.cn/direct/121fa457ee74441fb5e578f151a4ca7f.png#pic_center)


### 2.5 部署云数据库

进入小程序开发工具的`云开发`，点击`数据库`创建集合`trash`, `type`。

![在这里插入图片描述](https://i-blog.csdnimg.cn/direct/3e01f75334af4701ac08e6ff9b0eac70.png#pic_center)



依次导入`trash.json`, `type.json`文件。

![在这里插入图片描述](https://i-blog.csdnimg.cn/direct/9ee8d567272a4d31bcc8d2e56b75921c.png#pic_center)
![在这里插入图片描述](https://i-blog.csdnimg.cn/direct/310d66b6483d45d1b2291e14f3d64d05.png#pic_center)
![在这里插入图片描述](https://i-blog.csdnimg.cn/direct/0c2558b7a5864f83915e51115a9fb5c5.png#pic_center)


部署完成。



## 三、程序运行结果

程序的最终运行结果，在文本搜索框搜索关键词，会检索出相应垃圾的垃圾分类结果。

![在这里插入图片描述](https://i-blog.csdnimg.cn/direct/a39d770c82dc48a5977e48fce2b488fb.png#pic_center)
![在这里插入图片描述](https://i-blog.csdnimg.cn/direct/8493efbe458b487ebebca96a9baaab1b.png#pic_center)




## 四、问题总结与体会

### 4.1 问题总结
问题：部署后发现 `FUNCTION_NOT_FOUND` 的错误。
解决方法：经过排查发现，部署云函数时，没有将 `cloudfuntions` 文件夹所展开的所有子文件夹，全部点击`上传并部署(不上传node_modules)`。

### 4.2 心得体会
通过本次微信小程序云开发实验，我切实掌握了从环境搭建到功能实现的完整流程，不仅学会了百度智能云 API 配置、微信云开发环境创建与云函数部署，还成功解决了部署时遇到的 “FUNCTION_NOT_FOUND” 错误。整个过程让我明白，小程序开发需注重细节，比如云函数需逐个部署、配置参数要精准匹配，任何微小疏漏都可能导致功能异常。这次实践也让我对前后端协同与云服务应用有了更直观的认知，为后续复杂小程序开发打下了坚实基础，同时提升了自主排查问题与解决问题的能力。


# 2025年夏季《移动软件开发》实验五实验报告



## **一、实验目标**

1、学习使用快速启动模板创建小程序的方法；  
2、学习不使用模板手动创建小程序的方法。



## 二、实验步骤
### 2.1 工具准备
下载并安装最新版DevEco Studio 。
![在这里插入图片描述](https://i-blog.csdnimg.cn/direct/25c9a5c5daf84c6695a90baa0ca46f04.png)

### 2.2 创建ArkTS工程
1. 单击Create Project创建工程，选择Application应用开发（本文以应用开发为例，Atomic Service对应为元服务开发），选择模板Empty Ability，单击Next进行下一步配置。

![在这里插入图片描述](https://i-blog.csdnimg.cn/direct/d1444313847846138717c18537987b3a.png)
![在这里插入图片描述](https://i-blog.csdnimg.cn/direct/7b47be1bad5e4688bf732d77269bf983.png)



3. 进入配置工程界面，Compatible SDK表示兼容的最低API Version，此处以选择5.1.1(19)为例，其他参数保持
默认设置即可。
![在这里插入图片描述](https://i-blog.csdnimg.cn/direct/4453ccf02c724f7c8bc11c6bec6f6eda.png)


4. 单击Finish，工具会自动生成示例代码和相关资源，等待工程创建完成。

### 2.3 ArkTS工程目录结构（Stage模型）
![在这里插入图片描述](https://i-blog.csdnimg.cn/direct/0407328d0af0490f8f1aa8eb57a46899.png)

### 2.4 构建第一个页面
1. 使用文本组件。  
工程同步完成后，在Project窗口，单击entry > src > main > ets > pages，打开Index.ets文件，将页面从
RelativeContainer相对布局修改成Row/Column线性布局。

```ArkTs
// Index.ets
@Entry
@Component
struct Index {
  @State message: string = 'Hello World';
  build() {
    Row() {
      Column() {
        Text(this.message)
          .fontSize(50)
          .fontWeight(FontWeight.Bold)
      }
      .width('100%')
    }
    .height('100%')
  }
}
```

2. 添加按钮。  
在默认页面基础上，我们添加一个Button组件，作为按钮响应用户onClick事件，从而实现跳转到另一个页面。

```ArkTs
// Index.ets
@Entry
@Component
struct Index {
@State message: string = 'Hello World';
build() {
Row() {
Column() {
Text(this.message)
.fontSize(50)
.fontWeight(FontWeight.Bold)
// 添加按钮，以响应用户onClick事件
Button() {
Text('Next')
.fontSize(30)
.fontWeight(FontWeight.Bold)
}
.type(ButtonType.Capsule)
.margin({
top: 20
})
.backgroundColor('#0D9FFB')
.width('40%')
.height('5%')
}
.width('100%')
}
.height('100%')
}
}
```
3. 在编辑窗口右上角的侧边工具栏，单击Previewer，打开预览器。第一个页面效果如下图所示：

![在这里插入图片描述](https://i-blog.csdnimg.cn/direct/3db0056b947145e1a58050fa6305c7b4.png)

### 2.5 构建第二个页面
1. 创建第二个页面。
- 新建第二个页面文件。在Project窗口，打开entry > src > main > ets，右键单击pages文件夹，选择New > ArkTS File，命名为Second，单击回车键。

![在这里插入图片描述](https://i-blog.csdnimg.cn/direct/8cf9884317df4fe89fd5b8c3d074989c.png)

  
- 配置第二个页面的路由。在Project窗口，打开entry > src > main > resources > base > profile，在main_pages.json文件中的"src"下配置第二个页面的路由"pages/Second"。

```javascript
{
"src": [
"pages/Index",
"pages/Second"
]
}
```

2. 添加文本及按钮。  
参照第一个页面，在第二个页面添加Text组件、Button组件等，并设置其样式。

```ArkTs
// Second.ets
@Entry
@Component
struct Second {
  @State message: string = 'Hi there';
  build() {
    Row() {
      Column() {
        Text(this.message)
          .fontSize(50)
          .fontWeight(FontWeight.Bold)
        Button() {
          Text('Back')
            .fontSize(30)
            .fontWeight(FontWeight.Bold)
        }
        .type(ButtonType.Capsule)
        .margin({
          top: 20
        })
        .backgroundColor('#0D9FFB')
        .width('40%')
        .height('5%')
      }
      .width('100%')
    }
    .height('100%')
  }
}

```

### 2.6 实现页面间的跳转
1. 第一个页面跳转到第二个页面。
在第一个页面中，跳转按钮绑定onClick事件，单击按钮时跳转到第二页。


```ArkTs
// Index.ets
import { BusinessError } from '@kit.BasicServicesKit';
@Entry
@Component
struct Index {
  @State message: string = 'Hello World';
  build() {
    Row() {
      Column() {
        Text(this.message)
          .fontSize(50)
          .fontWeight(FontWeight.Bold)
        // 添加按钮，以响应用户onClick事件
        Button() {
          Text('Next')
            .fontSize(30)
            .fontWeight(FontWeight.Bold)
        }
        .type(ButtonType.Capsule)
        .margin({
          top: 20
        })
        .backgroundColor('#0D9FFB')
        .width('40%')
        .height('5%')
        // 跳转按钮绑定onClick事件，单击时跳转到第二页
        .onClick(() => {
          console.info(`Succeeded in clicking the 'Next' button.`)
          // 获取UIContext
          let uiContext: UIContext = this.getUIContext();
          let router = uiContext.getRouter();
          // 跳转到第二页
          router.pushUrl({ url: 'pages/Second' }).then(() => {
            console.info('Succeeded in jumping to the second page.')
          }).catch((err: BusinessError) => {
            console.error(`Failed to jump to the second page. Code is ${err.code},
message is ${err.message}`)
          })
        })
      }
      .width('100%')
    }
    .height('100%')
  }
}
```

2. 第二个页面返回到第一个页面。
在第二个页面中，返回按钮绑定onClick事件，单击按钮时返回到第一页。

```ArkTs
// Second.ets
import { BusinessError } from '@kit.BasicServicesKit';
@Entry
@Component
struct Second {
@State message: string = 'Hi there';
build() {
Row() {
Column() {
Text(this.message)
.fontSize(50)
.fontWeight(FontWeight.Bold)
Button() {
Text('Back')
.fontSize(30)
.fontWeight(FontWeight.Bold)
}
.type(ButtonType.Capsule)
.margin({
top: 20
})
.backgroundColor('#0D9FFB')
.width('40%')
.height('5%')
// 返回按钮绑定onClick事件，单击按钮时返回到第一页
.onClick(() => {
console.info(`Succeeded in clicking the 'Back' button.`)
// 获取UIContext
let uiContext: UIContext = this.getUIContext();
let router = uiContext.getRouter();
try {
// 返回第一页
router.back()
console.info('Succeeded in returning to the first page.')
} catch (err) {
let code = (err as BusinessError).code;
let message = (err as BusinessError).message;
console.error(`Failed to return to the first page. Code is ${code},
message is ${message}`)
}
})
}
.width('100%')
}
.height('100%')
}
}
```

3. 打开Index.ets文件，单击预览器中的 按钮进行刷新。效果如下图所示：

![在这里插入图片描述](https://i-blog.csdnimg.cn/direct/552f56791e4c43c4b77ad4f89b5fcd9b.png)


## 三、程序运行结果

程序的最终运行结果及截图。
![在这里插入图片描述](https://i-blog.csdnimg.cn/direct/3db0056b947145e1a58050fa6305c7b4.png)
![在这里插入图片描述](https://i-blog.csdnimg.cn/direct/44a59767e621480e847395d9d6953698.png)

## 四、问题总结与体会
通过本次实验，我成功构建了首个HarmonyOS应用，掌握了ArkTS声明式开发的核心流程。实践中，我深入理解了数据驱动UI、组件化布局和页面路由跳转的原理。DevEco Studio预览器的实时反馈极大提升了开发效率。这次实践让我对鸿蒙应用开发有了直观认识，为后续学习奠定了坚实基础。
