# Fluid 的文档工作

## 0. VuePress 注意事项：

- vuepress的源码被定制过，用于首页的特殊需求定制，因此node_modules中vuepress版本不能变动；
- vuepress不能将第一个子项作为index界面，因此需要README.md（搜索如何解决)；



## 1. 中文内容同fluid repo同步（已做）

具体改动见对比；

- userguide：faq，get_started，install，overview(READMD), troubeshooting，**fuse-debug**

  - install 里面有最新的版本的信息内容，需要考虑进行自动化设置；

- community：

  - Adopter：fluid repo的根目录下（需要统一路径/脚本处理）；

- dev：profiling, runtime_dev_guide.md, api_docs, multiple-client-support, use_go_create_resource,how_to_devolop

  - api_docs采用fluid repo，后续需要考虑自动同步；

- samples: REMDME(web)，accelerate_hdfs, accelerate_pvc，api_proxy,  backup_and_restore_metadata，data_co_locality.md，data_toleration，data_warmup, dataset_scaling，fuse_affinity, host_path, hdfs_configuration, machine_learning

  **'fuse-recovery', 'juicefs_runtime', 'juicefs_for_s3', 'knative', 'application_controller', 'gcs_configuration', 's3_configuration', **

  ~~**'other_volumnes(没有说明目的)'**~~

  - **？？视频链接（旧）还要么？？**

- operation：当作示例，移入sample目录中
  - monitoring.md，~~pod_schedule_default~~，~~pod_schedule~~，pod_schedule_global（原理还是示例）？：



## 2. 英文内容同步同fluid repo同步



## 3. blog 和 release 的中英文更新



## 4. fluid repo Docs的内容和编译

官网的代码应该是根据fluid repo的docs生成，通过类似mkdocs

- 图片放在阿里云还是repo里；
- 有没有检查链接不可访问的步骤？


## 5. 文档错误内容修复

错误：

dataset_scaling中，scaledout和scaledin的当前和期望值反掉了：