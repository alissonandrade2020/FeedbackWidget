import { useState } from "react";
import { CloseButton } from "../CloseButton";

import bugImageUrl from "../../assetsimg/bug.svg";
import ideaImageUrl from "../../assetsimg/idea.svg";
import thoughtImageUrl from "../../assetsimg/thought.svg";
import { FeedbackTypeStep } from "./Steps/FeedbackTypeStep";
import { FeedbackContentStep } from "./Steps/FeedbackContentStep";
import { FeedbackSuccessStep } from "./Steps/FeedbackSuccessStep";

export const feedbackTypes = {
  BUG: {
    title: "Problema",
    image: {
      source: bugImageUrl,
      alt: "Imagem de um inseto",
    },
  },
  IDEA: {
    title: "Ideia",
    image: {
      source: ideaImageUrl,
      alt: "Imagem de uma lâmpada",
    },
  },
  OTHER: {
    title: "Outro",
    image: {
      source: thoughtImageUrl,
      alt: "Imagem de um balão de pensamento",
    },
  },
};

// Object.entries(feedbackTypes) =>
/**
 * [
 *  ['BUG', {...}],
 *  ['IDEA', {...}],
 *  ['THOUGHT, {...}],
 * ]
 */

export type FeedbackType = keyof typeof feedbackTypes;

export function WidgetForm() {
  const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null);
  const [feedbackSent, setFeedbackSent] = useState(false);

  function handleRestartFeedback() {
    setFeedbackSent(false);
    setFeedbackType(null);
  }

  return (
    <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
      {feedbackSent ? (
        <FeedbackSuccessStep
          onFeedbackRestartRequested={handleRestartFeedback}
        />
      ) : (
        <>
          {!feedbackType ? (
            <FeedbackTypeStep onFeedbackTypeChanged={setFeedbackType} />
          ) : (
            <FeedbackContentStep
              feedbackType={feedbackType}
              onFeedbackRestartRequested={handleRestartFeedback}
              onFeedbackSent={() => setFeedbackSent(true)}
            />
          )}
        </>
      )}
      <footer className="text-xs text-neutral-400">
        Desenvolvido com ♥{" "}
        <a
          className="text-violet-600 underline underline-offset-2"
          href="https://www.rocketseat.com.br/"
        >
          Rocketseat
        </a>
        /
        <a
          className="text-amber-500 underline underline-offset-2"
          href="https://www.https://github.com/alissonandrade2020.com"
        >
          Github
        </a>
        /
        <a
          className="text-blue-200 underline underline-offset-2"
          href="http://alissondeandradearaujo.000webhostapp.com"
        >
          Alisson Andrade
        </a>
      </footer>
    </div>
  );
}
