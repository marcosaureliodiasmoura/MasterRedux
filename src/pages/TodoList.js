import React from "react";

import { View, Text, Button } from "react-native";

import { connect } from "react-redux";

//Importa todos os imports de uma vez com * as
import * as TodosActions from "../store/actions/todos";

//Uma função que vai colocar o dispatch em cada uma das actions
import { bindActionCreators } from "redux";

//Meu componente agora tem acesso as propriedade addTodo e markAsCompleted do meu mapDispatch
const TodoList = ({ todos, addTodo, markAsCompleted }) => (
  <View style={{ flex: 1, backgroundColor: "#FFF", justifyContent: "center" }}>
    {todos.map(todo => (
      <Text //Se o meu todo for completed true irei adicionar uma linha, senão farei nada
        onPress={() => markAsCompleted(todo.id)}
        style={{ textDecorationLine: todo.completed ? "line-through" : "none" }}
        key={todo.id}
      >
        {todo.text}
      </Text>
    ))}
    <Button
      onPress={addTodo} //chamo
      title="Adicionar todo"
      color="#c4c"
    />
  </View>
);

const mapStateToProps = state => ({
  todos: state
});

//Com o bindActionCreators, eu coloco o dispatch em cada uma das actions que tenho
const mapDispatchToProps = dispatch =>
  bindActionCreators(TodosActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
