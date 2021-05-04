import React from "react";

export const ColorfulMessage = (props) => {
  // 分割代入
  const { color, children } = props;

  //style
  const contentStyle = {
    // color: color,
    color, // 同じプロパティ名なら省略可
    fontSize: "18px" //文字のつなぎ目は大文字
  };

  // return <p style={contentStyle}>{props.message}</p>;
  return <p style={contentStyle}>{children}</p>;
};

// export default colorfulMessage;
// もしくは直接　export する
