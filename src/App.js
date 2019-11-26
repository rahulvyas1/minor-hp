import React, { useState } from "react";
import {
  Typography,
  Form,
  Select,
  InputNumber,
  DatePicker,
  Switch,
  Slider,
  Button
} from "antd";
import "./App.css";

const { Option } = Select;
const { Title, Text } = Typography;

const App = () => {
  const [so, setSo] = useState("pso");
  const [func, setFunc] = useState("1");
  const [ans, setAns] = useState(0.0);

  const handleChangeSo = (val)=>{
    setSo(val);
    console.log(so)
  }

  const handleChangeFunc = (val)=>{
    setFunc(val);
    console.log(func)
  }

  const handleSubmit = (e)=>{
    e.preventDefault();
    setAns(0.0)
	if(so == 'pso' && func == '1')
		setAns(3.2)

  }

  return (
    <div style={{ textAlign: `center`, maxWidth: `900px`, margin: `0 auto` }}>
      <Title>Swarm Optimization Toolkit</Title>

      <Form style={{ marginTop: 32, textAlign: `left` }} onSubmit={e=>{handleSubmit(e)}}>
        <div style={{ display: `flex`, justifyContent: `space-between` }}>
          <Form.Item
            label="Swarm Optimization Algorithm"
            labelCol={{ span: 12 }}
            wrapperCol={{ span: 12 }}
          >
            <Select defaultValue="pso" style={{ width: 192 }} onChnage={e=>{handleChangeSo(e)}}>
              <Option value="pso">PSO</Option>
              <Option value="gwo">GWO</Option>
              <Option value="ba">BA</Option>
              <Option value="aco">ACO</Option>
            </Select>
          </Form.Item>
          <Form.Item
            label="Benchmark Functions"
            labelCol={{ span: 12 }}
            wrapperCol={{ span: 12 }}
          >
            <Select defaultValue="1" style={{ width: 192 }} onChange={e=>{handleChangeFunc(e)}}>
              <Option value="1">Function 1</Option>
              <Option value="2">Function 2</Option>
              <Option value="3">Function 3</Option>
              <Option value="4">Function 4</Option>
            </Select>
          </Form.Item>
        </div>

        <Form.Item
          label="Number of Agents"
          labelCol={{ span: 12 }}
          wrapperCol={{ span: 12 }}
        >
          <InputNumber min={1} max={10} defaultValue={3} />
        </Form.Item>
        <Form.Item
          label="Lower limit"
          labelCol={{ span: 12 }}
          wrapperCol={{ span: 12 }}
        >
          <InputNumber min={1} max={10} defaultValue={3} />
        </Form.Item>
        <Form.Item
          label="Upper limit"
          labelCol={{ span: 12 }}
          wrapperCol={{ span: 12 }}
        >
          <InputNumber min={1} max={10} defaultValue={3} />
        </Form.Item>
        <Form.Item
          label="Space Dimention"
          labelCol={{ span: 12 }}
          wrapperCol={{ span: 12 }}
        >
          <InputNumber min={1} max={3} defaultValue={2} />
        </Form.Item>
        <Form.Item
          label="Number of iterations"
          labelCol={{ span: 12 }}
          wrapperCol={{ span: 12 }}
        >
          <InputNumber min={1} max={3} defaultValue={100} />
        </Form.Item>
        <Form.Item
          label="Optimum Solution"
          labelCol={{ span: 12 }}
          wrapperCol={{ span: 12 }}
        >
          <Text>{ans} </Text>
        </Form.Item>

        <Form.Item wrapperCol={{ span: 8, offset: 8 }}>
          <Button type="primary" htmlType="submit" block>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default App;
