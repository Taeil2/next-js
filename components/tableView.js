import {Button, DatePicker, Input} from 'antd'

export default function Orders(props) {
  return (
    <div>
        <h1>{props.title}</h1>
        <p>{props.data}</p>
        <Button type="primary">button</Button>
        <DatePicker />
        <Input />
    </div>
  )
}
