export default {
  "@init"({ setDesc }) {
    setDesc("未选择组件");
  },
  ":root": [
    {
      title: "选择表单",
      type: "sceneComSelector",
      value: {
        get({ data }) {
          return data.formId ?? "";
        },
        set({ data, setDesc }, form) {
          data.formId = form.id;
          setDesc(form.title);
        },
      },
    },
  ],
};
