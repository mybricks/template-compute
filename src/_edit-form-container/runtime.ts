import { merge } from 'lodash'

export default function ({ env, data, inputs, outputs }) {
  // TODO:
  const next = true //  !env.runtime.debug

  inputs['store']((store) => {
    
    if (next) {
      console.log("编辑表单容器组件: ---", data.comDef, store, store?.data)

      /**
       * comData 数据源
       * append 添加组件
       *  - slotId 向该插槽添加组件
       *  - namesapce 组件命名空间
       *  - data 组件数据源
       */
      const { data: comData } = store

      let comForm
      try {
       comForm = env.command.getCom({ sceneId: data.comDef.sceneId, comId: data.comDef.id })

      } catch (error) {
      }

      console.log('comForm --- ', comForm, store?.formItems, comData)
      // slot.get('content').addCom(namespace, false, { deletable: true, movable: true });
      // TODO: 表单配置字段、表单namespace字段
      const formItems = store?.formItems || store
      const newItems = formItems.map((item) => {
        let comItem
        try {
         // 给表单容器的插槽添加组件，同时返回当前组件的信息
        comItem = comForm.slots[0].appendChild({
          namespace: item.namespace,
        })
        console.log('comItem', comItem)
        } catch (error) {
          console.log('comItem error', error)

        }
        return {
          // id: comItem.id,
          props: {
            label: item.label,
            name: item.name,
          },
        }
      })
       // 修改模板页面中的表单数据， TODO：拿不到添加
      comForm.data.items = newItems.map((formItem) => {
        const configItem = comForm.data.items.find((item) => item.id === formItem.id)

        return {
          ...formItem,
          ...configItem?.props,
        }
      })
      // comForm.data.items = comForm.data.items.map((formItem) => {
      //   const configItem = newItems.find((item) => item.id === formItem.id)

      //   return {
      //     ...formItem,
      //     ...configItem?.props,
      //   }
      // })
      console.log('finish--- ')
      // comForm.data = merge(comForm.data, comData)
      outputs['finish']()
    }
  })
}
