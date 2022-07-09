(window.webpackJsonp=window.webpackJsonp||[]).push([[88],{446:function(t,a,s){"use strict";s.r(a);var e=s(19),n=Object(e.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"示例-fluid访问-google-cloud-storage-gcs-所需的特殊配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#示例-fluid访问-google-cloud-storage-gcs-所需的特殊配置"}},[t._v("#")]),t._v(" 示例 - Fluid访问 Google Cloud Storage (GCS) 所需的特殊配置")]),t._v(" "),a("p",[t._v("如果选择 Google Cloud Storage (GCS) 作为Alluxio的底层存储系统，Alluxio需要进行额外配置，以使得Alluxio能够正常访问挂载的GCS存储系统。")]),t._v(" "),a("p",[t._v("本文档展示了如何在Fluid中以声明式的方式完成Alluxio所需的特殊配置。更多信息请参考"),a("a",{attrs:{href:"https://docs.alluxio.io/os/user/stable/cn/ufs/GCS.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Alluxio集成 Google Cloud Storage (GCS) 作为底层存储"),a("OutboundLink")],1)]),t._v(" "),a("h2",{attrs:{id:"前提条件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#前提条件"}},[t._v("#")]),t._v(" 前提条件")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://github.com/fluid-cloudnative/fluid",target:"_blank",rel:"noopener noreferrer"}},[t._v("Fluid"),a("OutboundLink")],1)]),t._v(" "),a("li",[t._v("配置完成的 "),a("a",{attrs:{href:"https://cloud.google.com/storage/docs/creating-buckets",target:"_blank",rel:"noopener noreferrer"}},[t._v("GCS bucket"),a("OutboundLink")],1)]),t._v(" "),a("li",[t._v("有权限访问该GCS bucket的"),a("a",{attrs:{href:"https://cloud.google.com/docs/authentication/getting-started",target:"_blank",rel:"noopener noreferrer"}},[t._v("Google Application Credentials"),a("OutboundLink")],1)])]),t._v(" "),a("p",[t._v("请参考"),a("RouterLink",{attrs:{to:"/zh/guide/install.html"}},[t._v("Fluid安装文档")]),t._v(" 完成安装")],1),t._v(" "),a("h2",{attrs:{id:"运行示例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#运行示例"}},[t._v("#")]),t._v(" 运行示例")]),t._v(" "),a("p",[t._v("在这个例子中，我们会使用 "),a("code",[t._v("GCS UFS version 2")]),t._v("。 它会使用 "),a("code",[t._v("Google Application Credentials")]),t._v(" 来访问 GCS。这是Google推荐的方法。")]),t._v(" "),a("p",[t._v("在 Alluxio 中访问 GCS 的方法与其他存储系统的访问不同，比如S3。你需要挂载你的 "),a("code",[t._v("Google Application Credentials")]),t._v(" 在你的Alluxio master 还有 workers 上。然后提供 "),a("code",[t._v("Google Application Credentials")]),t._v(" 的路径在你的 Alluxio 配置中。")]),t._v(" "),a("p",[a("strong",[t._v("创建Secret")])]),t._v(" "),a("p",[t._v("首先你要准备好你的 "),a("code",[t._v("Google Application Credentials")]),t._v(", 然后运行一下的命令创建一个叫 "),a("code",[t._v("gcscreds")]),t._v(" 的 secret， 其中 key 是 "),a("code",[t._v("gcloud-application-credentials.json")]),t._v("，值是你的 json 文件内容。")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("kubectl create secret generic gcscreds "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n    --from-file"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("gcloud-application-credentials.json"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("name of your google application credentials"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(".json\n")])])]),a("p",[a("strong",[t._v("创建AlluxioRuntime资源对象")])]),t._v(" "),a("p",[t._v("这里你将创建你的 Alluxio Runtime, 并且挂载上一步中创建的 Secret 在 Alluxio master 还有 workers 上。路径必须相同。")]),t._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[t._v("$ cat << EOF "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")]),t._v(" runtime.yaml\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("apiVersion")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" data.fluid.io/v1alpha1\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("kind")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" AlluxioRuntime\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("metadata")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" gcs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("data\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("spec")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("...")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("volumes")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" secret"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("volume\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("secret")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("secretName")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" gcscreds "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# secret name you created")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("master")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("volumeMounts")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" secret"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("volume\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("readOnly")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("true")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("mountPath")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/var/secrets"')]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("worker")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("volumeMounts")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" secret"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("volume\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("readOnly")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("true")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("mountPath")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/var/secrets"')]),t._v("\nEOF\n")])])]),a("p",[t._v("创建你的 Runtime")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("$ kubectl create -f runtime.yaml\n")])])]),a("p",[a("strong",[t._v("创建Dataset资源对象")])]),t._v(" "),a("p",[t._v("这里你在 "),a("code",[t._v("mountPoint")]),t._v(" 指定你的 GCS bucket 还有文件目录。然后在 "),a("code",[t._v("options")]),t._v(" 中提供你挂载的 "),a("code",[t._v("google application credentials")]),t._v(" 路径。")]),t._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[t._v("$ cat << EOF "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")]),t._v(" dataset.yaml\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("apiVersion")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" data.fluid.io/v1alpha1\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("kind")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Dataset\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("metadata")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" gcs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("data\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("spec")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("mounts")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("mountPoint")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" gs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("//<bucket"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")]),t._v("/<path"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("to"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" gcs\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("options")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("fs.gcs.credential.path")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" /var/secrets/gcloud"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("application"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("credentials.json\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("accessModes")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" ReadOnlyMany\nEOF\n")])])]),a("p",[t._v("创建你的 Dataset")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("$ kubectl create -f dataset.yaml\n")])])]),a("p",[a("code",[t._v("dataset.yaml")]),t._v("中指定的bucket将被挂载到Alluxio中"),a("code",[t._v("/gcs")]),t._v("目录下。")])])}),[],!1,null,null,null);a.default=n.exports}}]);