(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{397:function(t,a,s){"use strict";s.r(a);var n=s(19),e=Object(n.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"demo-speed-up-accessing-minio-files"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#demo-speed-up-accessing-minio-files"}},[t._v("#")]),t._v(" DEMO - Speed Up Accessing Minio Files")]),t._v(" "),a("p",[t._v("Start a standalone Minio locally as a remote S3 service. This example is for demonstration purposes only, not production")]),t._v(" "),a("h3",{attrs:{id:"start-minio-demo"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#start-minio-demo"}},[t._v("#")]),t._v(" start minio demo")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("docker")]),t._v(" run -ti -p "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("9000")]),t._v(":9000 --name minio minio/minio server /data\n")])])]),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("Endpoint: http://172.17.0.8:9000  http://127.0.0.1:9000 \nRootUser: minioadmin \nRootPass: minioadmin \n\nBrowser Access:\n   http://172.17.0.8:9000  http://127.0.0.1:9000\n\nCommand-line Access: https://docs.min.io/docs/minio-client-quickstart-guide\n   $ mc alias set myminio http://172.17.0.8:9000 minioadmin minioadmin\n\nObject API (Amazon S3 compatible):\n   Go:         https://docs.min.io/docs/golang-client-quickstart-guide\n   Java:       https://docs.min.io/docs/java-client-quickstart-guide\n   Python:     https://docs.min.io/docs/python-client-quickstart-guide\n   JavaScript: https://docs.min.io/docs/javascript-client-quickstart-guide\n   .NET:       https://docs.min.io/docs/dotnet-client-quickstart-guide\nDetected default credentials 'minioadmin:minioadmin', please change the credentials immediately using 'MINIO_ROOT_USER' and 'MINIO_ROOT_PASSWORD'\nIAM initialization complete\n")])])]),a("h3",{attrs:{id:"mock-minio-data"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mock-minio-data"}},[t._v("#")]),t._v(" mock minio data")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# create a new bucket")]),t._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("mc")]),t._v(" mb myminio/fluid\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# there are some PDFs in my local folder fluid")]),t._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("mc")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("cp")]),t._v(" fluid/* myminio/fluid/\n")])])]),a("h3",{attrs:{id:"dataset-yaml"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dataset-yaml"}},[t._v("#")]),t._v(" dataset.yaml")]),t._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("apiVersion")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" data.fluid.io/v1alpha1\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("kind")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Dataset\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("metadata")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" demo\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("spec")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("mounts")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("mountPoint")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" s3"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("//spark/fluid"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("data\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" spark\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("options")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("alluxio.underfs.s3.endpoint")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" http"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("//"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("$demo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("minio"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("addr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("9000")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("alluxio.underfs.s3.disable.dns.buckets")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"true"')]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("alluxio.underfs.s3.inherit.acl")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"false"')]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("encryptOptions")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" aws.accessKeyId\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("valueFrom")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("secretKeyRef")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" mysecret\n            "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("key")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" aws.accessKeyId\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" aws.secretKey\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("valueFrom")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("secretKeyRef")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" mysecret\n            "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("key")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" aws.secretKey\n")])])]),a("h3",{attrs:{id:"secret-yaml"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#secret-yaml"}},[t._v("#")]),t._v(" secret.yaml")]),t._v(" "),a("p",[t._v("create minio accessKeyId and accessKey")]),t._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("apiVersion")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" v1\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("kind")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Secret\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("metadata")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" mysecret\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("stringData")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("aws.accessKeyId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" minioadmin\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("aws.secretKey")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" minioadmin\n")])])]),a("h3",{attrs:{id:"runtime-yaml"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#runtime-yaml"}},[t._v("#")]),t._v(" runtime.yaml")]),t._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("apiVersion")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" data.fluid.io/v1alpha1\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("kind")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" AlluxioRuntime\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("metadata")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" demo\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("spec")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("replicas")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("tieredstore")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("levels")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("mediumtype")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" MEM\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("path")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" /dev/shm\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("quota")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 20M\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("high")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"0.95"')]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("low")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"0.7"')]),t._v("\n")])])]),a("h3",{attrs:{id:"pod-yaml"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pod-yaml"}},[t._v("#")]),t._v(" pod.yaml")]),t._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("apiVersion")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" v1\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("kind")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Pod\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("metadata")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" demo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("app\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("spec")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("containers")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" demo\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("image")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" nginx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("latest\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("volumeMounts")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("mountPath")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" /data\n          "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" demo\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("volumes")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" demo\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("persistentVolumeClaim")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("claimName")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" demo\n")])])]),a("h3",{attrs:{id:"check-the-data"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#check-the-data"}},[t._v("#")]),t._v(" check the data")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("$ k apply -f dataset.yaml\n$ k apply -f secret.yaml\n$ k apply -f runtime.yaml\n$ k apply -f pod.yaml\n$ k "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("exec")]),t._v(" -ti demo-app "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sh")]),t._v(" \n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ls")]),t._v(" /data\ndata-mesh-in-practice-how-europes-leading-online-platform-for-fashion-goes-beyond-the-data-lake-iteblog.com.pdf\ndata-science-across-data-sources-with-apache-arrow-iteblog.com.pdf\nfrom-hdfs-to-s3-migrate-pinterest-apache-spark-clusters-iteblog.com.pdf\nrunning-apache-spark-jobs-using-kubernetes-iteblog.com.pdf\nrunning-apache-spark-on-kubernetes-best-practices-and-pitfalls-iteblog.com.pdf\nscaling-data-and-ml-with-apache-spark-and-feast-iteblog.com.pdf\nusing-ai-to-support-proliferating-merchant-changes-iteblog.com.pdf\n")])])])])}),[],!1,null,null,null);a.default=e.exports}}]);