import React, { useContext, useEffect } from "react";
import PropTypes from "prop-types";
import VKContext from "./VKContext";

const Group = ({ elementId, options, groupId, onJoin, onLeave }) => {
  const vk = useContext(VKContext);

  useEffect(() => {
    vk.Widgets.Group(elementId, options, groupId);
    vk.Observer.subscribe("widgets.groups.joined", onJoin);
    vk.Observer.subscribe("widgets.groups.leaved", onLeave);

    return () => {
      vk.Observer.unsubscribe("widgets.groups.joined");
      vk.Observer.unsubscribe("widgets.groups.leaved");
    };
  }, []);

  return <div id={elementId} />;
};

Group.propTypes = {
  elementId: PropTypes.string,
  groupId: PropTypes.number.isRequired,
  options: PropTypes.shape({
    height: PropTypes.number,
    mode: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    no_cover: PropTypes.oneOf([0, 1]),
    wide: PropTypes.oneOf([0, 1]),
    color1: PropTypes.string,
    color2: PropTypes.string,
    color3: PropTypes.string,
    pageImage: PropTypes.string
  }),
  onJoin: PropTypes.func,
  onLeave: PropTypes.func
};

Group.defaultProps = {
  elementId: "vk_groups",
  options: {
    width: "auto",
    mode: 3,
    no_cover: 1,
    wide: 1
  },
  onJoin: () => {},
  onLeave: () => {}
};

export default Group;
