/* eslint react-hooks/exhaustive-deps: off */

import React, { useEffect, useState } from "react";
// export default でimport する場合
// import ColorfulMessage from "./components/ColofulMessage";
// export で設定した場合
import { ColorfulMessage } from "./components/ColofulMessage";

// コンポーネント化
// JSX記法
// 再レンダリングが動くとコンポーネントがその都度に読み込まれる。
const App = () => {
  //count up
  // [変数, 更新関数] ＝ 定義（初期値）
  const [num, setNum] = useState(0);
  // on/off
  const [faceShowFlag, setFaceShowFlag] = useState(false);

  const onClickCountUp = () => {
    setNum(num + 1);
  };

  const onClickSwitchFlag = () => {
    setFaceShowFlag(!faceShowFlag);
  };

  useEffect(
    () => {
      if (num > 0) {
        if (num % 3 === 0) {
          //以下の記述だと Error　Too many re-renders.　ループしてしまうため
          // setFaceShowFlag(true);
          // trueの場合はセットしない
          faceShowFlag || setFaceShowFlag(true);
        } else {
          // true の時だけセット
          faceShowFlag && setFaceShowFlag(false);
        }
      }
    },
    [num] // 第二引数に配列を指定できる。
    // 空の配列　を指定すると最初の一回だけリファクタリングしてくれる
    //　num を指定すると　num に値にだけ関心を持つようになる
    // /* eslint react-hooks/exhaustive-deps: off */ でエラーOFF
  );

  // if (num >0){
  //   if (num % 3 === 0) {
  //     //以下の記述だと Error　Too many re-renders.　ループしてしまうため
  //     // setFaceShowFlag(true);
  //     // trueの場合はセットしない
  //     faceShowFlag || setFaceShowFlag(true);
  //   } else {
  //     // true の時だけセット
  //     faceShowFlag && setFaceShowFlag(false);
  //   }
  // }

  return (
    // return の中身が複数の場合は（）で囲う
    //Adjacent JSX elements must be wrapped in an enclosing tag. Did you want a JSX fragment <>...</>?
    // JSXではHTML 一つのタグで囲う必要がある
    // divタグではなく React.Flagmentを使用するとよい
    // <React.Fragment> =>省略形 <>
    <>
      <h1 style={{ color: "red" }}>こんにちは</h1>　
      {/* red は文字列として''で囲う  => {{JSのオブジェクトとして読み込むため}} 
      
      // props を指定して使用
      {/* compornent名　渡したいpropsを記述 */}
      {/* <ColorfulMessage color="blue" message="お元気ですか？" /> */}
      {/* <ColorfulMessage color="pink" message="元気です!" /> */}
      {/* </ ColofulMessage>  閉じタグとしても使える*/}
      {/* <colorfulMessage props.color="blue">元気ですか</colorfulMessage>
      <colorfulMessage props.color="pink">元気です></colorfulMessage> */}
      <ColorfulMessage color="blue">元気ですか?</ColorfulMessage>
      <ColorfulMessage color="pink">元気です!</ColorfulMessage>
      <button onClick={onClickCountUp}>カウントアップ</button>
      <p> {num} </p>
      <button onClick={onClickSwitchFlag}>ON / OFF</button>
      {/* 左側がTrueである場合、右側を返す */}
      {faceShowFlag && <p> *ᴗ ᴗ)⁾⁾♡ </p>}
    </>
    // </React.Fragment>　=> </>
  );
};

//他のファイルでも使用するときに明示
export default App;

//拡張子　.jsx にするとReactのマークになる。　.jsでもOKだが、コンポーネント化をわかりやすくするために良い。
