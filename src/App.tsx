import "./App.css";
import { ReactFlow } from "@xyflow/react";

import "@xyflow/react/dist/style.css";

function App() {
  const initialNodes = [
    {
      id: "1",
      position: { x: 0, y: 0 },
      animated: true,
      data: { label: "Concept" },
    },
    {
      id: "2",
      position: { x: 0, y: 100 },
      animated: true,
      data: { label: "Branch Draft" },
    },
    {
      id: "3",
      position: { x: 0, y: 200 },
      animated: true,
      data: { label: "SRC" },
    },
    {
      id: "4",
      position: { x: 0, y: 300 },
      animated: true,
      data: { label: "PSO/IRB" },
    },
  ];
  const initialEdges = [
    { id: "e1-2", source: "1", target: "2" },
    { id: "e2-3", source: "2", target: "3" },
    { id: "e3-4", source: "3", target: "4" },
    { id: "e3-1", source: "3", target: "1" },
    { id: "e4-2", source: "4", target: "2" },
  ];

  return (
    <>
      <div style={{ width: "100vw", height: "100vh" }}>
        <ReactFlow nodes={initialNodes} edges={initialEdges} />
      </div>
    </>
  );
}

export default App;
