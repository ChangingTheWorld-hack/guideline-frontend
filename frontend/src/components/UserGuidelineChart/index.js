import React, { PureComponent } from "react";
import cytoscape from "cytoscape";
import { cytoscapeConfig } from "./config";
import "./UserGuidelineChart.scss";

const getCytoscape = (container, initialElements) =>
  cytoscape({
    container,
    elements: {
      nodes: initialElements.nodes.map(({ data, position }) => ({
        data,
        position: {
          x: position ? position.x : 0,
          y: position ? position.y : 0
        }
      })),
      edges: initialElements.edges
    },
    ...cytoscapeConfig
  });

class UserGuidelineChart extends PureComponent {
  state = {
    zoom: 1
  };

  chart = React.createRef();

  cy = cytoscape();

  componentDidMount() {
    this.init();
  }

  init = () => {
    const { data } = this.props;
    const { zoom } = this.state;

    this.cy = getCytoscape(this.chart.current, data);

    this.cy.on("click", "node", event => {
      const node = event.target;
      this.cy.elements().removeClass("node--selected");
      node.addClass("node--selected");
    });

    this.cy.zoom(zoom);
    this.cy.center();
  };

  render() {
    return (
      <div className="user-guideline-chart">
        <div className="user-guideline-chart__chart" ref={this.chart} />
      </div>
    );
  }
}

export default UserGuidelineChart;
