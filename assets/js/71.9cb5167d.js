(window.webpackJsonp=window.webpackJsonp||[]).push([[71],{427:function(t,e,a){"use strict";a.r(e);var s=a(19),r=Object(s.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"常见问题"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#常见问题"}},[t._v("#")]),t._v(" 常见问题")]),t._v(" "),e("h2",{attrs:{id:"_1-为什么我使用helm安装fluid失败了"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-为什么我使用helm安装fluid失败了"}},[t._v("#")]),t._v(" 1. 为什么我使用Helm安装fluid失败了？")]),t._v(" "),e("p",[e("strong",[t._v("回答")]),t._v(":推荐按照"),e("RouterLink",{attrs:{to:"/zh/guide/install.html"}},[t._v("Fluid安装文档")]),t._v("依次确认Fluid组件是否正常运行。")],1),t._v(" "),e("p",[t._v("Fluid安装文档是以"),e("code",[t._v("Helm 3")]),t._v("为例进行部署的。如果您使用"),e("code",[t._v("Helm 3")]),t._v("以下的版本部署Fluid，\n并且遇到了"),e("code",[t._v("CRD没有正常启动")]),t._v("的情况，这可能是因为"),e("code",[t._v("Helm 3")]),t._v("及其以上版本会在"),e("code",[t._v("helm install")]),t._v("的时候自动安装CRD，\n而低版本的Helm则不会。\n参见"),e("a",{attrs:{href:"https://helm.sh/docs/chart_best_practices/custom_resource_definitions/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Helm官方文档说明"),e("OutboundLink")],1),t._v("。")]),t._v(" "),e("p",[t._v("在这种情况下，您需要手动安装CRD：")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("$ kubectl create -f fluid/crds\n")])])]),e("h2",{attrs:{id:"_2-为什么我无法删除runtime"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-为什么我无法删除runtime"}},[t._v("#")]),t._v(" 2. 为什么我无法删除Runtime？")]),t._v(" "),e("p",[e("strong",[t._v("回答")]),t._v(":请检查相关Pod运行状态和Runtime的Events。")]),t._v(" "),e("p",[t._v("只要有任何活跃Pod还在使用Fluid创建的Volume，Fluid就不会完成删除操作。")]),t._v(" "),e("p",[t._v("如下的命令可以快速地找出这些活跃Pod，使用时把"),e("code",[t._v("<dataset_name>")]),t._v("和"),e("code",[t._v("<dataset_namespace>")]),t._v("换成自己的即可：")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("kubectl describe pvc "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("dataset_name"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" -n "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("dataset_namespace"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n\t"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("awk")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/^Mounted/ {flag=1}; /^Events/ {flag=0}; flag'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n\t"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("awk")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'NR==1 {print $3}; NR!=1 {print $1}'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n\t"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("xargs")]),t._v(" -I "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" kubectl get po "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n\t"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("grep")]),t._v(" -E "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Running|Terminating|Pending"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n\t"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("cut")]),t._v(" -d "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('" "')]),t._v(" -f "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n")])])]),e("h2",{attrs:{id:"_3-为什么我运行例子远程文件访问加速-执行第一次拷贝文件时会遇到input-output-error的错误。类似如下"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-为什么我运行例子远程文件访问加速-执行第一次拷贝文件时会遇到input-output-error的错误。类似如下"}},[t._v("#")]),t._v(" 3.为什么我运行例子"),e("RouterLink",{attrs:{to:"/zh/samples/accelerate_data_accessing.html"}},[t._v("远程文件访问加速")]),t._v("，执行第一次拷贝文件时会遇到"),e("code",[t._v("Input/output error")]),t._v("的错误。类似如下：")],1),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("time cp ./pyspark-2.4.6.tar.gz /tmp/\ncp: error reading ‘./pyspark-2.4.6.tar.gz’: Input/output error\ncp: failed to extend ‘/tmp/pyspark-2.4.6.tar.gz’: Input/output error\n\nreal\t3m15.795s\nuser\t0m0.001s\nsys\t0m0.092s\n")])])]),e("p",[t._v("这个原因是什么？")]),t._v(" "),e("p",[e("strong",[t._v("回答")]),t._v(": 这个例子的目的是让用户在无需搭建UFS（underlayer file system）的情况下，利用现有的基于Http协议的Apache软件镜像下载地址演示数据拷贝加速的能力。而实际场景中，一般不会使用WebUFS的实现。但是这个例子有三个限制：")]),t._v(" "),e("p",[t._v("1.Apache软件镜像下载地址的可用性和访问速度")]),t._v(" "),e("p",[t._v("2.WebUFS来源于Alluxio的社区贡献，并不是最优实现。比如实现并不是基于offset的断点续载，这就导致每次远程读操作都需要触发WebUFS大量数据块读")]),t._v(" "),e("p",[t._v("3.由于拷贝行为基于Fuse实现，每一次Fuse的chunk读由于Linux Kernel的上限都是128KB；从而导致文件越大，在初次拷贝时，就会触发大量的读操作")]),t._v(" "),e("p",[t._v("针对该问题，我们提拱了优化的方案：")]),t._v(" "),e("p",[t._v("1.配置读时，将Block size和chunk size读设置的大于文件的大小，这样就可以避免Fuse实现中频繁读的影响。")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("alluxio.user.block.size.bytes.default: 256MB\nalluxio.user.streaming.reader.chunk.size.bytes: 256MB\nalluxio.user.local.reader.chunk.size.bytes: 256MB\nalluxio.worker.network.reader.buffer.size: 256MB\n")])])]),e("p",[t._v("2.为了保障目标文件可以被下载成功，可以调整block下载的超时。例子中的超时时间是5分钟，如果您的网络状况不佳，可以酌情设置更长时间。")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("alluxio.user.streaming.data.timeout: 300sec\n")])])]),e("p",[t._v("3.您可以尝试手动加载该文件")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("kubectl exec -it hbase-master-0 bash\ntime alluxio fs  distributedLoad --replication 1 /\n")])])]),e("h2",{attrs:{id:"_4-为什么我在创建任务挂载-runtime-创建的-pvc-的时候出现-driver-name-fuse-csi-fluid-io-not-found-in-the-list-of-registered-csi-drivers-错误"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-为什么我在创建任务挂载-runtime-创建的-pvc-的时候出现-driver-name-fuse-csi-fluid-io-not-found-in-the-list-of-registered-csi-drivers-错误"}},[t._v("#")]),t._v(" 4. 为什么我在创建任务挂载 Runtime 创建的 PVC 的时候出现 "),e("code",[t._v("driver name fuse.csi.fluid.io not found in the list of registered CSI drivers")]),t._v(" 错误？")]),t._v(" "),e("p",[e("strong",[t._v("回答")]),t._v(":请查看任务被调度节点所在的 kubelet 配置是否为默认"),e("code",[t._v("/var/lib/kubelet")]),t._v("。")]),t._v(" "),e("p",[t._v("首先请在Kubernetes的node节点上执行"),e("code",[t._v("ps -ef | grep kubelet | grep -i root-dir")]),t._v(",查看Kubernetes的root-dir,如果不是"),e("code",[t._v("/var/lib/kubelet")]),t._v(",请修改"),e("code",[t._v("fluid/values.yaml")]),t._v("文件,")]),t._v(" "),e("div",{staticClass:"language-yaml extra-class"},[e("pre",{pre:!0,attrs:{class:"language-yaml"}},[e("code",[e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("csi")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("plugins")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("image")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" fluidcloudnative/fluid"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("csi"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("v0.7.0"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("3d66068\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("kubelet")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("rootDir")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" you kubelet root dir\n")])])]),e("p",[t._v("再次执行"),e("code",[t._v("helm uninstall fluid && heml install fluid [/opt/fluid]")]),t._v("，查看是否正常。")]),t._v(" "),e("p",[t._v("其次通过命令查看Fluid的CSI组件是否正常")]),t._v(" "),e("p",[t._v("如下的命令可以快速地找出Pod，使用时把"),e("code",[t._v("<node_name>")]),t._v("和"),e("code",[t._v("<fluid_namespace>")]),t._v("换成自己的即可：")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("kubectl get pod -n "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("fluid_namespace"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" -o wide "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("grep")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("node_name"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("grep")]),t._v(" csi-nodeplugin\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# <pod_name> 为上一步pod名")]),t._v("\nkubectl logs "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("pod_name"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" node-driver-registrar -n "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("fluid_namespace"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\nkubectl logs "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("pod_name"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" plugins -n "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("fluid_namespace"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])]),e("p",[t._v("如果上述步骤的Log无错误，请查看csidriver对象是否存在：")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("kubectl get csidriver\n")])])]),e("p",[t._v("如果csidriver对象存在，请查看查看csi注册节点是否包含"),e("code",[t._v("<node_name>")]),t._v("：")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("kubectl get csinode | grep <node_name>\n")])])]),e("p",[t._v("如果上述命令无输出，查看任务被调度节点所在的 kubelet 配置是否为默认"),e("code",[t._v("/var/lib/kubelet")]),t._v("。因为Fluid的CSI组件通过固定地址的socket注册到kubelet，默认为"),e("code",[t._v("--csi-address=/var/lib/kubelet/csi-plugins/fuse.csi.fluid.io/csi.sock --kubelet-registration-path=/var/lib/kubelet/csi-plugins/fuse.csi.fluid.io/csi.sock")]),t._v("。")]),t._v(" "),e("h2",{attrs:{id:"_5-为什么更新了fluid后-使用-kubectl-get-查询更新前创建的dataset-发现相比新建的dataset缺少了某些字段"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_5-为什么更新了fluid后-使用-kubectl-get-查询更新前创建的dataset-发现相比新建的dataset缺少了某些字段"}},[t._v("#")]),t._v(" 5. 为什么更新了fluid后，使用 "),e("code",[t._v("kubectl get")]),t._v(" 查询更新前创建的dataset，发现相比新建的dataset缺少了某些字段？")]),t._v(" "),e("p",[e("strong",[t._v("回答")]),t._v(":由于我们在fluid的升级过程中可能更新了CRD，你在旧版本创建的dataset，会将CRD中新增的字段设置为空\n例如，如果你从v0.4或更早版本升级，那时候的dataset没有FileNum字段\n更新fluid后，如果你使用 "),e("code",[t._v("kubectl get")]),t._v(" 命令，无法查询到该dataset的FileNum")]),t._v(" "),e("p",[t._v("你可以重建dataset，新建的dataset会正常显示这些字段")]),t._v(" "),e("h2",{attrs:{id:"_6-为什么在运行示例-nonroot-access时-遇到了-mkdir-权限被拒绝的问题"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_6-为什么在运行示例-nonroot-access时-遇到了-mkdir-权限被拒绝的问题"}},[t._v("#")]),t._v(" 6. 为什么在运行示例 "),e("RouterLink",{attrs:{to:"/zh/samples/nonroot_access.html"}},[t._v("Nonroot access")]),t._v("时，遇到了 mkdir 权限被拒绝的问题？")],1),t._v(" "),e("p",[e("strong",[t._v("回答")]),t._v(":在非 root 用户情况下，你首先必须要检查是否将正确的用户信息传递给了 runtime。其次你应该检查 Alluxio master pod 的状态，并使用 journalctl 去查看 Alluxio master pod 节点对应 kubelet 的日志。\n当将 hostpath 挂载到容器中，可能会造成无法创建文件的问题，因此我们必须要去检查 root 是否具有权限。例如在如下的情况中 root 是有权限使用 /dir。")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("$ stat /dir\n  File: ‘/dir’\n  Size: 32              Blocks: 0          IO Block: 4096   directory\nDevice: fd00h/64768d    Inode: 83          Links: 3\nAccess: (0755/drwxr-xr-x)  Uid: (    0/    root)   Gid: (    0/    root)\nAccess: 2021-04-14 23:35:47.928805350 +0800\nModify: 2021-01-19 00:16:21.539559082 +0800\nChange: 2021-01-19 00:16:21.539559082 +0800\n Birth: -\n\n")])])]),e("h2",{attrs:{id:"_7-为什么在应用程序中使用-pvc-时会产生了-volume-attachment-超时问题"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_7-为什么在应用程序中使用-pvc-时会产生了-volume-attachment-超时问题"}},[t._v("#")]),t._v(" 7. 为什么在应用程序中使用 PVC 时会产生了 Volume Attachment 超时问题？")]),t._v(" "),e("p",[e("strong",[t._v("回答")]),t._v(":Volume Attachment 超时问题是 Kubelet 进行请求 CSI Driver 时未收到 CSI Driver 的响应而造成的超时。\n该问题是由于 Fluid 的 CSI Driver 没有安装，或者kubelet没有访问 CSI Driver 的权限导致的。\n由于 CSI Driver 是由 Kubelet 进行回调，但是如果 Fluid 没有安装 CSI Driver 或者 Kubelet 没有权限查看 CSI Driver，就会导致 CSI Plugin 没有被正确触发。")]),t._v(" "),e("p",[t._v("首先需要使用命令"),e("code",[t._v("kubectl get csidriver")]),t._v("查看是否安装了 CSI Driver。\n如果没有安装，使用命令"),e("code",[t._v("kubectl apply -f charts/fluid/fluid/templates/csi/driver.yaml")]),t._v("进行安装，然后观察 PVC 是否成功挂载到应用程序中。\n如果仍未能解决，使用"),e("code",[t._v("export KUBECONFIG=/etc/kubernetes/kubelet.conf && kubectl get csidriver")]),t._v("来查看 Kubelet 能够具有权限看到 CSI Driver。")]),t._v(" "),e("h2",{attrs:{id:"_8-为什么我在创建了dataset和alluxioruntime后-alluxio-master-pod进入了crashloopbackoff状态"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_8-为什么我在创建了dataset和alluxioruntime后-alluxio-master-pod进入了crashloopbackoff状态"}},[t._v("#")]),t._v(" 8. 为什么我在创建了Dataset和AlluxioRuntime后，alluxio master Pod进入了CrashLoopBackOff状态？")]),t._v(" "),e("p",[e("strong",[t._v("回答")]),t._v(":首先需要使用命令"),e("code",[t._v("kubectl describe pod <dataset_name>-master-0")]),t._v("查看Pod错误退出的原因。")]),t._v(" "),e("p",[t._v("alluxio master Pod由两个容器alluxio-master和alluxio-job-master组成，如果是其中某一容器执行失败退出，则查看它异常退出前输出的日志。")]),t._v(" "),e("p",[t._v("例如，某次alluxio-job-master容器异常退出前，输出的日志为：")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("$ kubectl logs imagenet-master-0  -c alluxio-job-master -p\n2021-06-08 12:03:47,611 INFO  MetricsSystem - Starting sinks with config: {}.\n2021-06-08 12:03:47,616 INFO  MetricsHeartbeatContext - Created metrics heartbeat with ID app-1642528563209467270. This ID will be used for identifying info from the client. It can be set manually through the alluxio.user.app.id property\n2021-06-08 12:03:47,656 INFO  TieredIdentityFactory - Initialized tiered identity TieredIdentity(node=132.252.41.86, rack=null)\n2021-06-08 12:03:47,697 INFO  ExtensionFactoryRegistry - Loading core jars from /opt/alluxio-release-2.5.0-2-SNAPSHOT/lib\n2021-06-08 12:03:47,784 INFO  ExtensionFactoryRegistry - Loading extension jars from /opt/alluxio-release-2.5.0-2-SNAPSHOT/extensions\n2021-06-08 12:03:50,767 ERROR AlluxioJobMasterProcess - java.net.UnknownHostException: jfk8snode43: jfk8snode43: Temporary failure in name resolution\njava.lang.RuntimeException: java.net.UnknownHostException: jfk8snode43: jfk8snode43: Temporary failure in name resolution\n        at alluxio.util.network.NetworkAddressUtils.getLocalIpAddress(NetworkAddressUtils.java:514)\n        at alluxio.util.network.NetworkAddressUtils.getLocalHostName(NetworkAddressUtils.java:436)\n        at alluxio.util.network.NetworkAddressUtils.getConnectHost(NetworkAddressUtils.java:313)\n        at alluxio.underfs.JobUfsManager.connectUfs(JobUfsManager.java:55)\n        at alluxio.underfs.AbstractUfsManager.getOrAdd(AbstractUfsManager.java:150)\n        at alluxio.underfs.AbstractUfsManager.lambda$addMount$0(AbstractUfsManager.java:171)\n        at alluxio.underfs.UfsManager$UfsClient.acquireUfsResource(UfsManager.java:61)\n        at alluxio.master.journal.ufs.UfsJournal.<init>(UfsJournal.java:150)\n        at alluxio.master.journal.ufs.UfsJournalSystem.createJournal(UfsJournalSystem.java:83)\n        at alluxio.master.journal.ufs.UfsJournalSystem.createJournal(UfsJournalSystem.java:53)\n        at alluxio.master.AbstractMaster.<init>(AbstractMaster.java:73)\n        at alluxio.master.job.JobMaster.<init>(JobMaster.java:157)\n        at alluxio.master.AlluxioJobMasterProcess.<init>(AlluxioJobMasterProcess.java:92)\n        at alluxio.master.AlluxioJobMasterProcess$Factory.create(AlluxioJobMasterProcess.java:269)\n        at alluxio.master.AlluxioJobMaster.main(AlluxioJobMaster.java:45)\nCaused by: java.net.UnknownHostException: jfk8snode43: jfk8snode43: Temporary failure in name resolution\n        at java.net.InetAddress.getLocalHost(InetAddress.java:1506)\n        at alluxio.util.network.NetworkAddressUtils.getLocalIpAddress(NetworkAddressUtils.java:472)\n        ... 14 more\nCaused by: java.net.UnknownHostException: jfk8snode43: Temporary failure in name resolution\n        at java.net.Inet4AddressImpl.lookupAllHostAddr(Native Method)\n        at java.net.InetAddress$2.lookupAllHostAddr(InetAddress.java:929)\n        at java.net.InetAddress.getAddressesFromNameService(InetAddress.java:1324)\n        at java.net.InetAddress.getLocalHost(InetAddress.java:1501)\n        ... 15 more\n2021-06-08 12:03:50,773 ERROR AlluxioJobMaster - Failed to create job master process\njava.lang.RuntimeException: java.net.UnknownHostException: jfk8snode43: jfk8snode43: Temporary failure in name resolution\n        at alluxio.util.network.NetworkAddressUtils.getLocalIpAddress(NetworkAddressUtils.java:514)\n        at alluxio.util.network.NetworkAddressUtils.getLocalHostName(NetworkAddressUtils.java:436)\n        at alluxio.util.network.NetworkAddressUtils.getConnectHost(NetworkAddressUtils.java:313)\n        at alluxio.underfs.JobUfsManager.connectUfs(JobUfsManager.java:55)\n        at alluxio.underfs.AbstractUfsManager.getOrAdd(AbstractUfsManager.java:150)\n        at alluxio.underfs.AbstractUfsManager.lambda$addMount$0(AbstractUfsManager.java:171)\n        at alluxio.underfs.UfsManager$UfsClient.acquireUfsResource(UfsManager.java:61)\n        at alluxio.master.journal.ufs.UfsJournal.<init>(UfsJournal.java:150)\n        at alluxio.master.journal.ufs.UfsJournalSystem.createJournal(UfsJournalSystem.java:83)\n        at alluxio.master.journal.ufs.UfsJournalSystem.createJournal(UfsJournalSystem.java:53)\n        at alluxio.master.AbstractMaster.<init>(AbstractMaster.java:73)\n        at alluxio.master.job.JobMaster.<init>(JobMaster.java:157)\n        at alluxio.master.AlluxioJobMasterProcess.<init>(AlluxioJobMasterProcess.java:92)\n        at alluxio.master.AlluxioJobMasterProcess$Factory.create(AlluxioJobMasterProcess.java:269)\n        at alluxio.master.AlluxioJobMaster.main(AlluxioJobMaster.java:45)\nCaused by: java.net.UnknownHostException: jfk8snode43: jfk8snode43: Temporary failure in name resolution\n        at java.net.InetAddress.getLocalHost(InetAddress.java:1506)\n        at alluxio.util.network.NetworkAddressUtils.getLocalIpAddress(NetworkAddressUtils.java:472)\n        ... 14 more\nCaused by: java.net.UnknownHostException: jfk8snode43: Temporary failure in name resolution\n        at java.net.Inet4AddressImpl.lookupAllHostAddr(Native Method)\n        at java.net.InetAddress$2.lookupAllHostAddr(InetAddress.java:929)\n        at java.net.InetAddress.getAddressesFromNameService(InetAddress.java:1324)\n        at java.net.InetAddress.getLocalHost(InetAddress.java:1501)\n        ... 15 more\n2021-06-08 12:03:50,917 INFO  NettyUtils - EPOLL_MODE is available\n2021-06-08 12:03:51,319 WARN  MetricsHeartbeatContext - Failed to heartbeat to the metrics master before exit\n")])])]),e("p",[t._v("此错误一般是由于alluxio master Pod所在主机，未在dns服务器或本地/etc/hosts文件中配置hostname和ip的映射关系，导致alluxio-job-master无法解析hostname。\n此时，你需要登陆alluxio master Pod所在主机，执行命令"),e("code",[t._v("hostname")]),t._v("查询主机名，将其与ip的映射关系写入/etc/hosts文件。")]),t._v(" "),e("p",[t._v("你可以搜索在本项目的issue中进行搜索，寻找你遇到的报错信息的解决方案。如果没有找到可以解决你问题的issue，也可以提出新的issue。")])])}),[],!1,null,null,null);e.default=r.exports}}]);