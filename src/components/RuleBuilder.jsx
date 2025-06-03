import React from 'react';

const RuleBuilder = ({ rule, index, onChange }) => {
  return (
    <div className="flex gap-2 mb-2">
      <input
        className="border p-2 w-1/3"
        placeholder="Field"
        value={rule.field}
        onChange={(e) => onChange(index, 'field', e.target.value)}
      />
      <select
        className="border p-2 w-1/3"
        value={rule.operator}
        onChange={(e) => onChange(index, 'operator', e.target.value)}
      >
        <option value="">Operator</option>
        <option value=">">&gt;</option>
        <option value="<">&lt;</option>
        <option value=">=">&gt;=</option>
        <option value="<=">&lt;=</option>
        <option value="==">==</option>
      </select>
      <input
        className="border p-2 w-1/3"
        placeholder="Value"
        value={rule.value}
        onChange={(e) => onChange(index, 'value', e.target.value)}
      />
    </div>
  );
};

export default RuleBuilder;