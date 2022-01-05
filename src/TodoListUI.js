import React, { Component } from 'react'

import { Input, Button, List } from 'antd';

const TodoListUI = (props) => {
  return (
    <div
      style={{
        marginTop: '10px',
        marginLeft: '10px'
      }}
    >
      <div>
        <Input
          placeholder="Basic usage"
          style={{
            width: '300px',
            marginRight: '10px'
          }}
          value={ props.inputValue }
          onChange={ props.handleInputValue }
        />
        <Button
          type="primary"
          onClick={ props.handleBtnClick }
        >提交</Button>
      </div>
      <List
        style={{
          marginTop: '10px',
          width: '300px'
        }}
        bordered
        dataSource={ props.list }
        renderItem={(item, index) => (
          <List.Item onClick={ (index) => { props.handleItemDelete(index)  } }>{item}</List.Item>
        )}
      />
    </div>
  )
}


export default TodoListUI