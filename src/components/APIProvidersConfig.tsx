import React from "react";
import { Tabs } from 'antd';
import FreeCurrencyAPIForm from "./FreeCurrencyAPIForm";

const APIProvidersConfig: React.FC = () => {

  const [, setActiveTab] = React.useState<string>('')

  // 表格数据
  const items = [
    { key: 'FreeCurrencyAPI', label: 'FreeCurrencyAPI', children: <FreeCurrencyAPIForm /> },
    { key: 'Exchange', label: 'Exchange(Unavailable)', disabled: true },
    { key: 'XE', label: 'XE(Unavailable)', disabled: true },
  ];

  // 切换标签页
  const onTabChange = (key: string) => {
    setActiveTab(key);
  };

  return (
    <Tabs onChange={onTabChange} tabPosition={'left'} items={items}>
    </Tabs>
  );

};

export default APIProvidersConfig;