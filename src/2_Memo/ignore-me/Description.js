import React from "react"
import TaskChecklist from "../../App/TaskChecklist"

const Description = ({ toggleFinishedTask }) => {
  return (
    <div>
      <TaskChecklist
        toggleFinishedTask={toggleFinishedTask}
        localStorageKey="memo"
      >
        <span>
          Review{" "}
          <a
            href="https://reactjs.org/docs/react-api.html#reactmemo"
            target="_blank"
            rel="noopener noreferrer"
          >
            the docs for React.memo.
          </a>
        </span>
        <span>
          <p>
            Notice how slowly the square is moving on the animated grid. This is
            because every time the board updates, React has to call the render
            function on every <code>GridSquare</code> component.
          </p>
          <p>
            <b>Note:</b> There is no "expected behavior" example for this task
            because the rendering would be too slow to notice a difference.{" "}
          </p>
        </span>
        <span>
          Use <code>React.memo</code> on the component in{" "}
          <code>src/2_Memo/GridSquare.js.</code>
        </span>
        <span>
          Confirm that the speed of the pink square has improved significantly.
        </span>
      </TaskChecklist>
    </div>
  )
}

export default Description
