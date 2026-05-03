// @ts-nocheck
import { h, useSlots } from "@vue/runtime-core";

export default {
  props: {
    row: Object,
    column: Object,
    index: Number,
  },
  setup(props) {
    const slots = useSlots();

    return () => {
      const slotName = props.column?.slot2;
      const slot = typeof slotName === "string" ? slots[slotName] : undefined;
      return slot
        ? h("div", slot({ row: props.row, column: props.column, index: props.index }))
        : null;
    };
  },
};