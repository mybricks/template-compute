import { merge } from "lodash"
import { uuid } from "../utils"

export interface Data {
  title?: string
  hideTitle: boolean
  comDef: any
  useFooter: boolean
  actionOptions: Array<{id: string, label: string, value: any, visible: boolean }>
}
export default function ({ env, data, inputs, outputs, onError }: { env: any,  onError: any, data: Data, inputs: any, outputs: any}) {

  const next =  !env.runtime.debug // !env.runtime.debug // !env.runtime.debug // !env.runtime.debug // !env.runtime.debug //  
  inputs['store']((store) => {
    console.log('store', store, store.comDef, data)
    if (next) {

      /**
       * data 数据源
       */
      const { formData } = store

      let comForm
      try {
       comForm = env.command.getCom({ sceneId: data.comDef.sceneId, comId: data.comDef.id })
      } catch (error) {
      }
      console.log('comForm', comForm, data)
      let newItems = []
      if(formData) {
        formData.forEach(item => {
          const slot = comForm.slots.find(({ id }) => id === "body");
          let comItem = slot.appendChild({
            namespace: item.namespace || 'mybricks.normal-pc.form-text',
          })
          console.log('comItem', comItem, item)
        })
      }
      const { title, hideTitle, actionOptions = [], useFooter } = data
      actionOptions.filter(i => i.visible).forEach(btn => {
        const defaultBtn = {
          title: btn.label,
          id: uuid(),
          icon: "",
          useIcon: false,
          showText: true,
          dynamicHidden: true,
          dynamicDisabled: true,
          type: "default",
          visible: true,
          autoClose: true,
          isConnected: false,
          disabled: false,
          useDynamicDisabled: false,
          useDynamicHidden: false
        };
        comForm.data.footerBtns.push(defaultBtn)

      })
      // TODO: 表单配置字段、表单namespace字段
      // if(formItems.some(ite => !ite.namesapce)) {
      //   onError("组件namespace必填");
      //   return
      // }

      // 修改模板页面中的对话框数据
      comForm.data = merge(comForm.data, { title, hideTitle, actionOptions, useFooter })
      console.log('finish --- ', newItems)
      outputs['finish']()
    }
  })
}
