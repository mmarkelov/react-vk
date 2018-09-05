import PropTypes from "prop-types";

const vk = PropTypes.shape({
  Api: PropTypes.object,
  Widgets: PropTypes.object,
  init: PropTypes.func,
  api: PropTypes.func
});

export default vk;
