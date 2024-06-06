export const formItemPropsSchema =  {
  "type": "object",
  "properties": {
    "field": {
      "type": "string",
      "description": "表单项字段名"
    },
    "label": {
      "type": "string",
      "description": "表单项标签/标题"
    },
    "namespace": {
      "type": "string",
      "description": "表单项对应组件的namespace"
    },
    "tooltip": {
      "type": "string",
      "description": "表单项标题的提示信息，问号图标移上去有提示"
    },
    "description": {
      "type": "string",
      "description": "展示在表单项下方的提示内容"
    },
    "disabled": {
      "type": "boolean",
      "description": "是否禁用"
    },
    "required": {
      "type": "boolean",
      "description": "表单项是否有必填样式"
    },
    "hiddenLabel": {
      "type": "boolean",
      "description": "隐藏表单项的标题/标签"
    },
    "colon": {
      "type": "boolean",
      "description": "标题冒号"
    },
    "descriptionStyle": {
      "type": "any",
      "description": "描述语样式"
    },
    "labelStyle": {
      "type": "any",
      "description": "标签样式"
    },
    "labelAlign": {
      "type": "string",
      "description": "表单项标题对齐方式，可取left、right、default"
    },
    "labelAutoWrap": {
      "type": "boolean",
      "description": "标题是否换行"
    },
    "labelWidth": {
      "type": "number",
      "description": "标题自定义宽度"
    },
    "span": {
      "type": "number",
      "description": "表单项栅格宽度，共24格"
    },
    "width": {
      "type": "number",
      "description": "表单项像素宽度，单位px"
    },
    "widthOption": {
      "type": "string",
      "description": "表单项宽度模式，可取px(固定宽度),span(栅格宽度)"
    }
  }
}
