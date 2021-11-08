import React from "react";
import { useForm } from "react-hook-form";
import { Input, Button, Form, Space } from "antd";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import FormControl from "../components/FormControl";
import BedForm from "../components/BedForm";
import "./FilterContainer.scss";

const FilterContainer = () => {
    const { errors } = useForm({
        guest: 0
    });

    const onSubmit = (data) => {
        console.log(data);
    };
    return (<Form onFinish={(e) => onSubmit(e)}>
        {/*<FormContent>*/}
            <header>
                <h3>Step 1: Start with the basics</h3>
            </header>
            <FormControl
                label="How many rooms does your listing have?"
                error={errors?.guest && <span>This field is required!</span>}
            >
                {/* This is the Dynamic room Adder */}
                <Form.List name="rooms">
                    {(fields, { add, remove }) => {
                        return (
                            <div>
                                {fields.map((field) => (
                                    <Space
                                        key={field.key}
                                        style={{ display: "flex", marginBottom: 8 }}
                                        align="start"
                                    >
                                        <Form.Item
                                            {...field}
                                            name={[field.name, "roomname"]}
                                            fieldKey={[field.fieldKey, "roomname"]}
                                            rules={[
                                                { required: true, message: "Missing room name" }
                                            ]}
                                        >
                                            <Input placeholder="Room Name" />
                                        </Form.Item>

                                        {/* This is the Dynamic bed Adder */}

                                        <Form.Item>
                                            <BedForm fieldKey={field.name} />
                                        </Form.Item>

                                        <MinusCircleOutlined
                                            onClick={() => {
                                                remove(field.name);
                                                console.log(field);
                                            }}
                                        />
                                    </Space>
                                ))}

                                <Button
                                    type="dashed"
                                    onClick={() => {
                                        add();
                                    }}
                                    block
                                >
                                    <PlusOutlined /> Add room
                                </Button>
                            </div>
                        );
                    }}
                </Form.List>
            </FormControl>
        {/*</FormContent>*/}

        {/*<FormAction>*/}
            <div className="inner-wrapper">
                <Button type="primary" htmlType="submit">
                    Next
                </Button>
            </div>
        {/*</FormAction>*/}
    </Form>);
};

export default FilterContainer;
