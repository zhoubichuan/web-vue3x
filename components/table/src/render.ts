// @ts-nocheck
import { h } from "@vue/runtime-core";

export default {
  props: {
    row: Object,
    column: Object,
    index: Number,
    render: Function,
  },
  setup(props) {
    return () => {
      const params = {
        row: props.row,
        column: props.column,
        index: props.index,
      };
      return props.render?.(h, params);
    };
  },
};