import React from "react"
import TaskChecklist from "../../App/TaskChecklist"

const Description = ({ toggleFinishedTask }) => {
  return (
    <div>
      <TaskChecklist
        toggleFinishedTask={toggleFinishedTask}
        localStorageKey="context"
      >
        <span>
          Review{" "}
          <a
            href="https://reactjs.org/docs/context.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            the docs for React.context.
          </a>
        </span>
        <span>
          Edit <code>src/1_Context/ThemeProviderContainer.js</code> to pass down
          a single value&mdash;<code>theme</code>&mdash; anywhere in the tree.
        </span>
        <span>
          Edit the <code>src/1_Context/ThemedText.js</code> component to ingest
          the theme context passed down and render the correct text style.
        </span>
        <span>
          Confirm that the behavior of the <code>Task</code> component and the{" "}
          <code>Expected behavior</code>
          component are identical.
        </span>
      </TaskChecklist>
    </div>
  )
}

export default Description
