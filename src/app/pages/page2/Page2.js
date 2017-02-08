/**
 * User: xpliu
 * Date: 2017/2/8 15:06
 * 创建原因：
 */
import React, { Component } from 'react';
import '../../styles/page2.scss';
import Input from 'antd/lib/input';
import DatePicker from 'antd/lib/date-picker';
import Button from 'antd/lib/button';
const { MonthPicker, RangePicker } = DatePicker;


export default class Page2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      ffff:''
    };
  }

  handleChange(e){
    this.setState({name: e.target.value});
    console.log(e.target.value);
  }

  onChange(date, dateString) {
    console.log(date, dateString);
  }

  componentDidMount() {
    console.log("ffffff");
    console.log("dada");
  }

  render() {
    return (
        <div>
          <h1>Hey, there! {this.state.name}</h1>
          <Input onChange={e=>{this.handleChange(e)}} />
          <div>
            <DatePicker onChange={this.onChange} />
            <br />
            <MonthPicker onChange={this.onChange} />
            <br />
            <RangePicker onChange={this.onChange} />
          </div>

          <div>
            <Button type="primary">Primary</Button>
            <Button>Default</Button>
            <Button type="ghost">Ghost</Button>
            <Button type="dashed">Dashed</Button>
          </div>
        </div>
    );
  }
}