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
          return data?.tableId ?? "";
        },
        set({ data, setDesc }, table) {
          data.tableId = table.id;
          setDesc(table.title);
        },
      },
    },
  ],
};
