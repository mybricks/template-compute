export const formItemPropsSchema =  {
  "type": "object",
  "required": ["field", "label", "namespace"],
  "properties": {
    "field": {
      "type": "string",
      "description": "表单项字段名,必填"
    },
    "label": {
      "type": "string",
      "description": "表单项标签/标题,必填"
    },
    "namespace": {
      "type": "string",
      "description": "表单项对应组件的namespace，必填"
    },
    "disabled": {
      "type": "boolean",
      "description": "是否禁用"
    },
    "required": {
      "type": "boolean",
      "description": "表单项是否有必填样式"
    },
    "tooltip": {
      "type": "string",
      "description": "表单项标题的提示信息，问号图标移上去有提示"
    },
    "description": {
      "type": "string",
      "description": "展示在表单项下方的提示内容"
    },
    "labelAutoWrap": {
      "type": "boolean",
      "description": "标题是否换行"
    }
  }
}
