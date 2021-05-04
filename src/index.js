// Reactからreactをインポート
import React from "react";
// Reacr17〜　JSXを使用するだけの場合、reactのimportは必須ではない

// HTMLにコンポーネントを反映
import ReactDom from "react-dom";

// App　をインポート
import App from "./App";
// 画面に反映
ReactDom.render(<App />, document.getElementById("root"));
