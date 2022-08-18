import React, {
  useState,
  useContext,
  createContext,
  Dispatch,
  SetStateAction,
} from 'react';

/**
 * [memo]
 * カウントの値と変更するための関数を 1 つのオブジェクトとしてプロバイドすると
 * setGlobalSpinner 関数自体は毎回同じでも、 isGlobalSpinnerOn が変わるごとに新しいオブジェクトが生成されてしまうので、
 * isGlobalSpinnerOn に依存していないコンポーネントもそれに引きづられてレンダリングされてしまうため、
 * 値と変更するための関数でそれぞれ Context を分けている
 */

// Contextの定義
const GlobalSpinnerContext = createContext<boolean>(false);
const GlobalSpinnerActionsContext = createContext<
  Dispatch<SetStateAction<boolean>>
  // eslint-disable-next-line @typescript-eslint/no-empty-function
>(() => {});

// グローバルスピナーの値(表示・非表示)を保持するカスタムフック
export const useGlobalSpinnerContext = (): boolean =>
  useContext<boolean>(GlobalSpinnerContext);

// グローバルスピナーの表示・非表示のアクションを保持するカスタムフック
export const useGlobalSpinnerActionsContext = (): Dispatch<
  SetStateAction<boolean>
> => useContext<Dispatch<SetStateAction<boolean>>>(GlobalSpinnerActionsContext);

interface GlobalSpinnerContextProviderProps {
  children?: React.ReactNode;
}

/**
 * グローバルスピナーコンテキストプロバイダー
 */
const GlobalSpinnerContextProvider = ({
  children,
}: GlobalSpinnerContextProviderProps) => {
  const [isGlobalSpinnerOn, setGlobalSpinner] = useState(false);

  return (
    <GlobalSpinnerContext.Provider value={isGlobalSpinnerOn}>
      <GlobalSpinnerActionsContext.Provider value={setGlobalSpinner}>
        {children}
      </GlobalSpinnerActionsContext.Provider>
    </GlobalSpinnerContext.Provider>
  );
};

export default GlobalSpinnerContextProvider;
