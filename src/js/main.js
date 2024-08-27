import modals from "./modules/modals";
import timer from "./modules/timer";
import tabs from "./modules/tabs";

let deadLine = "2024-08-29";
modals();
timer(deadLine);
tabs(".glazing_slider", ".glazing_block", ".glazing_content", "active");
tabs(
  ".decoration_slider",
  ".no_click",
  ".decoration_contenr > div > div",
  "after-click"
);
