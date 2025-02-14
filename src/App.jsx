import React, { useCallback } from "react";
import ReactFlow, {
  addEdge,
  Background,
  Controls,
  useEdgesState,
  useNodesState,
} from "reactflow";
import "./style.css";
import "reactflow/dist/style.css";

export default function App() {
  const initialNodes = [
    {
      id: "1",
      type: "input",
      data: { label: "Başlangıç" },
      position: { x: 400, y: 50 },
      style: { background: "#4CAF50", color: "#fff" },
    },
    {
      id: "1.1",
      data: { label: "Fikir Geliştirme" },
      position: { x: 200, y: 100 },
      style: { background: "#81C784", color: "#fff" },
    },
    {
      id: "1.2",
      data: { label: "Gereksinim Analizi" },
      position: { x: 600, y: 100 },
      style: { background: "#66BB6A", color: "#fff" },
    },

    {
      id: "2",
      data: { label: "Planlama" },
      position: { x: 400, y: 200 },
      style: { background: "#FF9800", color: "#fff" },
    },
    {
      id: "2.1",
      data: { label: "Teknoloji Seçimi" },
      position: { x: 200, y: 250 },
      style: { background: "#FFB74D", color: "#fff" },
    },
    {
      id: "2.2",
      data: { label: "Proje Zaman Çizelgesi" },
      position: { x: 600, y: 250 },
      style: { background: "#FFA726", color: "#fff" },
    },

    {
      id: "3",
      data: { label: "Geliştirme" },
      position: { x: 400, y: 350 },
      style: { background: "#2196F3", color: "#fff" },
    },
    {
      id: "3.1",
      data: { label: "Frontend" },
      position: { x: 200, y: 400 },
      style: { background: "#64B5F6", color: "#fff" },
    },
    {
      id: "3.2",
      data: { label: "Backend" },
      position: { x: 600, y: 400 },
      style: { background: "#42A5F5", color: "#fff" },
    },
    {
      id: "3.3",
      data: { label: "Veritabanı Yönetimi" },
      position: { x: 400, y: 450 },
      style: { background: "#1E88E5", color: "#fff" },
    },

    {
      id: "4",
      data: { label: "Test" },
      position: { x: 400, y: 550 },
      style: { background: "#9C27B0", color: "#fff" },
    },
    {
      id: "4.1",
      data: { label: "Birim Testleri" },
      position: { x: 200, y: 600 },
      style: { background: "#BA68C8", color: "#fff" },
    },
    {
      id: "4.2",
      data: { label: "Entegrasyon Testleri" },
      position: { x: 600, y: 600 },
      style: { background: "#AB47BC", color: "#fff" },
    },

    {
      id: "5",
      data: { label: "Yayına Alma" },
      position: { x: 400, y: 700 },
      style: { background: "#F44336", color: "#fff" },
    },
    {
      id: "5.1",
      data: { label: "DevOps & CI/CD" },
      position: { x: 200, y: 750 },
      style: { background: "#EF5350", color: "#fff" },
    },
    {
      id: "5.2",
      data: { label: "Canlı İzleme & Bakım" },
      position: { x: 600, y: 750 },
      style: { background: "#E53935", color: "#fff" },
    },
  ];

  const initialEdges = [
    {
      id: "e1-2",
      source: "1",
      target: "2",
      animated: true,
      style: { stroke: "#000" },
    },
    {
      id: "e2-3",
      source: "2",
      target: "3",
      animated: true,
      style: { stroke: "#000" },
    },
    {
      id: "e3-4",
      source: "3",
      target: "4",
      animated: true,
      style: { stroke: "#000" },
    },
    {
      id: "e4-5",
      source: "4",
      target: "5",
      animated: true,
      style: { stroke: "#000" },
    },

    {
      id: "e1-1.1",
      source: "1",
      target: "1.1",
      animated: false,
      style: { stroke: "#555" },
    },
    {
      id: "e1-1.2",
      source: "1",
      target: "1.2",
      animated: false,
      style: { stroke: "#555" },
    },
    {
      id: "e2-2.1",
      source: "2",
      target: "2.1",
      animated: false,
      style: { stroke: "#555" },
    },
    {
      id: "e2-2.2",
      source: "2",
      target: "2.2",
      animated: false,
      style: { stroke: "#555" },
    },
    {
      id: "e3-3.1",
      source: "3",
      target: "3.1",
      animated: false,
      style: { stroke: "#555" },
    },
    {
      id: "e3-3.2",
      source: "3",
      target: "3.2",
      animated: false,
      style: { stroke: "#555" },
    },
    {
      id: "e3-3.3",
      source: "3",
      target: "3.3",
      animated: false,
      style: { stroke: "#555" },
    },

    {
      id: "e4-4.1",
      source: "4",
      target: "4.1",
      animated: false,
      style: { stroke: "#555" },
    },
    {
      id: "e4-4.2",
      source: "4",
      target: "4.2",
      animated: false,
      style: { stroke: "#555" },
    },
    {
      id: "e5-5.1",
      source: "5",
      target: "5.1",
      animated: false,
      style: { stroke: "#555" },
    },
    {
      id: "e5-5.2",
      source: "5",
      target: "5.2",
      animated: false,
      style: { stroke: "#555" },
    },
  ];

  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = useCallback(
    (connection) => setEdges((eds) => addEdge(connection, eds)),
    [setEdges]
  );

  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      {/* <h1
        style={{
          position: "grid",
          top: "10%",
          left: "50%",
          transform: "translateX(-50)",
          fontSize: "24px",
          fontWeight: "bold",
          background: "rgba(255, 255, 0.8)",
          padding: "10px 20px",
          borderRadius: "8px",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          zIndex: "20",
        }}
      >
        Yazılım Geliştirme Süreçleri
      </h1> */}

      <h1
        style={{
          position: "absolute",
          top: "5%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          fontSize: "32px",
          fontWeight: "bold",
          background: "rgba(255, 255, 0.8)",
          padding: "15px 30px",
          borderRadius: "10px",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          zIndex: 20,
          textAlign: "center",
        }}
      >
        Yazılım Geliştirme Süreçleri
      </h1>

      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        fitView
      >
        <Controls />
        <Background variant="dots" gap={12} size={1} />
      </ReactFlow>
    </div>
  );
}
