import { mergeWith } from "lodash";
import { costumier } from "../utils";
export default ({ env, data, inputs, outputs, slots, onError }) => {
  const next = !env.runtime.debug;
  inputs.creator((value) => {
    const { sceneId, tableData } = value;
    if (!sceneId) {
      onError("没有场景id");
      return;
    }
    if (next && tableData) {
      const table = env.canvas.getCom({ sceneId, comId: data.table.id });
      let { columns } = tableData;
      columns = (columns || []).map((column) => {
        if (column.component) {
          //列插槽，需要slots添加插槽能力
        } else {
          column.contentType = "text";
        }
        return column;
      });
      table.data = mergeWith(table.data, { ...tableData, columns }, costumier);
      outputs.onComplete(sceneId);
    }
  });
};
