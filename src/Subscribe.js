import React, { useContext, useEffect } from "react";
import PropTypes from "prop-types";
import VKContext from "./VKContext";

const Subscribe = ({
  elementId,
  options,
  ownerId,
  onSubscribe,
  onUnsubscribe
}) => {
  const vk = useContext(VKContext);

  useEffect(() => {
    vk.Widgets.Subscribe(elementId, options, ownerId);
    vk.Observer.subscribe("widgets.subscribed", onSubscribe);
    vk.Observer.subscribe("widgets.unsubscribed", onUnsubscribe);

    return () => {
      vk.Observer.unsubscribe("widgets.subscribed");
      vk.Observer.unsubscribe("widgets.unsubscribed");
    };
  }, []);

  return <div id={elementId} />;
};

Subscribe.propTypes = {
  elementId: PropTypes.string,
  options: PropTypes.shape({
    mode: PropTypes.number,
    soft: PropTypes.number
  }),
  ownerId: PropTypes.number.isRequired,
  onSubscribe: PropTypes.func,
  onUnsubscribe: PropTypes.func
};

Subscribe.defaultProps = {
  elementId: "vk_subscribe",
  options: {
    mode: 0,
    soft: 0
  },
  onSubscribe: () => {},
  onUnsubscribe: () => {}
};

export default Subscribe;
