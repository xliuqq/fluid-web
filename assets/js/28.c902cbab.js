(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{383:function(e,s,a){"use strict";a.r(s);var t=a(19),n=Object(t.a)({},(function(){var e=this,s=e._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"developer-guide"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#developer-guide"}},[e._v("#")]),e._v(" Developer Guide")]),e._v(" "),s("h2",{attrs:{id:"requirements"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#requirements"}},[e._v("#")]),e._v(" Requirements")]),e._v(" "),s("ul",[s("li",[e._v("Git")]),e._v(" "),s("li",[e._v("Golang (version >= 1.13)")]),e._v(" "),s("li",[e._v("Docker (version >= 19.03)")]),e._v(" "),s("li",[e._v("Kubernetes (version >= 1.14)")]),e._v(" "),s("li",[e._v("GNU Make")])]),e._v(" "),s("p",[e._v("For installation of Golang, please refer to "),s("a",{attrs:{href:"https://golang.org/dl/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Install Golang"),s("OutboundLink")],1)]),e._v(" "),s("p",[s("code",[e._v("make")]),e._v(" is usually in a "),s("code",[e._v("build-essential")]),e._v(" package in your distribution's package manager of choice. Make sure you have "),s("code",[e._v("make")]),e._v(" on your machine.")]),e._v(" "),s("p",[e._v("There're great chances that you may want to run your implementation in a real Kubernetes cluster, so probably a Docker is needed for some necessary operations like building images.\nSee "),s("a",{attrs:{href:"https://docs.docker.com/engine/install/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Install Docker"),s("OutboundLink")],1),e._v(" for more information.")]),e._v(" "),s("h2",{attrs:{id:"how-to-build-run-and-debug"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#how-to-build-run-and-debug"}},[e._v("#")]),e._v(" How to Build, Run and Debug")]),e._v(" "),s("h3",{attrs:{id:"get-source-code"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#get-source-code"}},[e._v("#")]),e._v(" Get Source Code")]),e._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[e._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("mkdir")]),e._v(" -p "),s("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$GOPATH")]),e._v("/src/github.com/fluid-cloudnative/\n$ "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("cd")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$GOPATH")]),e._v("/src/github.com/fluid-cloudnative\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" clone https://github.com/fluid-cloudnative/fluid.git\n")])])]),s("blockquote",[s("p",[s("strong",[e._v("NOTE")]),e._v(": In this document, we build, run and debug under non-module environment.")]),e._v(" "),s("p",[e._v("See "),s("a",{attrs:{href:"https://github.com/golang/go/wiki/Modules",target:"_blank",rel:"noopener noreferrer"}},[e._v("Go Modules"),s("OutboundLink")],1),e._v(" for more information if some issue occurs to you.")])]),e._v(" "),s("h3",{attrs:{id:"build-binary"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#build-binary"}},[e._v("#")]),e._v(" Build Binary")]),e._v(" "),s("p",[s("code",[e._v("Makefile")]),e._v(" under project directory provides many tasks you may want to use including Test, Build, Debug, Deploy etc.")]),e._v(" "),s("p",[e._v("You can simply get a binary by running:")]),e._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# build dataset-controller, alluxioruntime-controller and csi Binary")]),e._v("\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("make")]),e._v(" build\n")])])]),s("p",[e._v("By default, the binary would be put under "),s("code",[e._v("<fluid-path>/bin")]),e._v(".")]),e._v(" "),s("h3",{attrs:{id:"build-images"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#build-images"}},[e._v("#")]),e._v(" Build Images")]),e._v(" "),s("ol",[s("li",[s("p",[e._v("Set tags for images")]),e._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# set name for image of dataset-controller")]),e._v("\n$ "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("export")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("DATASET_CONTROLLER_IMG")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("your-registry"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("/"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("your-namespace"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("/"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("img-name"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# set name for image of alluxioruntime-controller")]),e._v("\n$ "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("export")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("ALLUXIORUNTIME_CONTROLLER_IMG")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("your-registry"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("/"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("your-namespace"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("/"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("img-name"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# set name for image of  CSI")]),e._v("\n$ "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("export")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("CSI_IMG")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("your-registry"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("/"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("your-namespace"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("/"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("csi-img-name"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# set name for image of init-user")]),e._v("\n$ "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("export")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("INIT_USERS_IMG")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("your-registry"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("/"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("your-namespace"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("/"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("csi-img-name"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# build all images")]),e._v("\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("make")]),e._v(" docker-build-all\n")])])]),s("p",[e._v("Before running Fluid, you need to push the built image to an accessible image registry.")])]),e._v(" "),s("li",[s("p",[e._v("Login to a image registry")]),e._v(" "),s("p",[e._v("Make sure you've login to a docker image registry that you'd like to push your image to:")]),e._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[e._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("docker")]),e._v(" login "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("docker-registry"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\n")])])])]),e._v(" "),s("li",[s("p",[e._v("push your images:")]),e._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[e._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("make")]),e._v(" docker-push-all\n")])])])])]),e._v(" "),s("h3",{attrs:{id:"run-your-fluid-on-kubernetes-cluster"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#run-your-fluid-on-kubernetes-cluster"}},[e._v("#")]),e._v(" Run Your Fluid on Kubernetes Cluster")]),e._v(" "),s("p",[e._v("In the following steps, we assume you have properly configured "),s("code",[e._v("KUBECONFIG")]),e._v(" environment variable or set up "),s("code",[e._v("~/.kube/config")]),e._v(". See "),s("a",{attrs:{href:"https://kubernetes.io/docs/tasks/access-application-cluster/configure-access-multiple-clusters/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Kubeconfig docs"),s("OutboundLink")],1),e._v(" for more information.")]),e._v(" "),s("ol",[s("li",[s("p",[e._v("Push your images to a image registry accessible to your Kubernetes cluster")]),e._v(" "),s("p",[e._v("If your images are pushed to some private repositories, make sure your Kubernetes cluster hold credentials for accessing those repositories.")])]),e._v(" "),s("li",[s("p",[e._v("Change image  in the samples we provide:")]),e._v(" "),s("div",{staticClass:"language-yaml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# <fluid-path>/config/fluid/patches/image_in_manager.yaml")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("...")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("...")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("containers")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" manager\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("image")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" <registry"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(">")]),e._v("/<namespace"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(">")]),e._v("/<img"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v("repo"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(">")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("<img"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v("tag"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(">")]),e._v("\n")])])]),s("div",{staticClass:"language-yaml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# <fluid-path>/config/fluid/patches/image_in_csi-plugin.yaml")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("...")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("...")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("containers")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" plugins\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("image")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" <registry"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(">")]),e._v("/<namespace"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(">")]),e._v("/<csi"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v("img"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v("name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(">")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("<csi"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v("img"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v("tag"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(">")]),e._v("\n")])])])]),e._v(" "),s("li",[s("p",[e._v("Install CRDs")]),e._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[e._v("$ kubectl apply -k config/crd\n")])])]),s("p",[e._v("Check CRD with:")]),e._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[e._v("$ kubectl get crd "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("grep")]),e._v(" fluid\nalluxiodataloads.data.fluid.io          "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("2020")]),e._v("-08-22T03:53:46Z\nalluxioruntimes.data.fluid.io           "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("2020")]),e._v("-08-22T03:53:46Z\ndatasets.data.fluid.io                  "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("2020")]),e._v("-08-22T03:53:46Z\n")])])])]),e._v(" "),s("li",[s("p",[e._v("Install your implementation")]),e._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[e._v("$ kubectl apply -k config/fluid\n")])])]),s("p",[e._v("Check Fluid system with:")]),e._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[e._v("$ kubectl get pod -n fluid-system\nNAME                                  READY   STATUS    RESTARTS   AGE\ncontroller-manager-7fd6457ccf-p7j2x   "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),e._v("/1     Running   "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),e._v("          84s\ncsi-nodeplugin-fluid-pj9tv            "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("2")]),e._v("/2     Running   "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),e._v("          84s\ncsi-nodeplugin-fluid-t8ctj            "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("2")]),e._v("/2     Running   "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),e._v("          84s\n")])])])]),e._v(" "),s("li",[s("p",[e._v("Run samples to verify your implementation")]),e._v(" "),s("p",[e._v("Here is a sample provided by us, you may want to rewrite it according to your implementation.")]),e._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[e._v("$ kubectl apply -k config/samples\n")])])]),s("p",[e._v("Check sample pods:")]),e._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[e._v("$ kubectl get pod\nNAME                   READY   STATUS    RESTARTS   AGE\ncifar10-fuse-vb6l4     "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),e._v("/1     Running   "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),e._v("          6m15s\ncifar10-fuse-vtqpx     "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),e._v("/1     Running   "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),e._v("          6m15s\ncifar10-master-0       "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("2")]),e._v("/2     Running   "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),e._v("          8m24s\ncifar10-worker-729xz   "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("2")]),e._v("/2     Running   "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),e._v("          6m15s\ncifar10-worker-d6kmd   "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("2")]),e._v("/2     Running   "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),e._v("          6m15s\nnginx-0                "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),e._v("/1     Running   "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),e._v("          8m30s\nnginx-1                "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),e._v("/1     Running   "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),e._v("          8m30s\n")])])])]),e._v(" "),s("li",[s("p",[e._v("Check logs to verify your implementation")]),e._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[e._v("$ kubectl logs -n fluid-system "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("controller_manager_name"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\n")])])])]),e._v(" "),s("li",[s("p",[e._v("Clean up")]),e._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[e._v("$ kubectl delete -k config/samples\n$ kubectl delete -k config/fluid\n$ kubectl delete -k config/crd\n")])])])])]),e._v(" "),s("h3",{attrs:{id:"unit-testing"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#unit-testing"}},[e._v("#")]),e._v(" Unit Testing")]),e._v(" "),s("h4",{attrs:{id:"basic-tests"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#basic-tests"}},[e._v("#")]),e._v(" Basic Tests")]),e._v(" "),s("p",[e._v("Execute following command from project root to run basic unit tests:")]),e._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[e._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("make")]),e._v(" unit-test\n")])])]),s("h4",{attrs:{id:"integration-tests"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#integration-tests"}},[e._v("#")]),e._v(" Integration Tests")]),e._v(" "),s("p",[s("code",[e._v("kubebuilder")]),e._v(" provided a integration test framework based on "),s("a",{attrs:{href:"https://godoc.org/sigs.k8s.io/controller-runtime/pkg/envtest",target:"_blank",rel:"noopener noreferrer"}},[e._v("envtest"),s("OutboundLink")],1),e._v(" package. You must install "),s("code",[e._v("kubebuilder")]),e._v(" before running integration tests:")]),e._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[e._v("$ "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("os")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$(")]),e._v("go "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("env")]),e._v(" GOOS"),s("span",{pre:!0,attrs:{class:"token variable"}},[e._v(")")])]),e._v("\n$ "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("arch")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$(")]),e._v("go "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("env")]),e._v(" GOARCH"),s("span",{pre:!0,attrs:{class:"token variable"}},[e._v(")")])]),e._v("\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("curl")]),e._v(" -L https://go.kubebuilder.io/dl/2.3.1/"),s("span",{pre:!0,attrs:{class:"token variable"}},[e._v("${os}")]),e._v("/"),s("span",{pre:!0,attrs:{class:"token variable"}},[e._v("${arch}")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("tar")]),e._v(" -xz -C /tmp/\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("mv")]),e._v(" /tmp/kubebuilder_2.3.1_"),s("span",{pre:!0,attrs:{class:"token variable"}},[e._v("${os}")]),e._v("_"),s("span",{pre:!0,attrs:{class:"token variable"}},[e._v("${arch}")]),e._v(" /usr/local/kubebuilder\n$ "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("export")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s("span",{pre:!0,attrs:{class:"token environment constant"}},[e._v("PATH")])]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),s("span",{pre:!0,attrs:{class:"token environment constant"}},[e._v("$PATH")]),e._v(":/usr/local/kubebuilder/bin\n")])])]),s("p",[e._v("Next, run all unit tests (integration tests included) with:")]),e._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[e._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("make")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("test")]),e._v("\n")])])]),s("blockquote",[s("p",[s("strong",[e._v("NOTE:")]),e._v(" When running unit tests on a non-linux system such as macOS, if testing failed and says "),s("code",[e._v("exec format error")]),e._v(", you may need to check whether "),s("code",[e._v("GOOS")]),e._v(" is consistent with your actual OS.")])]),e._v(" "),s("h3",{attrs:{id:"debug"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#debug"}},[e._v("#")]),e._v(" Debug")]),e._v(" "),s("p",[e._v("You can debug your program in multiple ways, here is just a brief guide for how to debug with "),s("code",[e._v("go-delve")])]),e._v(" "),s("p",[s("strong",[e._v("Prerequisites")])]),e._v(" "),s("p",[e._v("Make sure you have "),s("code",[e._v("go-delve")]),e._v(" installed. See "),s("a",{attrs:{href:"https://github.com/go-delve/delve/tree/master/Documentation/installation",target:"_blank",rel:"noopener noreferrer"}},[e._v("go-delve installation guide"),s("OutboundLink")],1),e._v(" for more information")]),e._v(" "),s("p",[s("strong",[e._v("Debug locally")])]),e._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# build & debug in one line")]),e._v("\n$ dlv debug "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("fluid-path"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("/cmd/controller/main.go\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# debug binary")]),e._v("\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("make")]),e._v(" manager\n$ dlv "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("exec")]),e._v(" bin/manager\n")])])]),s("p",[s("strong",[e._v("Debug remotely")])]),e._v(" "),s("p",[e._v("On remote host:")]),e._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[e._v("$ dlv debug --headless --listen "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('":12345"')]),e._v(" --log --api-version"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("2")]),e._v(" cmd/controller/main.go\n")])])]),s("p",[e._v("The command above will make "),s("code",[e._v("go-delve")]),e._v(" start a debug service and listen for port 12345.")]),e._v(" "),s("p",[e._v("On local host, connect to the debug service:")]),e._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[e._v("$ dlv connect "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"<remote-address>:12345"')]),e._v(" --api-version"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("2")]),e._v("\n")])])]),s("blockquote",[s("p",[e._v("Note: To debug remotely, make sure the specified port is not occupied and the firewall has been properly configured.")])])])}),[],!1,null,null,null);s.default=n.exports}}]);