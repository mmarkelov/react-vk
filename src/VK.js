import React from 'react';
import PropTypes from 'prop-types';

export class VK extends React.Component {
  static propTypes = {
    apiId: PropTypes.number.isRequired,
    options: PropTypes.shape({
      version: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    }),
    onApiAvailable: PropTypes.func,
  };

  static defaultProps = {
    options: {
      version: 150,
    },
    onApiAvailable: () => {},
  };

  state = {
    vk: null,
    isLoaded: false,
  };

  componentDidMount() {
    const { onApiAvailable } = this.props;
    if (document.getElementById('vk-jssdk')) {
      return;
    }

    if (
      !!(
        typeof window !== 'undefined' &&
        window.document &&
        window.document.createElement
      )
    ) {
      this.init()
        .then(api => {
          onApiAvailable(api);
          this.setState({ vk: api, isLoaded: true });
        })
        .catch(err => {
          throw new Error('Error during response.');
        });
    }
  }

  fetchScript = url => {
    return new Promise((resolve, reject) => {
      const el = document.createElement('script');
      el.onload = resolve;
      el.onerror = reject;
      el.type = 'text/javascript';
      el.src = url;
      el.async = true;
      el.id = 'vk-jssdk';
      document.getElementsByTagName('head')[0].appendChild(el);
    });
  };

  init() {
    if (this.loadingPromise) {
      return this.loadingPromise;
    }

    this.loadingPromise = new Promise((resolve, reject) => {
      const { apiId, options } = this.props;

      if (!apiId) {
        throw new Error('You need to set apiId');
      }

      window.vkAsyncInit = () => {
        window.VK.init({
          apiId: apiId,
        });

        resolve(window.VK);
      };

      if (document.getElementById('vk-jssdk')) {
        return;
      }

      this.fetchScript(
        `https://vk.com/js/api/openapi.js?${options.version}`
      ).catch(reject);
    });

    return this.loadingPromise;
  }

  render() {
    const { vk, isLoaded } = this.state;
    const childrenWithProps = React.Children.map(this.props.children, child =>
      React.cloneElement(child, {
        vk: vk,
      })
    );
    return isLoaded ? <div>{childrenWithProps}</div> : null;
  }
}
