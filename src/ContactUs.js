import React from 'react';
import PropTypes from 'prop-types';

export class ContactUs extends React.Component {
  static propTypes = {
    elementId: PropTypes.string,
    options: PropTypes.shape({
      text: PropTypes.string,
      height: PropTypes.number,
    }),
    ownerId: PropTypes.number.isRequired,
  };

  static defaultProps = {
    elementId: 'vk_contact_us',
    options: {
      height: 24,
    },
  };

  mount() {
    const { vk, elementId, options, ownerId } = this.props;
    vk.Widgets.ContactUs(elementId, options, -ownerId);
  }

  componentDidMount() {
    this.mount();
  }

  render() {
    const { elementId } = this.props;
    return <div id={elementId} />;
  }
}
