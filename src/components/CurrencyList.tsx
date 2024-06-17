import * as React from "react";
import { DownOutlined } from '@ant-design/icons';
import { Select, Typography, Space } from 'antd';
import currencyOptions from '../data/Currencies.json'

const MAX_COUNT = 3;
const { Title } = Typography;
const STORAGE_KEY = 'selectedCurrencies';

const CurrencyList: React.FC = () => {
  const [value, setValue] = React.useState<string[]>(() => {
    const storedValue = localStorage.getItem(STORAGE_KEY);
    return storedValue ? JSON.parse(storedValue) : [];
  });

  const handleChange = (newValue: string[]) => {
    setValue(newValue);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newValue));
  };

  const suffix = (
    <>
      <span>
        {value.length} / {MAX_COUNT}
      </span>
      <DownOutlined />
    </>
  );

  return (
    <>
    <Title level={4}>最多可以选择3种货币</Title>
    <Select
      mode="multiple"
      maxCount={MAX_COUNT}
      value={value}
      style={{ width: '100%' }}
      onChange={handleChange}
      suffixIcon={suffix}
      placeholder="Please select"
      options={currencyOptions}
      optionRender={(option) => (
        <Space>
          <span role="img" aria-label={option.data.label}>
            {option.data.emoji}
          </span>
          {option.data.symbol} {option.data.label}
        </Space>
      )}
    />
    </>
  );
};

export default CurrencyList;