export const cytoscapeConfig = {
  boxSelectionEnabled: false,
  autounselectify: true,

  style: [
    {
      selector: "node",
      style: {
        content: "data(label)",
        "background-color": "#526cf0"
      }
    },
    {
      selector: ".node--selected",
      style: {
        "border-width": 2
      }
    },
    {
      selector: "edge",
      style: {
        "curve-style": "bezier",
        "target-arrow-shape": "triangle",
        width: 2,
        "line-color": "#595959",
        "target-arrow-color": "#595959"
      }
    }
  ],

  zoom: 1,
  minZoom: 0.33,
  maxZoom: 3,

  layout: {
    name: "preset"
  }
};
