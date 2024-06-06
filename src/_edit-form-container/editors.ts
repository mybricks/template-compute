import { formItemPropsSchema } from "./constants";

export default {
  '@init'({ setDesc }) {
    setDesc("未选择组件")
  },
  ':root': [
    {
      title: '选择组件',
      type: 'sceneComSelector',
      options: {
        filter: ({ namespace}) => {
          return namespace === 'mybricks.normal-pc.form-container'
        }
      },
      value: {
        get({ data }) {
          return data.comDef
        },
        set({ data, setDesc }, comDef) {
          data.comDef = comDef
          setDesc(comDef.title)
        }
      }
    },
    {
      title: '数组输入格式',
      type: 'switch',
      value: {
        get({ data }) {
          return data.enableArray
        },
        set({ data, inputs}, value) {
          data.enableArray = value
          const i = inputs.get('store')
          const objectSchema = formItemPropsSchema
      
          if(value) {
            i.setSchema({
              "type": 'object',
              "properties": {
                "data": {
                    "type": "array",
                    "items": objectSchema
                }
              }
            })
          } else {
            i.setSchema({
              "type": 'object',
              "properties": {
                "data": objectSchema
              }
            })
          }
        }
      }
    },
  ]
}