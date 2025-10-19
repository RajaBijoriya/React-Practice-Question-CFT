import "./App.css";
import ColorChanger from "./REACT SMALL TASKS/Components/ColorChanger";
import Counter from "./REACT SMALL TASKS/Components/Counter";
import EditableToDoList from "./REACT SMALL TASKS/Components/EditableToDoList";
import FilterableList from "./REACT SMALL TASKS/Components/FilterableList";
import InputFieldDisplay from "./REACT SMALL TASKS/Components/InputFieldDisplay";
import LikeButton from "./REACT SMALL TASKS/Components/LikeButton";
import NestedObject from "./REACT SMALL TASKS/Components/NestedObject";
// import MultiCheckBox from "./REACT SMALL TASKS/Components/MultiCheckBox";
import ShowHide from "./REACT SMALL TASKS/Components/ShowHide";
import SimpleToDo from "./REACT SMALL TASKS/Components/SimpleToDo";
import StepWizard from "./REACT SMALL TASKS/Components/StepWizard";
import ToggleButton from "./REACT SMALL TASKS/Components/ToggleButton";

function App() {
  return (
    <div>
      {/* 1. Counter Component Create a component with a number displayed and two
      buttons: one to increment the number by 1 and one to decrement it by 1.
      Use useState to manage the count.
      <Counter/> */}
      {/* 2. Toggle Button Build a button that toggles between "ON" and "OFF" text
      when clicked. Use useState to track the toggle state.
      <ToggleButton /> */}
      {/* 3. Input Field Display Create an input field where the user can type text,
      and display the entered text below the input in real-time. Use useState to
      store the input value.
      <InputFieldDisplay/> */}
      {/* 4. Show/Hide Text Make a button that toggles the visibility of a paragraph
      of text. Use useState to manage the visibility state.
      <ShowHide/> */}
      {/* 5. Color Changer Create a button that changes the background color of a
      div to a random color from a predefined array when clicked. Use useState
      to store the current color.
      <ColorChanger/> */}
      {/* 6. Simple To-Do List Build a component with an input field and an "Add"
      button. When the button is clicked, add the input text to a list displayed
      below. Use useState for the input and list.

      <SimpleToDo/> */}
      {/* 7. Like Button Create a button that displays a "Like" count starting at 0.
      Clicking the button increments the count. Use useState to manage the
      count.
      <LikeButton /> */}
      {/* 8. Filterable List Create a list of items with an input field to filter
      the list based on user input (e.g., filter by item name). Use useState for
      the filter input and the filtered list. */}
      {/* <FilterableList/> */}
      {/* 9. Multi-Select Checkboxes Build a component with multiple checkboxes.
      Display a list of all selected checkbox values below. Use useState to
      track the array of selected values */}
      {/* <MultiCheckBox/> */}
      {/* 10. Step Wizard Create a multi-step form with "Next" and "Previous"
      buttons to navigate between 3 steps. Display the current step number and
      content. Use useState to track the current step */}
      {/* <StepWizard/> */}
      {/* 1. Nested Object Form
 Create a form to manage a nested object (e.g., { user: { name: "",
 address: { street: "", city: "" } } }). Allow updating all fields and display the
 current object. Use useState with deep updates. */}
      {/* <NestedObject/> */}
      {/* 2. Editable To-Do List Build a to-do list where each item can be edited in
      place by clicking an "Edit" button, then saved or canceled. Use useState
      for the list and editing state. */}

      <EditableToDoList/>
    </div>
  );
}

export default App
