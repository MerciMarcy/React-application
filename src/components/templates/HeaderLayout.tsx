import { memo, ReactNode, VFC } from "react";

import { Header } from "../organisms/layout/Header";

type Props = {
  // ReactNode:タグ<>で囲った要素を宣言できる
  children: ReactNode;
};

export const HeaderLayout: VFC<Props> = memo((props) => {
  const { children } = props;
  return (
    <>
      <Header />
      {children}
    </>
  );
});
