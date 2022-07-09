(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{408:function(t,a,s){"use strict";s.r(a);var e=s(19),n=Object(e.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"fluid-0-5-版本发布-开启数据集缓存在线弹性扩缩容之路"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#fluid-0-5-版本发布-开启数据集缓存在线弹性扩缩容之路"}},[t._v("#")]),t._v(" Fluid 0.5 版本发布：开启数据集缓存在线弹性扩缩容之路")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://fluid-imgs.oss-cn-shanghai.aliyuncs.com/public/imgs/fluid-0.5-index.webp",alt:"0.5-img"}})]),t._v(" "),a("p",[a("strong",[t._v("导读：")]),t._v(" 为了解决大数据、AI 等数据密集型应用在云原生场景下，面临的异构数据源访问复杂、存算分离 I/O 速度慢、场景感知弱调度低效等痛点问题，南京大学PASALab、阿里巴巴、Alluxio 在 2020 年 6 月份联合发起了开源项目 Fluid。")]),t._v(" "),a("p",[t._v("Fluid 是云原生环境下数据密集型应用的高效支撑平台，项目自开源发布以来吸引了众多相关方向领域专家和工程师的关注，在大家的积极反馈下社区不断演进。近期 Fluid 0.5 版本正式发布，在该版本中，Fluid 主要新增改善以下三个方面内容：")]),t._v(" "),a("ul",[a("li",[t._v("丰富数据集的操作功能，支持在线弹性扩缩容、元数据备份和恢复。")]),t._v(" "),a("li",[t._v("支持多样环境配置部署，满足用户的个性化部署配置需求。")]),t._v(" "),a("li",[t._v("新增数据缓存引擎实现，增加用户在公有云上的引擎选择。")])]),t._v(" "),a("p",[a("strong",[t._v("Fluid 开源项目地址")]),t._v("：https://github.com/fluid-cloudnative/fluid")]),t._v(" "),a("p",[t._v("这三大主要功能的开发需求来自众多社区用户的实际生产反馈，此外 Fluid v0.5 还进行了一些 bug 修复和文档更新，欢迎使用体验 Fluid v0.5！")]),t._v(" "),a("p",[a("strong",[t._v("Fluidv0.5 下载链接")]),t._v("：https://github.com/fluid-cloudnative/fluid/releases")]),t._v(" "),a("p",[t._v("下文是本次新版本发布功能的进一步介绍。")]),t._v(" "),a("h2",{attrs:{id:"丰富数据集的操作功能"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#丰富数据集的操作功能"}},[t._v("#")]),t._v(" 丰富数据集的操作功能")]),t._v(" "),a("p",[t._v("在本版本中 Fluid 重点丰富了核心抽象对象 —— Dataset（数据集）的相关操作功能，从而使数据密集型应用能够更好地利用云原生提供的弹性、可观测性等基础功能，并增强了用户对数据集管理的灵活性。")]),t._v(" "),a("h3",{attrs:{id:"_1-数据集在线弹性缓存扩缩容"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-数据集在线弹性缓存扩缩容"}},[t._v("#")]),t._v(" 1. 数据集在线弹性缓存扩缩容")]),t._v(" "),a("p",[t._v("这是社区用户一直期待的功能！在 Fluid v0.5 之前，如果用户想要调整数据集的缓存能力，需要以全部卸载缓存引擎再重部署的方式完成。这种方式耗时耗力，还必须考虑数据缓存全部丢失的高昂代价。因此，在新版本中，我们为数据集提供了对缓存弹性扩缩容的支持，用户可以根据自己的场景需求，以不停机方式 on-the-fly 地按需增加某数据集的缓存容量以加速数据访问（扩容）或减少某个不频繁使用的数据集的缓存容量（缩容），从而实现更加精细的弹性资源分配，提高资源利用率。Fluid 内置的控制器会根据策略选择合适的扩缩容节点，例如在缩容时会结合节点上运行任务情况和节点缓存比例作为筛选条件。")]),t._v(" "),a("p",[t._v("执行弹性数据集的缓存能力弹性扩缩容，用户只需运行如下命令：")]),t._v(" "),a("blockquote",[a("p",[t._v("kubectl scale alluxioruntimes.data.fluid.io {datasetName}  --replicas={num}")])]),t._v(" "),a("p",[t._v("其中 datasetName 对应于数据集的名称，replicas 指定缓存节点的数目。")]),t._v(" "),a("p",[t._v("有关数据集手动扩缩容及其效果的演示视频如下：")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://fluid-imgs.oss-cn-shanghai.aliyuncs.com/public/video/on-the-fly.mp4",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://fluid-imgs.oss-cn-shanghai.aliyuncs.com/public/imgs/on-the-fly.jfif",alt:"fly-demo"}}),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("更多关于数据集手动扩缩容的操作细节，请参考示例中的"),a("RouterLink",{attrs:{to:"/zh/samples/dataset_scaling.html"}},[t._v("文档")])],1),t._v(" "),a("h3",{attrs:{id:"_2-元数据的备份与恢复"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-元数据的备份与恢复"}},[t._v("#")]),t._v(" 2. 元数据的备份与恢复")]),t._v(" "),a("p",[t._v("该功能增强了 Fluid 数据集元数据管理的灵活性。先前的 Fluid v0.4 已经支持将数据集的元数据（例如，文件系统 inode tree）加载至本地，并且会记录数据集的一些关键统计信息（例如，数据量大小和文件数量）。然而，一旦用户销毁本地数据集，这些元数据信息也都将丢失，重新构建数据集时需再次从底层存储系统获取。")]),t._v(" "),a("p",[t._v("因此，在 Fluid v0.5 中，我们新增了一个 K8s 自定义资源对象 —— DataBackup，为用户提供了声明式的 API 接口，以控制数据备份的相关行为。DataBackup 自定义资源对象构建的一个简单示例如下所示：")]),t._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[t._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("apiVersion")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" data.fluid.io/v1alpha1\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("kind")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" DataBackup\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("metadata")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" hbase"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("backup\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("spec")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("dataset")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" hbase\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("backupPath")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" pvc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("//<pvcName"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")]),t._v("/subpath1/subpath2/\n")])])]),a("p",[t._v("再次创建数据集时，只需新增一个指定备份文件位置的字段：")]),t._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[t._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("apiVersion")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" data.fluid.io/v1alpha1\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("kind")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Dataset\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("metadata")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" hbase\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("spec")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("dataRestoreLocation")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("path")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" pvc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("//pvc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("local/subpath1/\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("mounts")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("mountPoint")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("  https"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("//mirrors.tuna.tsinghua.edu.cn/apache/hbase/2.2.6/\n")])])]),a("p",[t._v("此时，Fluid 将首先从备份文件加载元数据和数据集统计信息，从而很大地提高元数据加载速度。")]),t._v(" "),a("h3",{attrs:{id:"_3-数据集的可观测性优化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-数据集的可观测性优化"}},[t._v("#")]),t._v(" 3. 数据集的可观测性优化")]),t._v(" "),a("p",[t._v("Fluid v0.5 还进一步增强了数据集的可观测性能力，具体包括两个部分：")]),t._v(" "),a("h4",{attrs:{id:"_1-与-prometheus-相结合"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-与-prometheus-相结合"}},[t._v("#")]),t._v(" 1）与 Prometheus 相结合")]),t._v(" "),a("p",[t._v('该特性能够支持数据集的可用性和性能指标收集，并且通过 Grafana 进行可视化展示。目前已支持 AlluxioRuntime 的实现，使用者可以方便地了解当前可缓存节点、缓存空间、现有缓存比例、远程读、短路读等性能指标。整个配置过程非常简单，达到了对于数据集监控系统“开箱即用"的效果。')]),t._v(" "),a("p",[a("img",{attrs:{src:"https://fluid-imgs.oss-cn-shanghai.aliyuncs.com/public/imgs/fluid-elastic-04.webp",alt:"图片"}})]),t._v(" "),a("h4",{attrs:{id:"_2-新增数据集缓存命中率指标"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-新增数据集缓存命中率指标"}},[t._v("#")]),t._v(" 2）新增数据集缓存命中率指标")]),t._v(" "),a("p",[t._v("该功能可以标识过去 1 分钟内对该数据集的全部访问中有多少访问命中了分布式缓存。该指标一方面能够帮助用户分析他们数据密集型应用中的性能瓶颈，量化查看 Fluid 在整个应用运行的工作流中起到的效果；另一方面能够帮助用户在应用性能提升和缓存资源占用间进行行权衡，做出合理的扩缩容决策。")]),t._v(" "),a("p",[t._v("这一指标被添加在 Fuild v0.5 的 "),a("code",[t._v("Dataset.Status.CacheStates")]),t._v(" 的 Dataset CRD 资源状态中，具体来说包括：")]),t._v(" "),a("ul",[a("li",[t._v("Cache Hit Ratio：过去一分钟分布式缓存命中的访问百分比。")]),t._v(" "),a("li",[t._v("Local Hit Ratio：过去一分钟本地缓存命中的访问百分比。")]),t._v(" "),a("li",[t._v("Remote Hit Ratio：过去一分钟远程缓存命中的访问百分比。")])]),t._v(" "),a("blockquote",[a("p",[t._v("注: 对于分布式缓存而言，数据命中有两种不同的缓存命中情况。"),a("strong",[t._v("本地缓存命中")]),t._v("指的是访问发起者可直接在同结点访问到缓存数据。"),a("strong",[t._v("远程缓存命中")]),t._v("指的是访问发起者需要通过网络访问其他结点上的缓存数据。")])]),t._v(" "),a("p",[t._v("在 Fluid v0.5 中，用户可以使用以下命令方便地查看缓存命中率指标：")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("kubectl get dataset "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("dataset-name"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" -o wide\nNAME        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(".  CACHE HIT RATIO   AGE\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("dataset-name"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(".  "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("86.2")]),t._v("%           16m\n")])])]),a("h2",{attrs:{id:"支持多样环境配置部署"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#支持多样环境配置部署"}},[t._v("#")]),t._v(" 支持多样环境配置部署")]),t._v(" "),a("p",[t._v("自 Fluid 0.4 版本发布以来，我们根据社区用户实际部署反馈的问题和需求，对 Fluid 在多样环境下的部署配置增加了更多支持。")]),t._v(" "),a("h3",{attrs:{id:"_1-支持-fuse-的-global-模式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-支持-fuse-的-global-模式"}},[t._v("#")]),t._v(" 1. 支持 Fuse 的 global 模式")]),t._v(" "),a("p",[t._v("在 Fluid 中，Dataset 资源对象中所定义的远程文件是可被调度的，这意味着你能够像管理 Pod 一样管理远程文件缓存到 Kubernetes 集群上的位置。执行计算的 Pod 可以通过 Fuse 客户端访问数据文件。在先前版本的 Fluid 中，Fuse 客户端总是会调度到缓存所在的节点上，但是用户不能自由控制 Fuse 的调度。")]),t._v(" "),a("p",[t._v("在 Fluid v0.5 中，我们为 Fuse 新增了 global 部署模式。在该模式下，Fuse 默认会全局部署到所有节点上。用户也可以通过指定 Fuse 的 nodeSelector 来影响 Fuse 的调度结果。同时，缓存会优先调度部署在执行计算 Pod 数量较多的节点上。")]),t._v(" "),a("h3",{attrs:{id:"_2-支持-hdfs-的用户级配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-支持-hdfs-的用户级配置"}},[t._v("#")]),t._v(" 2. 支持 HDFS 的用户级配置")]),t._v(" "),a("p",[t._v("很多社区用户使用分布式缓存系统Alluxio作为 Fluid 数据集的缓存引擎。在数据集持久化存储于 HDFS 文件系统的情况下，要使得 Alluxio 能够正常访问底层 HDFS，Alluxio 集群需要提前获取该 HDFS 的各类配置信息。")]),t._v(" "),a("p",[t._v("在 Fluid v0.5 中，我们使用 Kubernetes 的原生资源为上述场景提供支持。用户首先需要将 HDFS 的相关配置文件（e.g. "),a("code",[t._v("hdfs-site.xml")]),t._v(" 和 "),a("code",[t._v("core-site.xml")]),t._v("）以 "),a("code",[t._v("ConfigMap")]),t._v(" 方式创建到 Kubernetes 环境中，接着在创建的 "),a("code",[t._v("AlluxioRuntime")]),t._v(" 资源对象中引用上述创建的 "),a("code",[t._v("ConfigMap")]),t._v(" 从而实现上述功能。")]),t._v(" "),a("p",[a("code",[t._v("AlluxioRuntime")]),t._v(" 资源对象的一个示例如下所示：")]),t._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("apiVersion")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" data.fluid.io/v1alpha1\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("kind")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" AlluxioRuntime\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("metadata")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" my"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("hdfs\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("spec")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("  \n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("...")]),t._v("  \n\t"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("hadoopConfig")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" <configmap"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")]),t._v("  \n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("...")]),t._v("\n")])])]),a("p",[t._v("至此，创建出的 Alluxio 集群将能够正常地访问 HDFS 集群中的数据。更多内容可参考示例文档")]),t._v(" "),a("h2",{attrs:{id:"新增数据缓存引擎实现"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#新增数据缓存引擎实现"}},[t._v("#")]),t._v(" 新增数据缓存引擎实现")]),t._v(" "),a("p",[t._v("Fluid 默认使用的分布式缓存 Runtime 是 AlluxioRuntime，为了支持不同环境用户对缓存系统的需求，在之前的版本中 Fluid 已经将分布式缓存 Runtime 接入框架做成了可插拔的架构。在 Fluid v0.5 中，来自阿里云的社区贡献者基于该框架开发了 JindoRuntime，新增了一种支撑 Fluid Dataset 数据管理和缓存的执行引擎实现。用户可以在 Fluid 中通过 JindoRuntime 使用 JindoFS 的 Cache 模式进行远端文件的访问和缓存。在 Fluid 上使用和部署 JindoRuntime 流程简单、兼容原生 K8s 环境、开箱即用。")]),t._v(" "),a("h2",{attrs:{id:"总结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[t._v("#")]),t._v(" 总结")]),t._v(" "),a("p",[t._v("在 Fluid v0.5 中，我们对 Fluid 的功能特性与用户体验都进行了丰富和增强。")]),t._v(" "),a("p",[a("strong",[t._v("首先")]),t._v("，Fluid v0.5 进一步增加了数据集的功能操作：")]),t._v(" "),a("ul",[a("li",[t._v("提供数据集在线弹性扩缩容能力，实现更灵活、更精细的集群资源分配控制。")]),t._v(" "),a("li",[t._v("新增 DataBackup CRD，实现了数据集文件元数据等信息的备份与恢复，帮助完成数据集缓存系统的快速重启。")]),t._v(" "),a("li",[t._v("新增缓存命中率指标，帮助用户更好量化分析 Fluid 提供的加速效果。")])]),t._v(" "),a("p",[a("strong",[t._v("其次")]),t._v("，Fluid 支持更多环境模式和配置，满足更多真实场景的部署需求。")]),t._v(" "),a("p",[a("strong",[t._v("最后")]),t._v("，Fluid 新增了基于 JindoFS 的分布式缓存 Runtime —— JindoRuntime，为用户在多样化部署环境中提供不同的缓存引擎选择。")]),t._v(" "),a("p",[t._v("我们会继续广泛关注和采纳社区建议，推动 Fluid 项目的长期发展，期待听到大家更多的反馈。如果您有任何疑问或建议，欢迎加入 Fluid 用户群参与交流或在 Github 上与我们讨论：")]),t._v(" "),a("FluidCommunity"),t._v(" "),a("h2",{attrs:{id:"鸣谢"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#鸣谢"}},[t._v("#")]),t._v(" 鸣谢")]),t._v(" "),a("p",[t._v("感谢为此版本做出贡献的社区小伙伴们，他们包括来自阿里云的王涛、腾讯云的谢远东、中国电信的仇伶玮、南京大学 PASALab 的徐之浩、候浩军、陈国旺、陈雨铨等同学。")]),t._v(" "),a("h2",{attrs:{id:"作者简介"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#作者简介"}},[t._v("#")]),t._v(" 作者简介")]),t._v(" "),a("p",[t._v("顾荣 博士，南京大学计算机系副研究员，Fluid 开源项目 co-founder、Alluxio 开源项目 PMC 成员，研究方向大数据处理系统，已在 TPDS、ICDE、JPDC、IPDPS、ICPP 等领域前沿期刊会议发表论文30余篇，主持国家自然科学基金面上项目/青年项目、中国博士后科学基金特别资助项目多项，研究成果落地应用于阿里巴巴、百度、字节跳动、中国石化、华泰证券等公司和开源项目 Apache Spark、Alluxio，获 2018 年度江苏省科学技术一等奖、2019 年度江苏省计算机学会青年科技奖，担任中国计算机学会系统软件专委会委员/大数据专委会通讯委员、江苏省计算机学会大数据专委会秘书长。")])],1)}),[],!1,null,null,null);a.default=n.exports}}]);