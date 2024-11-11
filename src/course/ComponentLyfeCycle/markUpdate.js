import { beforeUpdate, onMount } from "svelte";

export default function () {
  let elements = new Set();

  beforeUpdate(() => {
    elements.forEach((element) => {
      element.style.border = "2px solid red";

      setTimeout(() => {
        if (elements.has(element)) {
          element.style.border = "2px solid";
        }
      }, 2000);
    });
  });

  onMount(() => {
    elements.forEach((element) => {
      element.style.outline = "2px solid green";
      element.style.margin = "8px";
    });
  });

  return function markUpdateAction(node) {
    elements.add(node);

    return {
      destroy() {
        elements.delete(node);
      },
    };
  };
}
