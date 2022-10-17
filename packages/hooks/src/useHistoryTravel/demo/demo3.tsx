/**
 * title: Limit history size
 * desc: Limit the maximum number of history records to avoid excessive memory consumption.
 *
 * title.zh-CN: 限制历史记录大小
 * desc.zh-CN: 限制最大历史记录数量,避免过度占用内存。
 */

import { useHistoryTravel } from 'ahooks';
import React from 'react';

export default () => {
  const maxSize = 3;
  const { value, setValue, backLength, forwardLength, back, forward } = useHistoryTravel<string>(
    '',
    maxSize,
  );

  return (
    <div>
      <div>maxSize: {maxSize}</div>
      <div>backLength: {backLength}</div>
      <div>forwardLength: {forwardLength}</div>
      <input value={value || ''} onChange={(e) => setValue(e.target.value)} />
      <button disabled={backLength <= 0} onClick={back} style={{ margin: '0 8px' }}>
        back
      </button>
      <button disabled={forwardLength <= 0} onClick={forward}>
        forward
      </button>
    </div>
  );
};
