import { mergeWith } from "lodash";
import { costumier } from '../utils'
export default ({ env, data, inputs, outputs }) => {
  const next = !env.runtime.debug;
  inputs.creator((value) => {
    const { sceneId, formData } = value;
    if (next && formData) {
      const formSlotId = "content";
      let { items } = formData;
      const form = env.canvas.getCom({ sceneId, comId: data.form.id });
      const { slots } = form;
      if (Array.isArray(items)) {
        const slot = slots.find(({ id }) => id === formSlotId);
        items = (items ?? []).map(({ namespace, ...rest }) => {
          slot.appendChild({ namespace, data });
          return rest;
        });
        form.data = mergeWith(form.data, { ...formData, items }, costumier);
        outputs.onComplete();
      }
    }
  });
};
