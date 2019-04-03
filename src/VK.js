/* eslint-disable no-underscore-dangle */
import React from "react";
import PropTypes from "prop-types";

import VKContext from "./VKContext";
import VKApi from "./API";

import { isDOMReady } from "./utils";

let VKInstance = null;

export default class VK extends React.Component {
  _mounted = true;

  static propTypes = {
    apiId: PropTypes.number,
    options: PropTypes.shape({
      version: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
      onlyWidgets: PropTypes.bool
    }),
    onApiAvailable: PropTypes.func
  };

  static defaultProps = {
    apiId: null,
    options: {
      version: 160,
      onlyWidgets: true
    },
    onApiAvailable: () => {}
  };

  state = { vk: null };

  componentDidMount() {
    const { onApiAvailable, apiId } = this.props;
    if (isDOMReady()) {
      this.VKinit().then(vk => {
        onApiAvailable(vk);
        if (apiId) {
          vk.init({
            apiId
          });
        }
        if (this._mounted) this.setState({ vk });
      });
    }
  }

  componentWillUnmount() {
    this._mounted = false;
  }

  VKinit() {
    const { apiId, options } = this.props;

    if (!this.vk) {
      this.vk = VKInstance || new VKApi(apiId, options);
      VKInstance = this.vk;
    }

    return this.vk.init();
  }

  render() {
    const { vk } = this.state;
    const { children } = this.props;
    return vk ? (
      <VKContext.Provider value={{ vk }}>{children}</VKContext.Provider>
    ) : null;
  }
}
