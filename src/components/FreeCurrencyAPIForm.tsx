import React from "react";
import { Button, Form, Input } from "antd";
import { FreeCurrencyAPI } from "../APIprovidersClass/FreeCurrencyAPI";

const FreeCurrencyAPIForm: React.FC = () => {

const [form] = Form.useForm();

const freeCurrencyAPI = FreeCurrencyAPI.getInstance();

React.useEffect(() => {
    freeCurrencyAPI.retrieveAPIData()
    .then(result => {
        form.setFieldsValue({
            url: result.url,
            key: result.key
        });
    })
    .catch(err => {
        console.log(err);
    });
}, [form]);

const onFinish = (values: any) => {
    freeCurrencyAPI.updateAPIData(values)
    .then(result => {
        console.log("Executing updateAPIData...");
        console.log(result);
    })
    .catch(err => {
    console.log(err);
    })
};

const testFunc = () => {
    console.log("test console.");
    freeCurrencyAPI.getCurrencyData('CNY', 'EUR,GBP').then(result => {
        console.log(result);
    }).catch(err => {
        console.log("Test failed, message: " + err);
    })
    // freeCurrencyAPI.getAll().then(result => {
    //     console.log(result);
    // }).catch(err => {
    //     console.log("Test failed, message: " + err);
    // });
}

return (
    <>
    <Form form={form} name="my_form" onFinish={onFinish} autoComplete="off">

    <Form.Item
        label="API_Provider_URL"
        name="url"
        rules={[{ required: true, message: 'Please input your FreeCurrency URL Key here.' }]}
    >
        <Input />
    </Form.Item>

    <Form.Item
        label="API_Key"
        name="key"
        rules={[{ required: true, message: 'Please input your FreeCurrency API Key here.' }]}
    >
        <Input />
    </Form.Item>

    <Form.Item>
        <Button type="primary" htmlType="submit">
        保存
        </Button>
    </Form.Item>

    <Form.Item>
        <Button type="primary" htmlType="button" onClick={testFunc}>
        测试
        </Button>
    </Form.Item>
    </Form>
    </>
);
};

export default FreeCurrencyAPIForm

