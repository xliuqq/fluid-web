(window.webpackJsonp=window.webpackJsonp||[]).push([[76],{433:function(t,a,s){"use strict";s.r(a);var n=s(19),e=Object(n.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"示例-hdfs-client文件访问加速"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#示例-hdfs-client文件访问加速"}},[t._v("#")]),t._v(" 示例 - HDFS Client文件访问加速")]),t._v(" "),a("p",[t._v("本文介绍如何使用HDFS Client，在Fluid中通过Alluxio协议访问远程文件，并借助Alluxio的文件缓存能力，实现访问远程文件加速。")]),t._v(" "),a("h2",{attrs:{id:"前提条件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#前提条件"}},[t._v("#")]),t._v(" 前提条件")]),t._v(" "),a("p",[t._v("在运行该示例之前，请参考"),a("RouterLink",{attrs:{to:"/zh/guide/get_started.html"}},[t._v("安装文档")]),t._v("完成安装，并检查Fluid各组件正常运行：")],1),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("$ kubectl get pod -n fluid-system\nNAME                                  READY   STATUS    RESTARTS   AGE\nalluxioruntime-controller-5b64fdbbb-84pc6   "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("/1     Running   "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("          8h\ncsi-nodeplugin-fluid-fwgjh                  "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("/2     Running   "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("          8h\ncsi-nodeplugin-fluid-ll8bq                  "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("/2     Running   "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("          8h\ndataset-controller-5b7848dbbb-n44dj         "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("/1     Running   "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("          8h\n")])])]),a("h2",{attrs:{id:"新建工作环境"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#新建工作环境"}},[t._v("#")]),t._v(" 新建工作环境")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("mkdir")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("any-path"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("/hdfs\n$ "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("any-path"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("/hdfs\n")])])]),a("h2",{attrs:{id:"运行示例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#运行示例"}},[t._v("#")]),t._v(" 运行示例")]),t._v(" "),a("p",[a("strong",[t._v("查看待创建的Dataset资源对象")])]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("$ cat"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<<")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("EOF"),a("span",{pre:!0,attrs:{class:"token bash punctuation"}},[t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("dataset.yaml")]),t._v("\napiVersion: data.fluid.io/v1alpha1\nkind: Dataset\nmetadata:\n  name: hadoop\nspec:\n  mounts:\n    - mountPoint: https://mirrors.tuna.tsinghua.edu.cn/apache/hadoop/core/current/\n      name: hadoop\nEOF")]),t._v("\n")])])]),a("p",[t._v("在这里，我们将要创建一个kind为"),a("code",[t._v("Dataset")]),t._v("的资源对象(Resource object)。"),a("code",[t._v("Dataset")]),t._v("是Fluid所定义的一个Custom Resource Definition(CRD)，该CRD被用来告知Fluid在哪里可以找到你所需要的数据。Fluid将该CRD对象中定义的"),a("code",[t._v("mountPoint")]),t._v("属性挂载到Alluxio之上，因此该属性可以是任何合法的能够被Alluxio识别的UFS地址。在本示例中，为了简单，我们使用"),a("a",{attrs:{href:"https://docs.alluxio.io/os/user/stable/cn/ufs/WEB.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("WebUFS"),a("OutboundLink")],1),t._v("进行演示。")]),t._v(" "),a("p",[a("strong",[t._v("创建Dataset资源对象")])]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("$ kubectl create -f dataset.yaml\ndataset.data.fluid.io/hadoop created\n")])])]),a("p",[a("strong",[t._v("查看Dataset资源对象状态")])]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("$ kubectl get dataset hadoop\nNAME     UFS TOTAL SIZE   CACHED   CACHE CAPACITY   CACHED PERCENTAGE   PHASE      AGE\nhadoop                                                                  NotBound   1m\n")])])]),a("p",[t._v("如上所示，"),a("code",[t._v("status")]),t._v("中的"),a("code",[t._v("phase")]),t._v("属性值为"),a("code",[t._v("NotBound")]),t._v("，这意味着该"),a("code",[t._v("Dataset")]),t._v("资源对象目前还未与任何"),a("code",[t._v("AlluxioRuntime")]),t._v("资源对象绑定，接下来，我们将创建一个"),a("code",[t._v("AlluxioRuntime")]),t._v("资源对象。")]),t._v(" "),a("p",[a("strong",[t._v("查看待创建的AlluxioRuntime资源对象")])]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("$ cat"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<<")]),t._v("EOF "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("runtime.yaml\napiVersion: data.fluid.io/v1alpha1\nkind: AlluxioRuntime\nmetadata:\n  name: hadoop\nspec:\n  replicas: "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("\n  tieredstore:\n    levels:\n      - mediumtype: MEM\n        path: /dev/shm\n        quota: 2Gi\n        high: "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"0.95"')]),t._v("\n        low: "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"0.7"')]),t._v("\n")])])]),a("p",[a("strong",[t._v("创建AlluxioRuntime资源对象")])]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("$ kubectl apply -f runtime.yaml\nalluxioruntime.data.fluid.io/hadoop created\n")])])]),a("p",[a("strong",[t._v("检查AlluxioRuntime资源对象状态")])]),t._v(" "),a("p",[a("code",[t._v("AlluxioRuntime")]),t._v("是另一个Fluid定义的CRD。一个"),a("code",[t._v("AlluxioRuntime")]),t._v("资源对象描述了在Kubernetes集群中运行一个Alluxio实例所需要的配置信息。")]),t._v(" "),a("p",[t._v("等待一段时间，让AlluxioRuntime资源对象中的各个组件得以顺利启动，你会看到类似以下状态：")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("$ hdfs kubectl get pods\nNAME                            READY   STATUS    RESTARTS   AGE\nhadoop-master-0                 "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("/2     Running   "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("          106s\nhadoop-worker-0                 "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("/2     Running   "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("          64s\nhadoop-worker-1                 "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("/2     Running   "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("          64s\n")])])]),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("$ kubectl get alluxioruntime hadoop\nNAME     MASTER PHASE   WORKER PHASE   FUSE PHASE   AGE\nhadoop   Ready          Ready          Ready        116s\n")])])]),a("p",[t._v("然后，再查看Dataset状态，发现已经与AlluxioRuntime绑定。")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("$ kubectl get dataset hadoop\nNAME     UFS TOTAL SIZE   CACHED   CACHE CAPACITY   CACHED PERCENTAGE   PHASE   AGE\nhadoop   "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("390")]),t._v(".2MiB         0B       4GiB             "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("%                  Bound   55m\n")])])]),a("p",[t._v("Dataset资源对象准备完成后（即与Alluxio实例绑定后），与该资源对象关联的PV, PVC已经由Fluid生成，应用可以通过该PVC完成远程文件在Pod中的挂载，并通过挂载目录实现远程文件访问")]),t._v(" "),a("h2",{attrs:{id:"通过hdfs-client访问文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#通过hdfs-client访问文件"}},[t._v("#")]),t._v(" 通过HDFS Client访问文件")]),t._v(" "),a("p",[a("strong",[t._v("准备测试程序")])]),t._v(" "),a("p",[t._v("本例采用HDFS Java Client访问文件，在编写客户端代码时需要引入以下依赖项")]),t._v(" "),a("div",{staticClass:"language-xml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-xml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("dependency")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("groupId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("org.apache.hadoop"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("groupId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("artifactId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("hadoop-client"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("artifactId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("version")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("${hadoop.version}"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("version")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("dependency")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("dependency")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("groupId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("org.apache.hadoop"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("groupId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("artifactId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("hadoop-hdfs"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("artifactId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("version")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("${hadoop.version}"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("version")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("dependency")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("dependency")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("groupId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("org.alluxio"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("groupId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("artifactId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("alluxio-core-client"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("artifactId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("version")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("${alluxio.version}"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("version")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("type")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("pom"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("type")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("dependency")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("dependency")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("groupId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("org.alluxio"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("groupId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("artifactId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("alluxio-core-client-hdfs"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("artifactId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("version")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("${alluxio.version}"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("version")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("dependency")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),a("p",[t._v("同时要在core-site.xml中添加alluxio的配置，详情和故障排查可参考"),a("a",{attrs:{href:"https://docs.alluxio.io/os/user/stable/en/compute/Hadoop-MapReduce.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Running Hadoop MapReduce on Alluxio"),a("OutboundLink")],1),t._v("。")]),t._v(" "),a("div",{staticClass:"language-xml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-xml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("property")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("fs.alluxio.impl"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("value")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("alluxio.hadoop.FileSystem"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("value")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("description")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("The Alluxio FileSystem"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("description")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("property")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),a("p",[t._v("在通过HDFS Client访问文件时，需要指定HDFS Server地址")]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("final")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" HDFS_URL "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"alluxio://hadoop-master-0.default.svc.cluster.local:"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("System")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getenv")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"HADOOP_PORT"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/hadoop"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Configuration")]),t._v(" conf "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Configuration")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("FileSystem")]),t._v(" fs "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("FileSystem")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("get")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("URI"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("create")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("HDFS_URL"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" conf"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("注意这里的HDFS_URL域名规则为:")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("alluxio://"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("HCFS URL"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("/"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("DATASET_NAME"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("其中DATASET_NAME为前面创建的Dataset名称，本例中为hadoop。而Endpoint的获得完全可以通过如下命令获得HCFS(Hadoop Compatible FileSystem) URL")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v(" kubectl get datasets.data.fluid.io -owide\nNAME    UFS TOTAL SIZE   CACHED   CACHE CAPACITY   CACHED PERCENTAGE   PHASE   HCFS URL                                 AGE\nhbase   "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("443")]),t._v(".49MiB        "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(".00B    "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),t._v(".00GiB          "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.0")]),t._v("%                Bound   alluxio://hbase-master-0.default:19998   97s\n")])])]),a("p",[t._v("完整的测试代码可参考"),a("a",{attrs:{href:"../../../samples/hdfs"}},[t._v("samples/hdfs")]),t._v("。我们把测试代码制作成镜像，方便接下来的测试，镜像地址为registry.cn-hangzhou.aliyuncs.com/qiulingwei/fluid-hdfs-demo:1.2.0")]),t._v(" "),a("p",[a("strong",[t._v("查看待创建的测试作业")])]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("$ cat"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<<")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("EOF"),a("span",{pre:!0,attrs:{class:"token bash punctuation"}},[t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("app.yaml")]),t._v('\napiVersion: batch/v1\nkind: Job\nmetadata:\n  name: fluid-hdfs-demo\nspec:\n  template:\n    spec:\n      restartPolicy: OnFailure\n      containers:\n        - name: fluid-hdfs-demo\n          image: registry.cn-hangzhou.aliyuncs.com/qiulingwei/fluid-hdfs-demo:1.3.0\n          imagePullPolicy: Always\n          env:\n          - name: HADOOP_PORT\n            value: "19998"\nEOF')]),t._v("\n")])])]),a("p",[t._v("此处，需要将环境变量中的19998替换为刚刚查询得到的HCFS(Hadoop Compatible FileSystem) URL中实际的端口")]),t._v(" "),a("p",[a("strong",[t._v("启动测试作业")])]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("$ kubectl apply -f app.yaml\njob.batch/fluid-hdfs-demo created\n")])])]),a("p",[t._v("在测试程序中我们先遍历Dataset查看有哪些文件，然后把这些文件复制到本地，查看访问远程文件的加速效果。")]),t._v(" "),a("p",[t._v("等待一段时间,待该作业运行完成,作业的运行状态可通过以下命令查看:")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("$ kubectl get pods\nNAME                            READY   STATUS      RESTARTS   AGE\nfluid-hdfs-demo-8q9b7           "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("/1     Completed   "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("          14m\n")])])]),a("p",[a("strong",[t._v("查看任务执行时间")])]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("$ kubectl logs fluid-hdfs-demo-8q9b7\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("## RELEASENOTES.md")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("## hadoop-3.1.3-src.tar.gz")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("## CHANGES.md")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("## hadoop-3.1.3-site.tar.gz")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("## hadoop-3.1.3-rat.txt")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("## hadoop-3.1.3.tar.gz")]),t._v("\ncopy directory cost:67520ms\n")])])]),a("p",[t._v("第一次执行作业，耗时67秒多时间。")]),t._v(" "),a("p",[a("strong",[t._v("查看Dataset资源对象状态")])]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("$ kubectl get dataset hadoop\nNAME     UFS TOTAL SIZE   CACHED     CACHE CAPACITY   CACHED PERCENTAGE   PHASE   AGE\nhadoop   "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("390")]),t._v(".2MiB         "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("388")]),t._v(".4MiB   4GiB             "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("99")]),t._v("%                 Bound   88m\n")])])]),a("p",[t._v("可以看到所有远程文件已经被缓存在Alluxio中了。")]),t._v(" "),a("p",[a("strong",[t._v("再次启动测试作业")])]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("$ kubectl delete -f app.yaml\n$ kubectl create -f app.yaml\n")])])]),a("p",[t._v("由于远程文件都已经被缓存，这次作业耗时大大减少。")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("$ kubectl logs fluid-hdfs-demo-pxt45\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("## RELEASENOTES.md")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("## hadoop-3.1.3-src.tar.gz")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("## CHANGES.md")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("## hadoop-3.1.3-site.tar.gz")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("## hadoop-3.1.3-rat.txt")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("## hadoop-3.1.3.tar.gz")]),t._v("\ncopy directory cost:1300ms\n")])])]),a("p",[t._v("可以看到第二次作业，同样的文件访问，仅耗时1.3秒。")]),t._v(" "),a("p",[t._v("这种大幅度的加速效果归因于Alluxio所提供的强大的缓存能力，这种缓存能力意味着，只要你访问某个远程文件一次，该文件就会被缓存在Alluxio中，你的所有接下来的重复访问都不再需要进行远程文件读取，而是从Alluxio中直接获取数据，因此对于数据的访问加速也就不难解释了。")]),t._v(" "),a("h2",{attrs:{id:"环境清理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#环境清理"}},[t._v("#")]),t._v(" 环境清理")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("$ kubectl delete -f "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(".")]),t._v("\n")])])])])}),[],!1,null,null,null);a.default=e.exports}}]);