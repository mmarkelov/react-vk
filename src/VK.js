/* global window */
import React from "react";
import PropTypes from "prop-types";

import VKContext from "./VKContext";
import VKApi from "./API";

let VKInstance = null;

export default class VK extends React.Component {
  _mounted = true;

  static propTypes = {
    apiId: PropTypes.number.isRequired,
    options: PropTypes.shape({
      version: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
      onlyWidgets: PropTypes.bool
    }),
    onApiAvailable: PropTypes.func
  };

  static defaultProps = {
    options: {
      version: 158,
      onlyWidgets: true
    },
    onApiAvailable: () => {}
  };

  state = { vk: null };

  componentDidMount() {
    if (
      typeof window !== "undefined" &&
      window.document &&
      window.document.createElement
    ) {
      this.VKinit().then(vk => {
        if (this._mounted) this.setState({ vk });
      });
    }
  }

  componentWillUnmount() {
    this._mounted = false;
  }

  async VKinit() {
    const { apiId, options, onApiAvailable } = this.props;

    if (!this.vk) {
      this.vk = VKInstance || new VKApi(apiId, options);
      VKInstance = this.vk;
    }

    const vk = await this.vk.init();
    onApiAvailable(vk);
    return vk;
  }

  render() {
    const { vk } = this.state;
    return vk ? (
      <VKContext.Provider value={vk}>{this.props.children}</VKContext.Provider>
    ) : null;
  }
}
