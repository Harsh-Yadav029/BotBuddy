"use client"; // Needed because useChatRuntime is a hook

import { AssistantRuntimeProvider } from "@assistant-ui/react";
import { useChatRuntime } from "@assistant-ui/react-ai-sdk";
import { ThreadList } from "@/components/assistant-ui/thread-list";
import { Thread } from "@/components/assistant-ui/thread";

export default function Page() {
  const runtime = useChatRuntime({});

  return (
    <AssistantRuntimeProvider runtime={runtime}>
      <div className="p-4">
        <ThreadList />
        <Thread />
      </div>
    </AssistantRuntimeProvider>
  );
}
