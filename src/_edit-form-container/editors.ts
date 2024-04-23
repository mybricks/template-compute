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
          console.log('set comDef', comDef)
          data.comDef = comDef
          setDesc(comDef.title)
        }
      }
    },
    {
      title: '表单数据字段field',
      type: 'text',
      description: '以这个field去读输入流的值',
      value: {
        get({ data }) {
          return data.formItemsField;
        },
        set({ data }, value: string) {
          data.formItemsField = value;
        }
      }
    },
  ]
}