
import { formItemPropsSchema } from "./constants";
export default function ({
  data,
  output,
  input
}: UpgradeParams<any>): boolean {

  /**
   * v1.0.1 -> v1.0.2 修改schema结构
   */
  if(data.enableArray === true) {
    input.get('score').setSchema({
      "type": 'object',
      "properties": {
        "data": {
            "type": "array",
            "items": formItemPropsSchema
        }
      }
    })
  } else if(!data.enableArray) {
    input.get('store').setSchema({
      "type": 'object',
      "properties": {
        "data": formItemPropsSchema
      }
    })
  }
  //=========== 1.0.2 end ===============

  return true;
}