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
  ]
}