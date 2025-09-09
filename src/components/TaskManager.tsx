import type React from "react";
import { Suspense } from "react";
import {
  View,
  Heading,
  Flex,
  ProgressCircle,
  Text,
  Well,
  Divider,
} from "@adobe/react-spectrum";
import TaskList from "./TaskList";
import CreateTaskForm from "./CreateTaskForm";

const TaskManager: React.FC = () => {
  return (
    <View
      padding="size-600"
      // maxWidth="1400px"
      margin="0 auto"
      UNSAFE_style={{
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        minHeight: "100vh",
      }}
    >
      <Flex direction="column" gap="size-500">
        <Well
          UNSAFE_style={{
            background: "rgba(255, 255, 255, 0.95)",
            backdropFilter: "blur(10px)",
            borderRadius: "16px",
            border: "1px solid rgba(255, 255, 255, 0.2)",
            boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
          }}
        >
          <Flex direction="column" alignItems="center" gap="size-300">
            <Heading
              level={1}
              UNSAFE_style={{
                background: "linear-gradient(135deg, #667eea, #764ba2)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                fontSize: "3rem",
                fontWeight: "700",
                textAlign: "center",
              }}
            >
              ✨ Task Manager Pro
            </Heading>

            <Text
              UNSAFE_style={{
                fontSize: "1.2rem",
                color: "#6b7280",
                textAlign: "center",
                maxWidth: "600px",
              }}
            >
              Organize your workflow with style. Create, manage, and track your
              tasks with real-time synchronization and beautiful design.
            </Text>
          </Flex>
        </Well>

        <Well
          UNSAFE_style={{
            background: "rgba(255, 255, 255, 0.9)",
            backdropFilter: "blur(10px)",
            borderRadius: "12px",
            border: "1px solid rgba(255, 255, 255, 0.2)",
            boxShadow: "0 4px 16px rgba(0, 0, 0, 0.1)",
          }}
        >
          <Flex direction="column" gap="size-300">
            <Heading
              level={3}
              UNSAFE_style={{ color: "#374151", marginBottom: "16px" }}
            >
              📊 Progress Overview
            </Heading>

            <Flex direction="row" gap="size-400" wrap>
              <Flex direction="column" alignItems="center" gap="size-100">
                <View
                  UNSAFE_style={{
                    width: "60px",
                    height: "60px",
                    borderRadius: "50%",
                    background: "linear-gradient(135deg, #fbbf24, #f59e0b)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "white",
                    fontSize: "1.5rem",
                    fontWeight: "bold",
                  }}
                >
                  ⏳
                </View>
                <Text UNSAFE_style={{ fontWeight: "600", color: "#374151" }}>
                  Pending
                </Text>
              </Flex>

              <Flex direction="column" alignItems="center" gap="size-100">
                <View
                  UNSAFE_style={{
                    width: "60px",
                    height: "60px",
                    borderRadius: "50%",
                    background: "linear-gradient(135deg, #3b82f6, #1d4ed8)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "white",
                    fontSize: "1.5rem",
                    fontWeight: "bold",
                  }}
                >
                  🚀
                </View>
                <Text UNSAFE_style={{ fontWeight: "600", color: "#374151" }}>
                  In Progress
                </Text>
              </Flex>

              <Flex direction="column" alignItems="center" gap="size-100">
                <View
                  UNSAFE_style={{
                    width: "60px",
                    height: "60px",
                    borderRadius: "50%",
                    background: "linear-gradient(135deg, #10b981, #059669)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "white",
                    fontSize: "1.5rem",
                    fontWeight: "bold",
                  }}
                >
                  ✅
                </View>
                <Text UNSAFE_style={{ fontWeight: "600", color: "#374151" }}>
                  Completed
                </Text>
              </Flex>
            </Flex>
          </Flex>
        </Well>

        <Well
          UNSAFE_style={{
            background: "rgba(255, 255, 255, 0.9)",
            backdropFilter: "blur(10px)",
            borderRadius: "12px",
            border: "1px solid rgba(255, 255, 255, 0.2)",
            boxShadow: "0 4px 16px rgba(0, 0, 0, 0.1)",
          }}
        >
          <CreateTaskForm />
        </Well>

        <Divider size="S" UNSAFE_style={{ opacity: 0.3 }} />

        <Well
          UNSAFE_style={{
            background: "rgba(255, 255, 255, 0.9)",
            backdropFilter: "blur(10px)",
            borderRadius: "12px",
            border: "1px solid rgba(255, 255, 255, 0.2)",
            boxShadow: "0 4px 16px rgba(0, 0, 0, 0.1)",
            minHeight: "400px",
          }}
        >
          <Suspense
            fallback={
              <Flex
                justifyContent="center"
                alignItems="center"
                height="300px"
                direction="column"
                gap="size-200"
              >
                <ProgressCircle
                  aria-label="Loading tasks..."
                  isIndeterminate
                  UNSAFE_style={{
                    "--spectrum-progresscircle-track-fill-color": "#e5e7eb",
                    "--spectrum-progresscircle-fill-color": "#667eea",
                  }}
                />
                <Text UNSAFE_style={{ color: "#6b7280", fontSize: "1.1rem" }}>
                  Loading your tasks...
                </Text>
              </Flex>
            }
          >
            <TaskList />
          </Suspense>
        </Well>
      </Flex>
    </View>
  );
};

export default TaskManager;
