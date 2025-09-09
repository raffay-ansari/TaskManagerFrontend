"use client";

import type React from "react";
import { useQuery, gql } from "@apollo/client";
import {
  View,
  Heading,
  Flex,
  Text,
  Well,
  Divider,
} from "@adobe/react-spectrum";
import TaskItem from "./TaskItem";

const GET_ALL_TASKS = gql`
  query GetAllTasks {
    allTasks(order: [{ id: DESC }]) {
      id
      title
      description
      status
    }
  }
`;

interface Task {
  id: number;
  title: string;
  description: string;
  status: "PENDING" | "IN_PROGRESS" | "COMPLETED";
}

const TaskList: React.FC = () => {
  const { loading, error, data } = useQuery(GET_ALL_TASKS);

  if (loading) return <Text>Loading tasks...</Text>;
  if (error) return <Text>Error loading tasks: {error.message}</Text>;

  const tasks: Task[] = data?.allTasks || [];
  const pendingTasks = tasks.filter((task) => task.status === "PENDING");
  const inProgressTasks = tasks.filter((task) => task.status === "IN_PROGRESS");
  const completedTasks = tasks.filter((task) => task.status === "COMPLETED");

  const renderTaskSection = (
    title: string,
    tasks: Task[],
    emoji: string,
    gradientColors: string,
    emptyMessage: string
  ) => (
    <View>
      <Flex alignItems="center" gap="size-200" marginBottom="size-300">
        <View
          UNSAFE_style={{
            width: "36px",
            height: "36px",
            borderRadius: "50%",
            background: gradientColors,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "1.1rem",
          }}
        >
          {emoji}
        </View>
        <Heading
          level={4}
          UNSAFE_style={{
            color: "#374151",
            fontSize: "1.3rem",
            fontWeight: "600",
          }}
        >
          {title} ({tasks.length})
        </Heading>
      </Flex>

      {tasks.length === 0 ? (
        <Well
          UNSAFE_style={{
            background: "rgba(249, 250, 251, 0.8)",
            border: "2px dashed #d1d5db",
            borderRadius: "12px",
            padding: "32px",
            textAlign: "center",
          }}
        >
          <Text
            UNSAFE_style={{
              color: "#9ca3af",
              fontSize: "1rem",
              fontStyle: "italic",
            }}
          >
            {emptyMessage}
          </Text>
        </Well>
      ) : (
        <Flex direction="column" gap="size-300">
          {tasks.map((task, index) => (
            <View
              key={task.id}
              UNSAFE_style={{
                animation: `slideIn 0.3s ease-out ${index * 0.1}s both`,
              }}
            >
              <TaskItem task={task} />
            </View>
          ))}
        </Flex>
      )}
    </View>
  );

  return (
    <View>
      <Flex alignItems="center" gap="size-200" marginBottom="size-400">
        <View
          UNSAFE_style={{
            width: "40px",
            height: "40px",
            borderRadius: "50%",
            background: "linear-gradient(135deg, #667eea, #764ba2)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "1.2rem",
          }}
        >
          📋
        </View>
        <Heading
          level={3}
          UNSAFE_style={{
            color: "#374151",
            fontSize: "1.6rem",
            fontWeight: "600",
          }}
        >
          Your Tasks
        </Heading>
      </Flex>

      <Flex direction="column" gap="size-500">
        {renderTaskSection(
          "Pending Tasks",
          pendingTasks,
          "⏳",
          "linear-gradient(135deg, #fbbf24, #f59e0b)",
          "No pending tasks - you're all caught up! 🎉"
        )}

        <Divider size="S" UNSAFE_style={{ opacity: 0.2 }} />

        {renderTaskSection(
          "In Progress",
          inProgressTasks,
          "🚀",
          "linear-gradient(135deg, #3b82f6, #1d4ed8)",
          "No tasks in progress - time to start something new!"
        )}

        <Divider size="S" UNSAFE_style={{ opacity: 0.2 }} />

        {renderTaskSection(
          "Completed Tasks",
          completedTasks,
          "✅",
          "linear-gradient(135deg, #10b981, #059669)",
          "No completed tasks yet - let's get productive!"
        )}
      </Flex>

      <style jsx>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </View>
  );
};

export default TaskList;
