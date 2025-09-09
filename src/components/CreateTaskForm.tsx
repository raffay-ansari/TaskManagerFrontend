"use client";

import type React from "react";
import { useState } from "react";
import { useMutation, gql } from "@apollo/client";
import {
  View,
  TextField,
  TextArea,
  Button,
  Flex,
  Heading,
  Form,
  Text,
} from "@adobe/react-spectrum";

const CREATE_TASK = gql`
  mutation CreateTask($title: String!, $description: String!) {
    createTask(title: $title, description: $description) {
      id
      title
      description
      status
    }
  }
`;

const CreateTaskForm: React.FC = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [createTask] = useMutation(CREATE_TASK, {
    refetchQueries: ["GetAllTasks"], // Refetch tasks after creating new task
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!title.trim()) return;

    setIsSubmitting(true);

    try {
      await createTask({
        variables: {
          title: title.trim(),
          description: description.trim(),
        },
      });

      setTitle("");
      setDescription("");
    } catch (error) {
      console.error("Error creating task:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <View>
      <Flex alignItems="center" gap="size-200" marginBottom="size-300">
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
          ➕
        </View>
        <Heading
          level={3}
          UNSAFE_style={{
            color: "#374151",
            fontSize: "1.5rem",
            fontWeight: "600",
          }}
        >
          Create New Task
        </Heading>
      </Flex>

      <Text
        UNSAFE_style={{
          color: "black",
          marginBottom: "24px",
          fontSize: "0.95rem",
        }}
      >
        Add a new task to your workflow and start making progress
      </Text>

      <Form onSubmit={handleSubmit}>
        <Flex direction="column" gap="size-300">
          <TextField
            label="Task Title"
            value={title}
            onChange={setTitle}
            isRequired
            placeholder="Enter a clear, actionable task title..."
            maxLength={110}
            width={"50%"}
            UNSAFE_style={{
              "--spectrum-textfield-border-color": "#e5e7eb",
              "--spectrum-textfield-border-color-hover": "#667eea",
              "--spectrum-textfield-border-color-focus": "#667eea",
            }}
          />

          <TextArea
            label="Description"
            value={description}
            onChange={setDescription}
            placeholder="Provide additional details, context, or requirements..."
            maxLength={500}
            height="size-1700"
            width={"50%"}
            UNSAFE_style={{
              "--spectrum-textfield-border-color": "#e5e7eb",
              "--spectrum-textfield-border-color-hover": "#667eea",
              "--spectrum-textfield-border-color-focus": "#667eea",
            }}
          />

          <Flex justifyContent="end" marginTop="size-300">
            <Button
              variant="cta"
              type="submit"
              isDisabled={!title.trim() || isSubmitting}
              UNSAFE_style={{
                background: isSubmitting
                  ? "#9ca3af"
                  : "linear-gradient(135deg, #667eea, #764ba2)",
                border: "none",
                borderRadius: "8px",
                padding: "12px 24px",
                fontSize: "1rem",
                fontWeight: "600",
                color: "white",
                cursor: isSubmitting ? "not-allowed" : "pointer",
                transition: "all 0.2s ease",
                boxShadow: isSubmitting
                  ? "none"
                  : "0 4px 12px rgba(102, 126, 234, 0.3)",
                transform: isSubmitting ? "none" : "translateY(0)",
                ":hover": !isSubmitting
                  ? {
                      transform: "translateY(-2px)",
                      boxShadow: "0 6px 16px rgba(102, 126, 234, 0.4)",
                    }
                  : {},
              }}
            >
              {isSubmitting ? (
                <Flex alignItems="center" gap="size-100">
                  <View
                    UNSAFE_style={{
                      width: "16px",
                      height: "16px",
                      border: "2px solid rgba(255,255,255,0.3)",
                      borderTop: "2px solid white",
                      borderRadius: "50%",
                      animation: "spin 1s linear infinite",
                    }}
                  />
                  Creating...
                </Flex>
              ) : (
                <Flex alignItems="center" gap="size-100">
                  ✨ Create Task
                </Flex>
              )}
            </Button>
          </Flex>
        </Flex>
      </Form>
    </View>
  );
};

export default CreateTaskForm;
