import React from 'react';

const ColourSelector = (props) => {
  const { config, selectNextBackground } = props
  const { background } = config;
  return (
    <button style={{backgroundColor: background}} onClick={() => selectNextBackground({background: background})}>
      {/* label should come here */}
      {config.label}
    </button>
  )
}
export default ColourSelector;
