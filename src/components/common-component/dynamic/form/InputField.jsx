import React from 'react';
import { Form, Input } from "antd";


const InputField = (props) => {
    const {fieldName, placeHolder, rules, dependencies, changeType, className, suffix, prefix} = props
    return (
        <>
        <Form.Item  name={fieldName} rules={rules} dependencies={dependencies}>
          <Input
          type={changeType?'password':""}
            placeholder={placeHolder}
            className={!className ? "input_User_Field" : className}
            style={{
              width: "100%",
              backgroundColor: fieldName === "message" ? "white" : "",
            }}
            suffix={suffix?suffix:""}
            prefix={prefix?prefix:""}
            // value="raheel"
            // defaultValue={defaultValue}
            // value={defaultValue}
      
          />
        </Form.Item>
      </>
  )
}

export default InputField
