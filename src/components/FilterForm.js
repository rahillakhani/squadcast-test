import React from "react";

import { Form, Button, Space, Select } from "antd";
import { PlusOutlined, MinusCircleOutlined } from "@ant-design/icons";
const { Option } = Select;

//@ATT:this was created to make nested dynamic elements! This is hard!
const FilterForm = props => {
    return (
        <>
            <Form.List name={[props.fieldKey, "beds"]}>
                {(beds, { add, remove }) => {
                    return (
                        <div>
                            {beds.map((bed, index2) => (
                                <Space
                                    key={bed.key}
                                    style={{ display: "flex", marginBottom: 8 }}
                                    align="start"
                                >
                                    <Form.Item
                                        // name={"aar"}
                                        {...bed}
                                        name={[bed.name, "bed"]}
                                        fieldKey={[bed.fieldKey, "bed"]}
                                        key={index2}
                                        // noStyle
                                        rules={[
                                            {
                                                required: true,
                                                message: "Beds Missing"
                                            }
                                        ]}
                                    >
                                        <Select placeholder="Please select a Bed Type">
                                            <Option value="double">Double(2 person)</Option>
                                            <Option value="single">Single (1 person)</Option>
                                            <Option value="king">King Size (2 person)</Option>
                                            <Option value="queen">Queen Size (2 person)</Option>
                                            <Option value="Bunk">Bunk Bed (1 person)</Option>
                                            <Option value="sofa">Sofa Bed (1 person)</Option>
                                        </Select>
                                    </Form.Item>
                                    <MinusCircleOutlined
                                        onClick={() => {
                                            remove(bed.name);
                                        }}
                                    />
                                </Space>
                            ))}
                            <Form.Item>
                                <Button
                                    type="dashed"
                                    onClick={() => {
                                        add();
                                    }}
                                >
                                    <PlusOutlined /> Add Bed
                                </Button>
                            </Form.Item>
                        </div>
                    );
                }}
            </Form.List>
        </>
    );
};

export default FilterForm;
