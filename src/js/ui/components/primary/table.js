import { container } from ".";
import { createElement } from "../../../tools";

export function table({ headers, data, classes }) {
  // Create the container
  const tableContainer = container({ customClasses: classes });

  // Create the table headers
  const headersArr = headers.map((header) => {
    return createElement({
      el: "th",
      classes: "py-2 px-4",
      text: header,
    });
  });

  const tHeadRow = createElement({ el: "tr", children: headersArr });

  const tHead = createElement({
    el: "thead",
    classes: "border-blue-500 bg-blue-500 text-white text-left",
    children: [tHeadRow],
  });

  // Create the table body rows
  const dataRows = data.map((item) => {
    const rowData = headers.map((key) => {
      if (typeof item[key] === "string") {
        return createElement({
          el: "td",
          classes: "py-2 px-4",
          text: item[key], // Use the data item's property based on the header
        });
      } else {
        return createElement({
          el: "td",
          classes: "py-2 px-4",
          children: [item[key]], // Use the data item's property based on the header
        });
      }
    });

    return createElement({
      el: "tr",
      children: rowData,
      classes: "border-b border-zinc-300",
    });
  });

  const tBody = createElement({ el: "tbody", children: dataRows });

  // Create the table element
  const table = createElement({
    el: "table",
    classes: "border-collapse min-w-full table-auto",
    children: [tHead, tBody],
  });

  tableContainer.appendChild(table);

  return tableContainer;
}
