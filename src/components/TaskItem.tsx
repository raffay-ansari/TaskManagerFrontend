"use client";

import type React from "react";
import { useState } from "react";
import { useMutation, gql } from "@apollo/client";
import {
  View,
  Heading,
  Text,
  Flex,
  ActionButton,
  Well,
} from "@adobe/react-spectrum";
import PlayCircle from "@spectrum-icons/workflow/PlayCircle";
import CheckmarkCircle from "@spectrum-icons/workflow/CheckmarkCircle";
import Pending from "@spectrum-icons/workflow/Pending";

const UPDATE_TASK_STATUS = gql`
  mutation UpdateTaskStatus($id: Int!, $status: TaskStatus!) {
    updateTaskStatus(id: $id, status: $status) {
      id
      status
    }
  }
`;

interface TaskItemProps {
  task: {
    id: number;
    title: string;
    description: string;
    status: "PENDING" | "IN_PROGRESS" | "COMPLETED";
  };
}

const TaskItem: React.FC<TaskItemProps> = ({ task }) => {
  const [isUpdating, setIsUpdating] = useState(false);
  const [updateTaskStatus] = useMutation(UPDATE_TASK_STATUS, {
    refetchQueries: ["GetAllTasks"], // Refetch tasks after mutation
  });

  const updateStatus = async (
    newStatus: "PENDING" | "IN_PROGRESS" | "COMPLETED"
  ) => {
    setIsUpdating(true);

    try {
      await updateTaskStatus({
        variables: {
          id: task.id,
          status: newStatus,
        },
      });
    } catch (error) {
      console.error("Error updating task status:", error);
    } finally {
      setIsUpdating(false);
    }
  };

  const getStatusStyles = (status: string) => {
    switch (status) {
      case "PENDING":
        return {
          background: "linear-gradient(135deg, #fbbf24, #f59e0b)",
          color: "white",
          borderColor: "#f59e0b",
        };
      case "IN_PROGRESS":
        return {
          background: "linear-gradient(135deg, #3b82f6, #1d4ed8)",
          color: "white",
          borderColor: "#1d4ed8",
        };
      case "COMPLETED":
        return {
          background: "linear-gradient(135deg, #10b981, #059669)",
          color: "white",
          borderColor: "#059669",
        };
      default:
        return {
          background: "#e5e7eb",
          color: "#374151",
          borderColor: "#d1d5db",
        };
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "PENDING":
        return "neutral";
      case "IN_PROGRESS":
        return "notice";
      case "COMPLETED":
        return "positive";
      default:
        return "neutral";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "PENDING":
        return <Pending />;
      case "IN_PROGRESS":
        return <PlayCircle />;
      case "COMPLETED":
        return <CheckmarkCircle />;
      default:
        return <Pending />;
    }
  };

  const statusStyles = getStatusStyles(task.status);

  return (
    <Well
      UNSAFE_style={{
        background: "rgba(255, 255, 255, 0.9)",
        backdropFilter: "blur(10px)",
        borderRadius: "12px",
        border: `2px solid ${statusStyles.borderColor}`,
        boxShadow: "0 4px 16px rgba(0, 0, 0, 0.08)",
        transition: "all 0.3s ease",
        ":hover": {
          transform: "translateY(-2px)",
          boxShadow: "0 8px 24px rgba(0, 0, 0, 0.12)",
        },
      }}
    >
      <Flex direction="column" gap="size-300">
        <Flex justifyContent="space-between" alignItems="start" gap="size-300">
          <Flex direction="column" gap="size-150" flex="1">
            <Heading
              level={4}
              UNSAFE_style={{
                color: "#1f2937",
                fontSize: "1.2rem",
                fontWeight: "600",
                lineHeight: "1.4",
                textDecoration:
                  task.status === "COMPLETED" ? "line-through" : "none",
                opacity: task.status === "COMPLETED" ? 0.7 : 1,
              }}
            >
              {task.title}
            </Heading>
            {task.description && (
              <Text
                UNSAFE_style={{
                  color: "#6b7280",
                  fontSize: "0.95rem",
                  lineHeight: "1.5",
                  textDecoration:
                    task.status === "COMPLETED" ? "line-through" : "none",
                  opacity: task.status === "COMPLETED" ? 0.6 : 1,
                }}
              >
                {task.description}
              </Text>
            )}
          </Flex>

          <View
            UNSAFE_style={{
              ...statusStyles,
              padding: "8px 16px",
              borderRadius: "20px",
              fontSize: "0.85rem",
              fontWeight: "600",
              textTransform: "uppercase",
              letterSpacing: "0.5px",
              boxShadow: "0 2px 8px rgba(0, 0, 0, 0.15)",
              display: "flex",
              alignItems: "center",
              gap: "6px",
            }}
          >
            {getStatusIcon(task.status)}
            {task.status.replace("_", " ")}
          </View>
        </Flex>

        <Flex gap="size-200" justifyContent="end" marginTop="size-200">
          {task.status === "PENDING" && (
            <ActionButton
              onPress={() => updateStatus("IN_PROGRESS")}
              isDisabled={isUpdating}
              UNSAFE_style={{
                background: "linear-gradient(135deg, #3b82f6, #1d4ed8)",
                color: "white",
                border: "none",
                borderRadius: "8px",
                padding: "8px 16px",
                fontSize: "0.9rem",
                fontWeight: "500",
                transition: "all 0.2s ease",
                ":hover": !isUpdating
                  ? {
                      transform: "translateY(-1px)",
                      boxShadow: "0 4px 12px rgba(59, 130, 246, 0.3)",
                    }
                  : {},
              }}
            >
              <PlayCircle />
              <Text>Start</Text>
            </ActionButton>
          )}

          {task.status === "IN_PROGRESS" && (
            <>
              <ActionButton
                onPress={() => updateStatus("PENDING")}
                isDisabled={isUpdating}
                UNSAFE_style={{
                  background: "linear-gradient(135deg, #fbbf24, #f59e0b)",
                  color: "white",
                  border: "none",
                  borderRadius: "8px",
                  padding: "8px 16px",
                  fontSize: "0.9rem",
                  fontWeight: "500",
                  transition: "all 0.2s ease",
                  ":hover": !isUpdating
                    ? {
                        transform: "translateY(-1px)",
                        boxShadow: "0 4px 12px rgba(251, 191, 36, 0.3)",
                      }
                    : {},
                }}
              >
                <Pending />
                <Text>Pending</Text>
              </ActionButton>
              <ActionButton
                onPress={() => updateStatus("COMPLETED")}
                isDisabled={isUpdating}
                UNSAFE_style={{
                  background: "linear-gradient(135deg, #10b981, #059669)",
                  color: "white",
                  border: "none",
                  borderRadius: "8px",
                  padding: "8px 16px",
                  fontSize: "0.9rem",
                  fontWeight: "500",
                  transition: "all 0.2s ease",
                  ":hover": !isUpdating
                    ? {
                        transform: "translateY(-1px)",
                        boxShadow: "0 4px 12px rgba(16, 185, 129, 0.3)",
                      }
                    : {},
                }}
              >
                <CheckmarkCircle />
                <Text>Complete</Text>
              </ActionButton>
            </>
          )}

          {task.status === "COMPLETED" && (
            <ActionButton
              onPress={() => updateStatus("PENDING")}
              isDisabled={isUpdating}
              UNSAFE_style={{
                background: "linear-gradient(135deg, #6b7280, #4b5563)",
                color: "white",
                border: "none",
                borderRadius: "8px",
                padding: "8px 16px",
                fontSize: "0.9rem",
                fontWeight: "500",
                transition: "all 0.2s ease",
                ":hover": !isUpdating
                  ? {
                      transform: "translateY(-1px)",
                      boxShadow: "0 4px 12px rgba(107, 114, 128, 0.3)",
                    }
                  : {},
              }}
            >
              <Pending />
              <Text>Reopen</Text>
            </ActionButton>
          )}
        </Flex>
      </Flex>
    </Well>
  );
};

export default TaskItem;
