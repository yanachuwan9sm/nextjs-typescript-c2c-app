import { useCallback, useState } from 'react';
import styled from 'styled-components';

/**
 * TextAreaコンポーネントが受け取るプロパティの型を定義
 */
export type TextAreaProps =
  React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
    /**
     * 最小行数
     */
    minRows?: number;
    /**
     * 最大行数
     */
    maxRows?: number;
    /**
     * バリデーションエラーフラグ
     */
    hasError?: boolean;
  };

/**
 * スタイルを適用
 */
const StyledTextArea = styled.textarea<{ hasError?: boolean }>`
  color: ${({ theme }) => theme.colors.inputText};
  border: 1px solid
    ${({ theme, hasError }) =>
      hasError ? theme.colors.danger : theme.colors.border};
  border-radius: 5px;
  box-sizing: border-box;
  outline: none;
  width: 100%;
  font-size: 16px;
  line-height: 24px;
  padding: 9px 12px 10px 12px;
  resize: none;
  overflow: auto;
  height: auto;
  &::placeholder {
    color: ${({ theme }) => theme.colors.placeholder};
  }
`;

/**
 * テキストエリア
 */
const TextArea = (props: TextAreaProps) => {
  const {
    rows = 5,
    minRows = 5,
    maxRows = 10,
    children,
    hasError,
    onChange,
    ...rest
  } = props;
  const [textareaRows, setTextareaRows] = useState(Math.min(rows, minRows));

  console.assert(
    !(rows < minRows),
    'TextArea: rows should be greater than minRows.'
  );

  /**
   * 入力値が変化した際に発生するコールバック関数
   */
  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      const textareaLineHeight = 24;
      const previousRows = e.target.rows;

      e.target.rows = minRows; // 行数のリセット

      // スクロール分を含めた高さとLineHeightから現在表示している行数を取得
      const currentRows = Math.floor(
        e.target.scrollHeight / textareaLineHeight
      );

      if (currentRows === previousRows) {
        e.target.rows = currentRows;
      }

      if (currentRows >= maxRows) {
        e.target.rows = maxRows;
        e.target.scrollTop = e.target.scrollHeight;
      }

      // 最大を超えないように動的に行数をセット
      setTextareaRows(currentRows < maxRows ? currentRows : maxRows);
      onChange && onChange(e);
    },
    [onChange, minRows, maxRows]
  );

  return (
    <StyledTextArea
      hasError={hasError}
      onChange={handleChange}
      aria-label={rest.placeholder}
      rows={textareaRows}
      {...rest}
    >
      {children}
    </StyledTextArea>
  );
};

TextArea.defaultProps = {
  rows: 5,
  minRows: 5,
  maxRows: 10,
};

export default TextArea;
